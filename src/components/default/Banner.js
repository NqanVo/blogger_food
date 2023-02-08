import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-full h-[500px] relative flex justify-center items-center mb-20'>
            <img
                className='absolute inset-0 h-full w-full object-cover bg-black'
                src="https://d2lwt6tidfiof0.cloudfront.net/images/background/culinary.jpg" alt="" />
            <div className="absolute inset-0 bg-black/60 blur-[2px]">
            </div>
            <div className="z-10 text-white flex flex-col items-center gap-5 font-medium">
                <h1 className='text-3xl'>Food tour</h1>
                <a href="#recipes">
                    <button className='px-5 py-2 border-[2px] border-white bg-red-400'>View Recipes</button>
                </a>
            </div>
            <div className="z-10 absolute -bottom-20 right-0 left-0 h-40 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 text-white font-medium text-xl">
                <div className="relative w-full h-full border-[4px] border-white overflow-hidden">
                    <img
                        className='absolute inset-0 w-full h-full object-cover'
                        src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Asian-Orange-Chicken-with-Green-Onions.png" alt="" />
                    <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                    <h2 className='absolute inset-0 flex justify-center items-center'>Asian</h2>
                </div>
                <div className="relative w-full h-full flex justify-center items-center border-[4px] border-white overflow-hidden">
                    <img
                        className='absolute inset-0 w-full h-full object-cover'
                        src="https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280" alt="" />
                    <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                    <h2 className='absolute inset-0 flex justify-center items-center'>India</h2>
                </div>
                <div className="relative w-full h-full flex justify-center items-center border-[4px] border-white overflow-hidden">
                    <img
                        className='absolute inset-0 w-full h-full object-cover'
                        src="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China-1140x694.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                    <h2 className='absolute inset-0 flex justify-center items-center'>China</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;