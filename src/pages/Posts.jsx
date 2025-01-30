import React from 'react';
import * as Heroicons from '@heroicons/react/24/outline';

const Posts = ({name, username, post, photo, profilePhoto}) => {
    return (
        <div className="border rounded-md p-4 bg-white shadow-sm mb-4">
            <div className="flex items-start space-x-2">
               <img src={profilePhoto}
                    alt="avatar" className="h-10 w-10 rounded-full object-cover"/>
            <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                        <h3 className="font-medium text-gray-700">{name}</h3>
                       <Heroicons.CheckCircleIcon className="h-4 w-4 inline-block fill-blue-500"/>
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
             <Heroicons.ChartBarIcon className="post_footer_icon"/>
              <Heroicons.AcademicCapIcon className="post_footer_icon"/>
                <Heroicons.AdjustmentsHorizontalIcon className="post_footer_icon"/>
                <Heroicons.ArchiveBoxIcon className="post_footer_icon"/>
                <Heroicons.AdjustmentsVerticalIcon className="post_footer_icon"/>
            </div>
        </div>
    );
};

export default Posts;