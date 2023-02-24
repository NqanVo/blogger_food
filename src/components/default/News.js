import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const News = (props) => {
    const { data, title } = props
    return (
        <div className="flex flex-col gap-4">
            <h1 className='text-3xl font-medium pb-2 border-b-4 border-red-400'>{title}</h1>
            <div className="w-full flex flex-col gap-2">
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`w-full h-20 flex gap-2`}>
                            <img src={item.thumb} alt="" className='w-20 h-20 object-cover' />
                            <div className="">
                                <p className='text-sm font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                                <p className='flex items-center gap-2 text-sm'><AiOutlineUser className='text-red-400' />  By ngan</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default News;