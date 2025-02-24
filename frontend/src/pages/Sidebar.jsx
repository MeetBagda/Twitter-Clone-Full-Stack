import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/userAuthContext";

import SidebarOption from './SidebarOption';
import {
    HomeIcon,
    MagnifyingGlassIcon as SearchIcon,
    BellIcon,
    EnvelopeIcon,
    BookmarkIcon,
    ListBulletIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon,
    BoltIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { Link} from 'react-router-dom';



const Sidebar = () => {
    const {logOut, user} = useUserAuth();
    return (
        <div className="flex flex-col p-4 w-[40%] h-screen border-r-2 border-gray-100">
            <Link to="/" className='my-4'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 fill-blue-500">
                    <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.532-.896.533-1.898.907-2.946 1.11-.847-.89-2.064-1.447-3.377-1.447-2.54 0-4.596 2.056-4.596 4.596 0 .36.042.71.12 1.03-3.825-.19-7.213-2.02-9.486-4.796-.4.69-.63 1.49-.63 2.38 0 1.59 1.38 3.106 3.47 3.96-.802-.025-1.56-.247-2.228-.616v.057c0 2.236 1.59 4.1 3.7 4.52-.39.11-.80.17-1.23.17-.29 0-.57-.03-.83-.08.57 1.83 2.3 3.16 4.3 3.2-1.57 1.23-3.6 1.97-5.77 1.97-.37 0-.73-.02-1.09-.06 2.02 1.3 4.42 2.07 7.01 2.07 8.41 0 13.034-6.86 13.034-12.86 0-.19-.01-.38-.01-.57.9-.65 1.68-1.47 2.29-2.45z"></path></g></svg>
            </Link>

            <SidebarOption active text="Home" Icon={HomeIcon} to="/" />
            <SidebarOption text="Explore" Icon={SearchIcon} to="/explore" />
            <SidebarOption text="Notifications" Icon={BellIcon} to="/notifications" />
            <SidebarOption text="Messages" Icon={EnvelopeIcon} to="/messages" />
            <SidebarOption text="Bookmark" Icon={BookmarkIcon} to="/bookmark" />
            <SidebarOption text="Grok" Icon={BoltIcon} to="/grok" />
            <SidebarOption text="Communities" Icon={UserGroupIcon} to="/communities" />
            {/* <SidebarOption text="Premium" Icon={CurrencyDollarIcon} to="/premium" /> */}

            <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200">
                <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-6 w-6"/>
                    <h2 className="text-lg font-medium">Business</h2>
                </div>
                <div className="bg-blue-500 text-white px-1 rounded-sm text-[10px]">30% off</div>
            </div>
            <SidebarOption text="Profile" Icon={UserIcon} to="/profile" />
            <SidebarOption text="More" Icon={EllipsisHorizontalCircleIcon} to="/more" />


            <button className="bg-blue-500 text-white rounded-full w-full h-12 mt-4 font-bold hover:bg-blue-600">Post</button>
            <ToggleBar user={user} logout={logOut}/>
        </div>
    );
};

export default Sidebar;

const ToggleBar = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const toggleButtonRef = useRef(null);  // Ref for the toggle button

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            (!toggleButtonRef.current || !toggleButtonRef.current.contains(event.target))) { // Check if click is NOT inside the toggle button
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="relative">
            <button
                ref={toggleButtonRef} 
                onClick={toggleDropdown}
                className="mt-6 p-2 cursor-pointer flex items-center space-x-2 hover:bg-gray-100 rounded-full"
            >
                <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="h-10 w-10 object-cover rounded-full"
                />
                <div className='flex flex-col'>
                    <h5 className='font-bold text-sm'>{user?.name}</h5>
                    <h6 className='text-gray-500 text-sm'>{user?.displayName ? user?.displayName : user?.email }</h6>
                </div>

                <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-5 w-5 ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <g>
                        <path d="M19.707 12.293l-7-7c-.39-.39-1.023-.39-1.414 0l-7 7c-.39.39-.39 1.023 0 1.414.39.39 1.023.39 1.414 0L12 7.414l6.293 6.293c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414z"></path>
                    </g>
                </svg>
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute bottom-full right-0 mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        <button
                            onClick={handleLogout}
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-blue-500"
                            role="menuitem"
                        >
                            Log out @{user?.displayName ? user?.displayName : user?.email }
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};