import React from 'react';

const Feed = () => {
  return (
    <div className="flex flex-col  p-8">
        <h1 className='text-2xl font-bold text-gray-700 mb-4'>Home</h1>
      <div className="border rounded-md p-4 bg-white shadow-sm">
          <h2 className="text-lg font-medium mb-2">What is happening?!</h2>
          <div className='border border-gray-300 p-2 rounded-md mb-2 bg-gray-50'>
              <p>
                  This will be a text area to write some content
              </p>
          </div>
        <button className="bg-blue-500 text-white rounded-full w-20 h-10 mt-4 font-bold hover:bg-blue-600">Post</button>
      </div>


      <div className="border rounded-md mt-4 p-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2 mb-2">
          <img src="https://cdn.pixabay.com/photo/2016/08/09/17/47/avatar-1577909_960_720.png"
              alt="User" className="h-8 w-8 rounded-full object-cover"/>
          <h3 className="font-medium text-gray-700">
             Alex Davis <span className="text-gray-400">@alexeydavis</span>
          </h3>
            <p className="text-gray-400 text-sm ml-auto">14h</p>
        </div>
        <p>
            This means so much for small accounts.
        </p>
            <p className="text-gray-500 text-sm mt-2">
                Reply and like and I'll follow you 👆
            </p>
         </div>


      <div className="border rounded-md mt-4 p-4 bg-white shadow-sm">
          <div className="flex items-center space-x-2 mb-2">

               <h3 className="font-medium text-gray-700">
             <span className="text-blue-500">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 inline-block fill-blue-500"><g><path d="M17.5 3.5c-1.57 0-3.08.39-4.4 1.1C11.69 3.89 10.37 3.5 9 3.5c-4.42 0-8 3.58-8 8s3.58 8 8 8c1.37 0 2.69-.39 4-.9 1.31.51 2.82.9 4.4.9 4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14.5c-1.28 0-2.5-.31-3.56-.85.22-.7.35-1.43.35-2.15 0-1.61-.63-3.18-1.75-4.44.32-.68.5-1.39.5-2.11 0-1.49-.94-2.69-2.25-2.69-1.3 0-2.25 1.2-2.25 2.69 0 .72.18 1.43.5 2.11-1.12 1.26-1.75 2.83-1.75 4.44 0 .72.13 1.45.35 2.15-1.06.54-2.28.85-3.56.85-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5c1.28 0 2.5.31 3.56.85-.22.7-.35 1.43-.35 2.15 0 1.61.63 3.18 1.75 4.44-.32.68-.5 1.39-.5 2.11 0 1.49.94 2.69 2.25 2.69 1.3 0 2.25-1.2 2.25-2.69 0-.72-.18-1.43-.5-2.11 1.12-1.26 1.75-2.83 1.75-4.44 0-.72-.13-1.45-.35-2.15 1.06-.54 2.28-.85 3.56-.85 3.04 0 5.5 2.46 5.5 5.5s-2.46 5.5-5.5 5.5z"></path></g></svg>
                 Developers
               </span>

              <span className="text-gray-400">@XDevelopers</span>
          </h3>

              <span className="text-gray-400 text-sm ml-auto">Ad</span>
        </div>
        <p>
          Calling all developers! 📣
        </p>
              <p className="text-gray-500 text-sm mt-2">
                Innovate with our real-time and historical data on the X API.
            </p>

        <p className="text-gray-500 text-sm mt-2">
            Get started with Pro 🚀
        </p>
       </div>


    </div>
  );
};

export default Feed;