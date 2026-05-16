import React, { useState } from 'react'
import { CiLight, CiSearch } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbWindowMinimize } from 'react-icons/tb'


const Header = ({ isOpen, setIsOpen }) => {

  return (
    <div className=' bg-[#F6F8FB] py-3 sticky z-50 w-full border-b  border-gray-300'>

      <div className='flex items-center justify-between h-full px-5 '>

        <ul className='flex gap-4 text-gray-500  items-center min-w-0'>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className=' cursor-pointer shrink-0'>

            <RxHamburgerMenu size={27} />

          </li>
          <li className='flex min-w-0'>
            <div
              className='hidden md:flex items-center w-full max-w-[230px]'
            >
              <CiSearch
                size={18}
                className='flex-shrink-0 relative left-7 '
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-lg py-2 pl-10 outline-none  "
              />
            </div>
          </li>
        </ul>

      
        <ul
          className='flex gap-5 text-gray-600 items-center flex-shrink-0  cursor-pointer relative'>
          <li> <TbWindowMinimize size={24} /></li>
          <li> <CiLight size={24} /></li>
          <li> <IoIosNotificationsOutline size={24} /> </li>
          <li> <IoPersonCircleSharp size={24} /></li>
        </ul>
      </div>


    </div>
  )
}

export default Header