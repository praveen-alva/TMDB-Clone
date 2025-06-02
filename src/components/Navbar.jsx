import React from 'react'
import Logo from '../movielogo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={Logo} alt=""  className='w-[50px]'/>
        <Link className='text-blue-500 text-3xl font-bold' to="/">Home</Link>
        <Link className='text-blue-500 text-3xl font-bold' to="/watchlist">Watchlist</Link>
       

    </div>
  )
}

export default Navbar
