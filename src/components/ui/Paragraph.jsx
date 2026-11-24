import React from 'react'

const Paragraph = ({className, text, title}) => {
  return (
    <p className={`font-normal text-base text-grey1 ${className}`} title={title}>
      {text}
    </p>
  )
}

export default Paragraph