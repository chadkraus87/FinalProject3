import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { BsFillBoxSeamFill, BsPeopleFill } from 'react-icons/bs';
import { PiPawPrintFill, PiChartLineUpFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';

 function AdminNav() {
    return (
        <div>
         <nav className='flex flex-col h-full bg-paleBlue p-6 w-40'>
       
        <Link to="/adminDashboard" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs" > 
        <RxDashboard className='text-darkBlue mr-1 text-lg' />
        Dashboard
        </Link>
        <Link to="/orders" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <BsFillBoxSeamFill className="text-darkBlue mr-1 text-lg"/>
        Orders
        </Link>
        <Link to="/products" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <PiPawPrintFill className="text-darkBlue mr-1 text-lg"/>
        Products
        </Link>
        <Link to="/customers" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <BsPeopleFill className="text-darkBlue mr-1 text-lg"/>
        Customers
        </Link>
        <Link to="/reports" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <PiChartLineUpFill className="text-darkBlue mr-1 text-lg"/>
        Reports
        </Link>
        <Link to ="/messages" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
        <MdEmail className="text-darkBlue mr-1 text-lg"/>
        Messages
        </Link>
        <Link to="/reviews" className="text-darkBlue flex items-center mb-2 hover:text-deepCoral text-xs"> 
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