import React from 'react';
import { AiFillFacebook } from "react-icons/ai"
import { Link } from 'react-router-dom';
const Media = () => {
    return (
        <section className='w-full grid grid-cols-5 overflow-hidden h-32 lg:h-auto max-h-40 lg:max-h-52 relative'>
            <img
                className='w-full h-full object-cover'
                src="https://img.delicious.com.au/BeKyn8Dn/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png" alt="" />
            <img
                className='w-full h-full object-cover'
                src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt="" />
            <img
                className='w-full h-full object-cover'
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" alt="" />
            <img
                className='w-full h-full object-cover'
                src="https://www.washingtonian.com/wp-content/uploads/2021/07/2Fiftys-1500x1000.jpg" alt="" />
            <img
                className='w-full h-full object-cover'
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" alt="" />
            <div className="absolute inset-0 bg-black/60 blur-[2px]" />
            <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-2/3 h-32 ">
                <div className="z-10 absolute inset-0 h-full w-full flex justify-center items-center">
                    <Link className='cursor-pointer w-20 h-20 bg-red-400/50 rounded-full flex justify-center items-center'>
                        <AiFillFacebook size={30} className="text-white"></AiFillFacebook>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Media;