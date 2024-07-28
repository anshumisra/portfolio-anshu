import React from 'react'
import logo from "../assets/AnshuLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  return (
    <div className='mb-20 flex items-center justify-between py-6'>
      
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className='w-10 h-30 bold'/>
      </div>
      <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/anshu-misra-8539711ba/">
      <FaLinkedin/></a>
      <a href="https://github.com/anshumisra?tab=repositories">          
      <FaGithub/></a>
      <a href="https://leetcode.com/anshumisra/">
      <SiLeetcode /></a>
      </div>
    </div>
  )
}

export default Navbar
