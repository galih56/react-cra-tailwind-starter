import React from 'react';
import {PropTypes} from 'prop-types';

const Input =React.forwardRef(({label, errorText, id, name, placeholder,inputType, ...props},ref)=>{
    return(
    <>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
        </label>
        <input ref={ref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id={id} type={inputType} placeholder={placeholder} name={name} {...props}/>
        {errorText && <span className="text-red-500">{errorText}</span>}
    </>
    )
})

Input.propTypes={
    label:PropTypes.string.isRequired,
    id:PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string
}

export default Input;