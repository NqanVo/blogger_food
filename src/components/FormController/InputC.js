import React from 'react';

const InputC = (props) => {
    const { type = "text", label, name, register, error, rules, valuesOfSelect, valuesOfText, selectedOfSelect } = props
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label} className='font-medium'>{label}</label>
            {type === "selected" ? (
                <select
                    id={label}
                    className={`border-2 w-full outline-none px-4 py-2 ${error && "border-red-400"}`}
                    defaultValue={selectedOfSelect}
                    {...register(name, { ...rules })}>
                    {valuesOfSelect.map((value) =>
                    (<option
                        key={value}
                        value={value}
                    >{value}</option>))}
                </select>
            ) :
                (
                    <input
                        id={label}
                        type={type}
                        multiple={false}
                        defaultValue={valuesOfText && valuesOfText}
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

// export const InputText = (props) => {
//     const { label, type = "text", register, name, rules, error } = props
//     return (
//         <div className='flex flex-col gap-2'>
//             <label htmlFor={label} className='font-medium'>{label}</label>
//             <input
//                 id={label}
//                 type={type}
//                 className={`border-2 w-full outline-none px-4 py-2 ${error && "border-red-400"}`}
//                 {...register(name, { ...rules })}
//             />
//             {error && <span className='text-red-400'>{error.message}</span>}
//         </div>
//     )
// }
// export const InputFile = (props) => {
//     const { label, multiple = false, accept = "image/*", register, name, rules, error } = props
//     return (
//         <div className='flex flex-col gap-2'>
//             <label htmlFor={label} className='font-medium'>{label}</label>
//             <input
//                 id={label}
//                 type="file"
//                 multiple={multiple}
//                 accept={accept}
//                 className={`border-2 w-full outline-none px-4 py-2 ${error && "border-red-400"}`}
//                 {...register(name, { ...rules })}
//             />
//             {error && <span className='text-red-400'>{error.message}</span>}
//         </div>
//     )
// }
// export const InputRadio = (props) => {
//     const { label, register, name, rules, error, valueOfRadio } = props
//     return (
//         <div className='flex flex-col gap-2'>
//             <label htmlFor={label} className='font-medium'>{label}</label>
//             {
//                 valueOfRadio.map((cat, index) => {
//                     const values = Object.values(cat)
//                     return () =>
//                     (<label htmlFor={values[1]} key={values[1]} className="flex gap-1">
//                         <input
//                             id={values[1]}
//                             type="radio"
//                             value={values[0]}
//                             defaultChecked={index === 0 ? true : false}
//                             className="border-2 outline-none px-4 py-2"
//                             {...register(name, { ...rules })}
//                         />
//                         <p className='capitalize font-medium'>{values[1]}</p>
//                     </label>)
//                 }
//                 )
//             }
//             {error && <span className='text-red-400'>{error.message}</span>}
//         </div>
//     )
// }

export default InputC;