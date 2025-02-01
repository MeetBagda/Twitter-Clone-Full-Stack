import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  ArrowBack, BackHand } from "@mui/icons-material";


const EditProfile = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/profile');
    };

    return (
        <div className="flex flex-col p-8">
            <div className="flex items-center mb-4">
                  <ArrowBack className="cursor-pointer mr-2"  onClick={handleBack} style={{ fontSize: '25px' }} />
                <h1 className='text-xl font-bold text-gray-700 '>Edit profile</h1>
            </div>
            {/* form elements to edit profile */}
          <div className="w-full border rounded-md bg-white shadow-sm p-4 mt-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
                 <input type="text" id="name" className="w-full border rounded p-2  focus:ring-blue-500 focus:border-blue-500" />
              </div>
            <div className="flex flex-col mb-4">
                 <label htmlFor="bio" className="text-gray-700 mb-2">Bio</label>
                 <textarea id="bio" className="w-full border rounded p-2  focus:ring-blue-500 focus:border-blue-500"></textarea>
             </div>
          <div className="flex flex-col mb-4">
                <label htmlFor="location" className="text-gray-700 mb-2">Location</label>
                <input type="text" id="location" className="w-full border rounded p-2  focus:ring-blue-500 focus:border-blue-500" />
             </div>
             <div className="flex flex-col mb-4">
               <label htmlFor="website" className="text-gray-700 mb-2">Website</label>
                 <input type="url" id="website" className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
          <button className="bg-blue-500 text-white rounded-full w-20 h-10 mt-4 font-bold hover:bg-blue-600">Save</button>
        </div>
        </div>

    );
};

export default EditProfile;