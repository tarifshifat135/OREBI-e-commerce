import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router'
import { categoryData, footerNavData, menuData } from '../../dummyData/menuData'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-footerbg pt-13.75 pb-13'>
      <Container>
        <div className='grid grid-cols-[210px_210px_210px_320px_auto] gap-12'>
          <div>
            <h3 className='font-bold text-black1  mb-4.25 '>MENU</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-grey1'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-black1  mb-4.25 '>SHOP</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {categoryData.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-grey1'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-black1  mb-4.25 '>HELP</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {footerNavData.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-grey1 '>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <h3 className='font-bold text-black1  mb-4.25 '>(052) 611-5711
              company@domain.com
            </h3>
            <address className='font-normal not-italic text-sm'>575 Crescent Ave. Quakertown, PA 18951</address>
          </div>
          <div>
            <Image src={logo} alt="Footer Image" />
          </div>
        </div>
        <div className='pt-16 flex justify-between items-center '>
          <ul className='flex gap-6.5 item-center'>
            <li>
              <Link><FaFacebookF /></Link>
            </li>
            <li>
              <Link><FaLinkedinIn /></Link>
            </li>
            <li>
              <Link><FaInstagram /></Link>
            </li>
          </ul>
          <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer