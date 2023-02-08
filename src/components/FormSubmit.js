import React from 'react';
import { useForm } from 'react-hook-form';

const FormSubmit = ({ defaultValues, children, onSubmit }) => {
    // const { register, handleSubmit, formState: { errors } } = useForm()
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map((child) => {
                return child
            })}
        </form>
    );
};

export default FormSubmit;