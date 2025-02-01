import React from 'react';

const Tweetbox = () => {
    return (
        <div className="border rounded-md p-4 bg-white shadow-sm mb-4">
            <div className="flex items-center space-x-2 mb-2">
                <img src="https://cdn.pixabay.com/photo/2016/08/09/17/47/avatar-1577909_960_720.png"
                 alt="user" className="w-10 h-10 object-cover rounded-full"/>
              <h3 className="font-medium text-gray-700">
                 Jane Doe
              </h3>
            </div>

            <div className='border border-gray-300 p-2 rounded-md mb-2 bg-gray-50'>
                <p>
                    This will be a text area to write some content
                </p>
            </div>
        <button className="bg-blue-500 text-white rounded-full w-20 h-10 mt-4 font-bold hover:bg-blue-600">Tweet</button>
      </div>
    );
};

export default Tweetbox;