import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { BsFillBoxSeamFill, BsPeopleFill } from 'react-icons/bs';
import { PiPawPrintFill, PiChartLineUpFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';

 function AdminNav({ isOpen, setIsOpen }) {

    const leftPosition = isOpen ? "0" : "-100%";

    const navRef = useRef();

useEffect(() => {
    function handleClickOutside(event) {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [navRef, setIsOpen]);

    return (
        <div style={{ left: leftPosition, backgroundColor: 'rgb(232, 245, 240, 0.9)' }} className="fixed top-0 h-full p-6 w-40 transition-all duration-300 z-50"> 
         <nav className='flex flex-col h-full p-6 w-40'>
       
        <Link to="/adminDashboard" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)} > 
        <RxDashboard className='text-darkBlue mr-1 text-lg' />
        Dashboard
        </Link>

        <Link to="/adminDashboard/orders" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <BsFillBoxSeamFill className="text-darkBlue mr-1 text-lg"/>
        Orders
        </Link>

        <Link to="/adminDashboard/products" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <PiPawPrintFill className="text-darkBlue mr-1 text-lg"/>
        Products
        </Link>

        <Link to="/adminDashboard/customers" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <BsPeopleFill className="text-darkBlue mr-1 text-lg"/>
        Customers
        </Link>

        <Link to="/adminDashboard/reports" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <PiChartLineUpFill className="text-darkBlue mr-1 text-lg"/>
        Reports
        </Link>

        <Link to ="/adminDashboard/messages" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <MdEmail className="text-darkBlue mr-1 text-lg"/>
        Messages
        </Link>
        
        <Link to="/adminDashboard/reviews" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" onClick={() => setIsOpen(false)}> 
        <RiUserStarFill className="text-darkBlue mr-1 text-lg"/>
        Reviews
        </Link>

        </nav>
        <div className='flex-grow'>

        </div>
        </div>
    )
 }

 export default AdminNav;