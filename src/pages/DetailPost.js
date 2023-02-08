import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/default/Footer';
import Header from '../components/default/Header';
import Wrapper from '../components/default/Wrapper';

const DetailPost = () => {
    return (
        <Wrapper>
            <Header></Header>
            <section className="grid grid-cols-1 lg:grid-cols-4 px-3 md:px-5 lg:px-32 xl:px-40 w-full gap-5">
                <div className="col-span-3 flex flex-col gap-2">
                    <div className="w-full max-h-96 overflow-hidden">
                        <img
                            className='w-full h-full object-cover'
                            src="https://cdn.tgdd.vn/2021/05/CookProduct/thumb1(1)-1200x676.jpg" alt="" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <img
                            className='w-20 h-20 object-cover rounded-full'
                            src="https://cdn.tgdd.vn/2021/05/CookProduct/thumb1(1)-1200x676.jpg" alt="" />
                        <div className="">
                            <h3 className='font-medium'>Ngan vo</h3>
                            <span>Yesterday</span>
                        </div>
                    </div>
                    <h1 className='font-medium text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, sint</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis earum accusamus quibusdam quasi beatae, rem libero ex consectetur provident exercitationem unde doloribus obcaecati molestias quia eaque, qui sed ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis earum accusamus quibusdam quasi beatae, rem libero ex consectetur provident exercitationem unde doloribus obcaecati molestias quia eaque, qui sed ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis earum accusamus quibusdam quasi beatae, rem libero ex consectetur provident exercitationem unde doloribus obcaecati molestias quia eaque, qui sed ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis earum accusamus quibusdam quasi beatae, rem libero ex consectetur provident exercitationem unde doloribus obcaecati molestias quia eaque, qui sed ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis earum accusamus quibusdam quasi beatae, rem libero ex consectetur provident exercitationem unde doloribus obcaecati molestias quia eaque, qui sed ratione?</p>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                    <h1>Other posts</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <img
                                className='w-full h-40'
                                src="https://cdn.tgdd.vn/2021/05/CookProduct/thumb1(1)-1200x676.jpg" alt="" />
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit voluptatibus beatae quas iste nihil consequuntur dolor.</h1>
                            <Link to="/" className='px-5 py-2 border-[2px] border-white bg-red-400 w-max'>Read more</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img
                                className='w-full h-40'
                                src="http://cdn.tgdd.vn/Files/2021/08/16/1375588/tiec-finger-food-la-gi-noi-dat-tiec-va-cac-mon-ngon-trong-thuc-don-finger-food-202201031008335419.jpg" alt="" />
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit voluptatibus beatae quas iste nihil consequuntur dolor.</h1>
                            <Link to="/" className='px-5 py-2 border-[2px] border-white bg-red-400 w-max'>Read more</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img
                                className='w-full h-40'
                                src="https://cdn.tgdd.vn/2021/05/CookProduct/thumb1(1)-1200x676.jpg" alt="" />
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit voluptatibus beatae quas iste nihil consequuntur dolor.</h1>
                            <Link to="/" className='px-5 py-2 border-[2px] border-white bg-red-400 w-max'>Read more</Link>
                        </div>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Wrapper>
    );
};

export default DetailPost;