import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { BsFillBoxSeamFill, BsPeopleFill } from 'react-icons/bs';
import { PiPawPrintFill, PiChartLineUpFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';

 function AdminNav() {
    return (
        <div>
         <nav className='flex flex-col h-full bg-paleBlue p-6 w-40'>
       
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" > 
        <RxDashboard className='text-darkBlue mr-1 text-lg' />
        Dashboard
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <BsFillBoxSeamFill className="text-darkBlue mr-1 text-lg"/>
        Orders
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <PiPawPrintFill className="text-darkBlue mr-1 text-lg"/>
        Products
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <BsPeopleFill className="text-darkBlue mr-1 text-lg"/>
        Customers
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <PiChartLineUpFill className="text-darkBlue mr-1 text-lg"/>
        Reports
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <MdEmail className="text-darkBlue mr-1 text-lg"/>
        Messages
        </a>
        <a href='#' className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <RiUserStarFill className="text-darkBlue mr-1 text-lg"/>
        Reviews
        </a>

        </nav>
        <div className='flex-grow'>

        </div>
        </div>
    )
 }

 export default AdminNav;