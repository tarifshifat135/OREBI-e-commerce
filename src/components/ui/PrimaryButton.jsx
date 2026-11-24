import React from 'react'

const PrimaryButton = ({text, className, onClick}) => {
  return (
    <button onClick={onClick} className={`text-sm text-black1 border border-black1 font-bold hover:text-white px-13 py-4 bg-transparent hover:bg-black1 cursor-pointer transition-all duration-300 inline-block capitalize ${className}`}>
        {text}
    </button>
  )
}

export default PrimaryButton