import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import { menuData } from '../../dummyData/menuData'
import { Link, useLocation } from 'react-router'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { FaCaretDown, FaShoppingCart, FaUser } from 'react-icons/fa'
import Input from '../ui/Input'
import { IoMdSearch } from 'react-icons/io'

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("")

    const pathname = useLocation()
    
console.log(searchValue)
    return (
        <header>
            <Container className="py-8">
                <div className='flex items-center justify-between py-4'>
                    <Link to="/">
                        <Image src={logo} alt="Logo" />
                    </Link>
                    <ul className='flex items-center gap-10'>
                        {menuData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.url} className={`font-medium uppercase ${item.url === pathname.pathname ? "text-blue-500" : "text-black"}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))

                        }
                    </ul>
                </div>

            </Container>
            <div className='bg-footerbg py-6.25'>
                <Container>
                    <div className='grid grid-cols-[auto_600px_auto] justify-between items-center' >
                        <div className='flex gap-2 items-center'><HiOutlineBars3CenterLeft />
                            <span className= 'text-black1 font-medium'>Shop By Category</span>
                        </div>
                        <div className=' bg-white h-12.5 relative' >
                            <Input className=" pl-5.25 py-4 pr-20 h-12.5 w-full" type="search" placeholder="Search Products" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
                            <IoMdSearch className='absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl'/>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <div className='flex items-center gap-2'>
                                <FaUser />
                                <FaCaretDown />
                            </div>
                            <FaShoppingCart />
                        </div>
                    </div>
                </Container>
            </div>

        </header>
    )
}

export default Navbar