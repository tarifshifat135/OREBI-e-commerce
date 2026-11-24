import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import { menuData } from '../../dummyData/MenuData'
import { Link, useLocation } from 'react-router'

const Navbar = () => {

    const pathname = useLocation()
    console.log(pathname)

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

        </header>
    )
}

export default Navbar