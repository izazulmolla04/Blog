import React ,{useId} from 'react'

const Input = React.forwardRef(({
    label,
    type='text',
    classname='',
    ...props
},ref)=>{
    const id=useId();
    return (
        <div className={`flex flex-col space-y-1 ${classname}`}>
            {label && <label htmlFor={id} className='font-medium pl-2 mb-2 inline-block'>{label}</label>}
            <input id={id} type={type} ref={ref} className='border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' {...props} />
        </div>
    )
})

export default Input
