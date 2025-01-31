import React from 'react';
import {  useNavigate } from 'react-router-dom';
// import {  ArrowBackIcon, AddLinkIcon, LocationOnIcon,  } from "@mui/icons-material";
import { LinkIcon } from '@heroicons/react/24/outline';
import { LocationCityRounded } from '@mui/icons-material';



const MainProfile = ({user}) => {
    const navigate = useNavigate();
    const loggedInUser = {
        id: "1",
        name: "Meet Bagda",
        displayName: "@meetbagda035",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s",
        bio: "A passionate web developer",
        location: "India",
        website: "https://www.meetbagda.com"
     }

    const handleEditProfile = () => {
        navigate('/editprofile')
    }
    const handleBack = () => {
        navigate('/');
    };
    return (
        <div className="flex flex-col p-4">
              <div className="relative">
                   <div className="relative h-48 w-full rounded-md overflow-hidden">
                <img
                     src={loggedInUser?.coverImage}
                    alt="cover"
                    className="object-cover h-full w-full"
                    />
                  </div>

                  <div className='absolute bottom-[-45px] left-4'>
                    <img src={loggedInUser?.profileImage} alt="avatar" className="w-24 h-24 rounded-full object-cover border-4 border-white" />
                </div>

               <div className="absolute top-4 right-4 flex items-center">

                  <button  onClick={handleEditProfile} className="bg-black text-white rounded-full w-24 h-8  hover:bg-gray-800 text-sm">Edit Profile</button>

             </div>

             </div>
             <div className="flex flex-col  mt-24 p-4">
                 <h3 className="text-2xl font-bold text-gray-700">{loggedInUser?.name}</h3>
                 <p className="text-gray-500 text-sm">
                    {loggedInUser?.displayName}
                    </p>
                 <div className="flex mt-4">
                     <p className="text-gray-500 text-sm ">{loggedInUser?.bio}</p>
                  </div>
                <div className="flex items-center space-x-1 mt-4">
                  <LocationCityRounded  style={{ fontSize: '15px', color:"gray" }} />
                  <p className="text-gray-500 text-sm">{loggedInUser?.location}</p>
                </div>

                  <div className="flex items-center space-x-1 mt-4">
                     <LinkIcon width={17} />
                       <a  href={loggedInUser?.website} className="text-gray-500 text-sm">{loggedInUser?.website}
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default MainProfile;