import React from 'react'
import Logo from "./img/logo.png"
import { MdShoppingBasket } from 'react-icons/md'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/*Desktop & Tablet views*/}
      <div className='hidden md:flex w-full h-full'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>Food zone</p>
        </div>
        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all 
            ease-in-out'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all 
          ease-in-out'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all
           ease-in-out'>About Us</li>
          <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all 
          ease-in-out'>Service</li>
        </ul>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
          <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-sm text-white font-semibold'>2</p>
          </div>
        </div>
      </div>

      {/*Mobile view*/}
      <div className=' flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header