import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
export default function Navbar() {

  return (
    <div className=''>
      <nav className=" pt-9 px-3 sm:px-4  dark:bg-gray-900  w-full z-20 top-0 left-0  dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">

          <div className="flex items-center">
            <Link to="/"> <img src="../image/logo.png" className="mr-2 ml-2 h-[3rem] sm:h-[5rem]" alt="phantom Logo" /></Link>
          </div>

          <div className="flex md:order-2 ">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-5 md:mr-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/sec' >CONNECT WALLET</Link></button>

            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center p-2 ml-2 text-sm text-gray-500  md:hidden focus:outline-none focus:ring-2 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
            
           
          <Dropdown className='' >
             
  <Dropdown.Item>
  <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">HOME</a>
  </Dropdown.Item>
  <Dropdown.Item>
  <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
  </Dropdown.Item>
  <Dropdown.Item>
  <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FEATURES</a>
  </Dropdown.Item>
  <Dropdown.Item>
  <a href="/" className="block tracking-widest py-2 pr-4 pl-3  text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">TOKENOMICS</a>
  </Dropdown.Item>
  <Dropdown.Item>
  <a href="/" className="block tracking-widest py-2 pr-4 pl-3  text- rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ROADMAP</a>
  </Dropdown.Item>
</Dropdown>
</button>
          </div>
         
        

        <div className="hidden justify-between items-center w-full md:block md:w-auto " id="navbar-default">
          <ul className="flex flex-col  p-4 mt-4 text-white  rounded-lg border md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">HOME</a>
            </li>
            <li>
              <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
            </li>
            <li>
              <a href="/" className="block tracking-widest py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FEATURES</a>
            </li>
            <li>
              <a href="/" className="block tracking-widest py-2 pr-4 pl-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">TOKENOMICS</a>
            </li>
            <li>
              <a href="/" className="block tracking-widest py-2 pr-4 pl-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ROADMAP</a>
            </li>
          </ul>
        </div>
    </div>
      </nav >

     



    </div >
  )
}

