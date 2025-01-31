import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {  ArrowBackIcon, AddLinkIcon, LocationOnIcon,  } from "@mui/icons-material";



const MainProfile = ({user}) => {
    const navigate = useNavigate();
    const loggedInUser = {
        id: "1",
        name: "Meet Bagda",
        displayName: "@meetbagda035",
        profileImage: "https://cdn.pixabay.com/photo/2016/08/09/17/47/avatar-1577909_960_720.png",
        coverImage: "https://images.unsplash.com/photo-1472108520966-5961431112f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  <LocationOnIcon  style={{ fontSize: '15px', color:"gray" }} />
                  <p className="text-gray-500 text-sm">{loggedInUser?.location}</p>
                </div>

                  <div className="flex items-center space-x-1 mt-4">
                     <AddLinkIcon style={{ fontSize: '15px', color:"gray" }} />
                       <a  href={loggedInUser?.website} className="text-gray-500 text-sm">{loggedInUser?.website}
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default MainProfile;