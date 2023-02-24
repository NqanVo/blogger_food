import React from 'react';

const Wrapper = (props) => {
    return (
        <div className='w-full min-h-screen flex flex-col  mx-auto'>
            {
                props.children
            }
        </div>
    );
};

export default Wrapper;