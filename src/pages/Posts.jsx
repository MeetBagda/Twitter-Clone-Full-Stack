import React from 'react';
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BookmarkAddOutlined } from '@mui/icons-material';


const Posts = ({name, username, post, photo, profilePhoto}) => {
    return (
        <div className="border rounded-md p-4 bg-white shadow-sm mb-4">
            <div className="flex items-start space-x-2">
               <Avatar src={profilePhoto}
                    alt="avatar"  />
            <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                        <h3 className="font-medium text-gray-700">{name}</h3>
                           <CheckCircleIcon className="h-4 w-4 inline-block fill-blue-500" style={{ fontSize: '15px' }}/>
                         <span className="text-gray-400">@{username}</span>

                     </div>
                <p>{post}</p>
             </div>
            </div>
          { photo && (
                <div className="mt-2">
                    <img src={photo} alt="Post Image" className="rounded-md object-cover w-full h-64" />
                </div>
          )

          }
           <div className="flex items-center justify-between mt-4">
                <ChatBubbleOutlineIcon  style={{ fontSize: '20px' }}/>
                <RepeatIcon  style={{ fontSize: '20px' }}/>
               <FavoriteBorderIcon  style={{ fontSize: '20px' }}/>
               <BookmarkAddOutlined  style={{ fontSize: '20px' }}/>
                <PublishIcon  style={{ fontSize: '20px' }}/>
            </div>
        </div>
    );
};

export default Posts;