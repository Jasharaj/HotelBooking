import React, { useId } from 'react'

const Input = function Input({
    label,
    type = "text",
    className = "",
    text = "text-black",
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
            className={`block mb-2 text-sm font-medium ${text} dark:text-white`}
            htmlFor={id}> 
                {label}
            </label> //htmlFor, i.e, id -> not necessary to use here, just for improvement
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
}

export default React.forwardRef(Input)
