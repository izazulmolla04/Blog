import React,{useId} from 'react'

function Select({
    label,
    options = [],
    classname = '',
    ...props
},ref) {
    const id=useId();
  return (
    <div className={`flex flex-col space-y-1 ${classname}`}>
        {label && <label htmlFor={id} className='font-medium pl-2 mb-2 inline-block'>{label}</label>}
        <select id={id} ref={ref} className='border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' {...props}>
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
