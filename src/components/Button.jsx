import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className='text-slate-900 font-[700] bg-slate-300 rounded-lg px-[1rem] py-[.5rem] border-2 border-slate-300 hover:bg-slate-900 hover:text-slate-300 hover:border-slate-300'
        >
            {children}
        </button>
    )
}

export default Button