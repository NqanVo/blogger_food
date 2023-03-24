import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../components/default/Wrapper';
import axios from "axios"
import Button from '../components/default/Button';
import { useForm } from 'react-hook-form';
import { AiOutlineCloudUpload } from "react-icons/ai"
import _ from "lodash"
import { RegisterApi } from "../reqApi/Auth"
import FormC from '../components/FormController/FormC';
import InputC from '../components/FormController/InputC';



const Register = () => {
    const navigate = useNavigate()

    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const [cruAvatar, setCruAvatar] = useState()
    const [country, setCountry] = useState([])
    const listCountry = []

    //handle register
    const onRegister = (data) => {
        const file = data.user_avatar[0]
        const formData = new FormData()

        formData.append("file", file)
        _.forIn(data, (value, key) => {
            formData.append(key, value)
        })
        RegisterApi(formData, navigate)
    }

    //get list country
    useEffect(() => {
        const getListCountry = async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setCountry(res.data)
        }
        getListCountry()
    }, [])
    for (let i = 0; i < country.length; i++)
        listCountry.push(country[i].translations.cym.common)

    //create image preview
    useEffect(() => {
        if (watch("user_avatar")) {
            if (watch("user_avatar")[0]) {
                cruAvatar && URL.revokeObjectURL(cruAvatar)
                const file = watch("user_avatar")[0]
                file.preview = URL.createObjectURL(file)
                return setCruAvatar(file.preview)
            }
        }
    }, [watch("user_avatar")])


    return (
        <Wrapper>
            <div className="relative w-full max-h-screen h-screen overflow-hidden">
                <img
                    className='inset-0 w-full h-full object-cover'
                    src="https://fox4kc.com/wp-content/uploads/sites/16/2022/07/GettyImages-1326917407.jpg?w=2560&h=1440&crop=1" alt="" />
                <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 min-w-[400px] min-h-max bg-white p-5 flex flex-col gap-4 justify-between">
                    <div className="w-14 h-14 rounded-full overflow-hidden mx-auto">
                        <img src={cruAvatar ? cruAvatar : "https://static.thenounproject.com/png/5100711-200.png"} alt="" className='w-full h-full object-cover' />
                    </div>
                    <FormC
                        handleSubmit={handleSubmit}
                        onSubmit={onRegister}
                    >
                        <InputC
                            type={"text"}
                            label={"Nick name"}
                            name={"user_name"}
                            register={register}
                            rules={{ required: "Nick name is required" }}
                            error={errors.user_name}
                        />
                        <InputC
                            type={"selected"}
                            label={"Country"}
                            name={"user_country"}
                            register={register}
                            rules={{ required: "Country is required" }}
                            error={errors.user_country}
                            valuesOfSelect={listCountry}
                        />
                        <InputC
                            type={"email"}
                            label={"Email"}
                            name={"user_email"}
                            rules={{ required: "Email is required" }}
                            register={register}
                            error={errors.user_email}
                        />
                        <InputC
                            type={"password"}
                            label={"Password"}
                            name={"user_password"}
                            rules={{ required: "Password is required" }}
                            register={register}
                            error={errors.user_password}
                        />
                        <InputC
                            type={"file"}
                            label={"Chose avatar"}
                            name={"user_avatar"}
                            register={register}
                            error={errors.user_avatar}
                            rules={{ required: "Avatar is required" }}
                        />
                        <Button
                            type="main"
                            size="l"
                            name="Register"
                        ></Button>
                    </FormC>
                    <div className="flex justify-between">
                        <Link to={"/"}><h3 className='text-base'>Back home page</h3> </Link>
                        <Link to={"/login"}><h3 className='text-base'>Login</h3></Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Register;