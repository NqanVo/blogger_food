import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateInfoAPI } from '../reqApi/User';
import Button from './default/Button';
import FormC from './FormController/FormC';
import InputC from './FormController/InputC';

import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


const UpdateInfomationView = (props) => {
    const { user } = props
    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const dispath = useDispatch()
    const navigate = useNavigate()
    const [country, setCountry] = useState([])
    const listCountry = []

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

    //update
    const handleUpdateInfo = async (values) => {
        updateInfoAPI(user.id, values, navigate, dispath)
    }
    return (
        <>
            {listCountry.length > 0 && country ?
                (<div>
                    <FormC
                        handleSubmit={handleSubmit}
                        onSubmit={handleUpdateInfo}
                    >
                        <InputC
                            type={"text"}
                            label={"Nick name"}
                            name={"user_name"}
                            valuesOfText={user.user_name}
                            register={register}
                            rules={{ required: "Nick name is required" }}
                            error={errors.user_name}
                        />
                        <InputC
                            type={"selected"}
                            label={"Country"}
                            name={"user_country"}
                            selectedOfSelect={user.user_country}
                            register={register}
                            rules={{ required: "Country is required" }}
                            error={errors.user_country}
                            valuesOfSelect={listCountry}
                        />
                        <Button
                            type="main"
                            size="l"
                            name="Update"
                        ></Button>
                    </FormC>
                </div>)
                : <Loading />}
        </>
    );
};

export default UpdateInfomationView;