import React from 'react';

const InputRadio = (props) => {
    const { label, register, name, rules, error, valueOfRadio = [], checked = "" } = props
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label} className='font-medium'>{label}</label>
            {
                valueOfRadio.map((cat, index) => (
                    <label htmlFor={Object.values(cat)[1]} key={Object.values(cat)[1]} className="flex gap-1">
                        <input
                            id={Object.values(cat)[1]}
                            type="radio"
                            value={Object.values(cat)[0]}
                            defaultChecked={checked ? (index + 1 === checked ? true : false) : (index === 0 ? true : false)}
                            className="border-2 outline-none px-4 py-2"
                            {...register(name, { ...rules })}
                        />
                        <p className='capitalize font-medium'>{Object.values(cat)[1]}</p>
                    </label>
                ))
            }
            {error && <span className='text-red-400'>{error.message}</span>}
        </div>
    );
};

export default InputRadio;