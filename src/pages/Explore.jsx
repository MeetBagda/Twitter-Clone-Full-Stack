import React from 'react';

const Explore = () => {
  return (
    <div className="flex flex-col p-8">
        <h1 className='text-2xl font-bold text-gray-700 mb-4'>Explore</h1>

        <div className='flex items-center space-x-4 border-2 rounded-md border-gray-300 mb-4 p-2'>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-gray-400"><g><path d="M10.5 2.5a8 8 0 110 16 8 8 0 010-16zM20 21.7l-4.8-4.8c2.6-3.3 2.2-7.8-.9-10.8l-2.9 2.9c1.5 2 1.8 4.4.7 6.5l4.9 4.9z"></path></g></svg>
            <input type="text" placeholder="Search" className="border-none focus:ring-0 w-full"/>
        </div>

      <div className="grid grid-cols-3 gap-4">
           <div className="border rounded-md p-4 bg-white shadow-sm">
                 <img src="https://images.unsplash.com/photo-1496181131206-3d547a4ebab6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card" className="w-full h-48 object-cover mb-2 rounded-md"/>
               <h3 className="font-medium text-gray-700">
                  Khloé in Wonder Land
               </h3>
              <p className="text-gray-500 text-sm mt-2">
                 LIVE
               </p>
              <p className="text-gray-500 text-sm mt-2">
              Entertainment - Trending
              </p>

              <p className="text-gray-500 text-sm mt-2">#IbrahimAliKhan</p>
           </div>

         <div className="border rounded-md p-4 bg-white shadow-sm">
               <img src="https://images.unsplash.com/photo-1585251418814-06a02d296545?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card" className="w-full h-48 object-cover mb-2 rounded-md"/>
               <h3 className="font-medium text-gray-700">
                 Trending in India
               </h3>
                <p className="text-gray-500 text-sm mt-2">
                 #MahakumbhStampede
               </p>
               <p className="text-gray-500 text-sm mt-2">
                79.7K posts
               </p>
           </div>

         <div className="border rounded-md p-4 bg-white shadow-sm">
               <img src="https://images.unsplash.com/photo-1612223459441-c5d1006e467b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card" className="w-full h-48 object-cover mb-2 rounded-md"/>
               <h3 className="font-medium text-gray-700">
                   Sports - Trending
               </h3>
                <p className="text-gray-500 text-sm mt-2">
                  #TestCricket
               </p>
           </div>
       <div className="border rounded-md p-4 bg-white shadow-sm">
               <img src="https://images.unsplash.com/photo-1468996294850-f6004a21df7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card" className="w-full h-48 object-cover mb-2 rounded-md"/>
               <h3 className="font-medium text-gray-700">
                  Business & Finance - Trending
               </h3>
               <p className="text-gray-500 text-sm mt-2">
                   #TataMotors
               </p>
           </div>
       </div>
    </div>
  );
};

export default Explore;