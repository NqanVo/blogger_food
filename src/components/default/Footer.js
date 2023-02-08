import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full h-auto lg:min-h-40 bg-red-300 py-3 px-3 md:px-5 lg:px-32 xl:px-40 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className="h-full">
                <h2 className='font-medium text-xl text-center lg:text-left'>About</h2>
                <p className=' text-center lg:text-justify w-auto lg:w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis delectus adipisci amet illum. Aliquid nobis reprehenderit perspiciatis nihil sapiente adipisci explicabo nisi. Sed libero recusandae cum illum consequatur odio dolorem?</p>
            </div>
            <div className="text-center lg:text-right">
                <h2 className='font-medium text-xl'>Design by</h2>
                <p className=''>Vo Nguyen Phuc Ngan</p>
            </div>
        </footer>
    );
};

export default Footer;