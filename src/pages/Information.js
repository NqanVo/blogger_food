import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/default/Button';
import Header from '../components/default/Header';
import Wrapper from '../components/default/Wrapper';
import { LogoutApi } from '../reqApi/Auth';

import axios from 'axios';


import InfomationView from '../components/InfomationView';
import UpdateInfomationView from '../components/UpdateInfomationView';
import UpdateAvatarView from '../components/UpdateAvatarView';


const Information = () => {
    const [action, setAction] = useState("Information")
    const user = useSelector((state) => state.auth.login.user_data)
    const navigate = useNavigate()
    const dispath = useDispatch()

    const handleLogout = async () => {
        await LogoutApi(navigate, dispath)
    }



    return (
        <Wrapper>
            <Header></Header>
            {
                !user.id ? <Button name={"Login"} handleOnClick={() => navigate("/login")} size="l" type="main" />
                    :
                    <section className='w-full mx-auto px-3 md:px-5 lg:px-32 xl:px-40 grid grid-cols-4 xl:gap-4 gap-3 overflow-hidden'>
                        <div className="col-span-4 lg:col-span-1 flex lg:flex-col gap-3 xl:gap-4 overflow-hidden scroll-smooth scrollbar">
                            <Button name={"Information"} handleOnClick={() => setAction("Information")} size="l" type={action === "Information" ? "main" : "primary"} />
                            <Button name={"Update Information"} handleOnClick={() => setAction("Update Information")} size="l" type={action === "Update Information" ? "main" : "primary"} />
                            <Button name={"Update Avatar"} handleOnClick={() => setAction("Update Avatar")} size="l" type={action === "Update Avatar" ? "main" : "primary"} />
                            <Button name={"Update Password"} handleOnClick={() => setAction("Update Password")} size="l" type={action === "Update Password" ? "main" : "primary"} />
                            <Button name={"Logout"} handleOnClick={handleLogout} size="l" type="primary" />
                        </div>
                        <div className="col-span-4 lg:col-span-3 border rounded-md shadow-sm p-4">
                            {action === "Information" && <InfomationView user={user} />}
                            {action === "Update Information" && <UpdateInfomationView user={user} />}
                            {action === "Update Avatar" && <UpdateAvatarView user={user} />}

                        </div>
                    </section>
            }

        </Wrapper>
    );
};

export default Information; 