import React from 'react';

const InputC = (props) => {
    const { type = "text", label, name, register, error, rules, valuesOfSelect, valuesOfRadio } = props



    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label} className='font-medium'>{label}</label>
            {type === "selected" ? (
                <select
                    id={label}
                    className={`border-2 w-full outline-none px-4 py-2 ${error && "border-red-400"}`}
                    {...register(name, { ...rules })}>
                    {valuesOfSelect.map((value) =>
                        (<option key={value} value={value}>{value}</option>))}
                </select>
            ) :
                (
                    <input
                        id={label}
                        type={type}
                        multiple={false}
                        accept="image/*"
                        className={`border-2 w-full outline-none px-4 py-2 ${error && "border-red-400"}`}
                        {...register(name, { ...rules })}
                    />
                )
            }
            {error && <span className='text-red-400'>{error.message}</span>}
        </div>
    );
};

export default InputC;