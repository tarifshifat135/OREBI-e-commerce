import React, { useState } from 'react'
import { Link } from 'react-router'
import Container from './Container'
import PrimaryButton from '../ui/PrimaryButton'
import { redirect } from 'react-router'
import { useNavigate } from 'react-router'
import Paragraph from '../ui/Paragraph'
import Input from '../ui/Input'
import { IoMdSearch } from 'react-icons/io'

const CustomError = () => {
    const [searchValue, setSearchValue] = useState("")
    let navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/')
    }
console.log(searchValue)
    return (
        <div className="">

            <Container>
                <div className='min-h-screen flex items-center '>
                    <div className='max-w-[652px] '>
                        <span className='text-black1 text-[200px] font-bold'>404</span>
                        <Paragraph text="The page you were looking for couldn't be found. The page could be removed or you 
                        misspelled the word while searching for it. Maybe try a search?" />
                        <div className='border border-grey2 p-5 mt-12.5 relative'>
                            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." className='outline-0 w-80%' />
                            <IoMdSearch className='absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl'/>

                        </div>
                        <PrimaryButton text={'Back to Home'} onClick={handleRedirect} className="mt-15" />
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default CustomError