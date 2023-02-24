import React from 'react';
import Button from './Button';
import Typed from "react-typed"
const categorise = [
    {
        name: "Asian",
        thumb: "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Asian-Orange-Chicken-with-Green-Onions.png"
    },
    {
        name: "India",
        thumb: "https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280"
    },
    {
        name: "Viet Nam",
        thumb: "https://vietnamtravel.com/images/2020/10/vietnamese-cuisine3.jpg.webp"
    },
    {
        name: "China",
        thumb: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/Untitled-design-2022-01-27T153138.911.jpg"
    }

]

const Banner = () => {
    return (
        <div className='w-full h-[500px] relative flex justify-center items-center mb-20'>
            <img
                className='absolute inset-0 h-full w-full object-cover bg-black'
                src="https://d2lwt6tidfiof0.cloudfront.net/images/background/culinary.jpg" alt="" />
            <div className="absolute inset-0 bg-black/60 blur-[2px]">
            </div>
            <div className="z-10 text-white flex flex-col items-center gap-5 font-medium">
                <Typed
                    className='text-xl lg:text-3xl text-white font-main tracking-wider'
                    strings={[
                        'Share your feelings...',
                        'Discover new dishes'
                    ]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop>
                </Typed>
                <a href="#recipes">
                    <Button name={"Let do it !"} size="l" type="main" />
                </a>
            </div>
            <div className="z-10 absolute -bottom-20 right-0 left-0 h-40 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 text-white font-medium text-xl">
                {categorise.map((category) => (
                    <div key={category.name} className="relative w-full h-full flex justify-center items-center overflow-hidden border-4 bg-white border-white">
                        <img src={category.thumb} alt="" className='scale-150 blur-sm opacity-50' />
                        <div className="absolute z-10 w-[95%] h-[90%] m-auto">
                            <img
                                className='w-full h-full object-cover opacity-100'
                                src={category.thumb} alt="" />
                            {/* <h2 className='absolute inset-0 flex justify-center items-center z-20 tracking-wider font-main'>{category.name}</h2> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;