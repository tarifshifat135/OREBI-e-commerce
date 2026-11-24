import React from 'react'

const Input = ({name, id, placeholder, value, type, className, onChange}) => {
  return (
    <input 
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      type={type}
      className={`${className}`}
      onChange={onChange}
    />
  )
}

export default Input