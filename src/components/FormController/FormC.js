import React from 'react';

const FormC = (props) => {
    const { children, handleSubmit, onSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4' encType='multipart/form-data'>
            {children}
        </form>
    );
};

export default FormC;