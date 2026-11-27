import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'

const BreadCrumb = ({label, rootLabel, rootUrl}) => {
  return (
    <div>
        <h3 className='text-[49px] font-bold text-black'>{label}</h3>
        <h6 className='flex gap-2 items-center mt-2.75'><Link to={rootUrl}>{rootLabel}</Link> <MdKeyboardArrowRight /> {label}</h6>
    </div>
  )
}

export default BreadCrumb