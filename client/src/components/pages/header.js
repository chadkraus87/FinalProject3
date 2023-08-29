import React from 'react';
import { GiBalloonDog } from 'react-icons/gi';
import { RxDashboard } from 'react-icons/rx';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './adminNav';


function Header({ navRef }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-body p-6">

       {/* Toggle button for AdminDashboard */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <RxDashboard className='text-darkBlue mr-1 text-lg' />
      </button>

      {/* AdminNav visible based on isOpen state */}
      <div ref={navRef} style={{ display: isOpen ? 'block' : 'none' }}>
        <AdminNav isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>

        <h1 className="text-2xl font-semibold text-dark">Overview</h1>
        <div className="flex items-center">
          <span className="text-sm mr-2 text-smoke">Show:</span>
          <div className="relative">
            <select className="text-xs border rounded pl-3 pr-8 py-1 bg-offWhite hover:border-gray-400 focus:outline-none focus:border-teal-500 text-smoke">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg className="fill-current h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center relative">
  <GiBalloonDog className="text-darkBlue mr-2 text-2xl" />
  <div className="text-darkBlue flex items-center mb-2 text-sm" ref={dropdownRef}>
    Admin User
    <button
      onClick={() => setDropdownOpen(!isDropdownOpen)}
      className="flex items-center ml-2"
    >
      <svg className="fill-current h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
      </svg>
    </button>
    {isDropdownOpen && (
      <div className="absolute bg-tan border rounded mt-20 w-24">
        <button onClick={() => navigate('/adminDashboard/profile')} className="block p-2 hover:bg-lightOrange text-xs">Profile</button>

        <button onClick={() => navigate('/')} className="block p-2 hover:bg-lightOrange text-xs">Store Front</button>

        <a href="/logout" className="block p-2 hover:bg-lightOrange text-xs">Logout</a>
        
      </div>
    )}
  </div>
</div>

      </div>
      
    );
  }
  
  export default Header;