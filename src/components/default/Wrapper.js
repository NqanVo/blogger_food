import React from 'react';

const Wrapper = (props) => {
    return (
        <div className='w-full min-h-screen flex flex-col xl:gap-4 gap-3 justify-between mx-auto'>
            {
                props.children
            }
        </div>
    );
};

export default Wrapper;