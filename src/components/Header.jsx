import React from 'react'
import Logo from "../img/chef1.png"
import Avatar from "../img/avatar.png"
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider()

   const login = async () => {
    const response = await signInWithPopup( firebaseAuth, provider)
    console.log(response)

   }

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/*Desktop & Tablet views*/}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-12 object-cover' />
          <p className='text-headingColor text-xl font-bold'>Food zone</p>
        </Link>

        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
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
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-sm text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }} src={Avatar}
              alt='userprofile'
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' onClick={login} />
              
          </div>
        </div>
      </div>

      {/*Mobile view*/}
      <div className=' flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header