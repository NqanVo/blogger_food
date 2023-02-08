import React from 'react';

const Input = ({ register, name, ...other }) => {
    // const { register, name, ...other } = props
    return (
        <input {...register(name)} {...other} />
    );
};

export default Input;