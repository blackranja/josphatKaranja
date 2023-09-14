import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import Logo from '../assets/images/ranja1.jpg';
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'50px'}} className="rounded-lg"/>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex">
            <li className="font-bold px-4 mx-4 text-xl">Home</li>
            <li className="font-bold px-4 mx-4 text-xl">About</li>
            <li className="font-bold px-4 mx-4 text-xl">Skills</li>
            <li className="font-bold px-4 mx-4 text-xl">Work</li>
            <li className="font-bold px-4 mx-4 text-xl">Contact</li>
        </ul>
        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10 ">
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile view */}
        <ul className={!nav ? 'hidden': "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
                
        </ul>
    </div>
   
  )
}

export default Navbar
