import React from 'react';
import { useSelector } from 'react-redux';
import loadingAnimate from "../assets/image/loading.gif"
const Loading = () => {
    const loading = useSelector((state) => state.auth.loading)

    return (
        <div className="">
            {!loading ? "" : (<div className='fixed w-full h-full inset-0 z-[100] bg-black/30 flex justify-center items-center'>
                <img src={loadingAnimate} alt="" className='w-28 h-28 object-cover animate-bounce' />
            </div>)}
        </div>
    );
};

export default Loading;