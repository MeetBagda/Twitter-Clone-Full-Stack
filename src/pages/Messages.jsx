import React from 'react';

const Messages = () => {
  return (
    <div className="flex flex-col p-8">
          <h1 className='text-2xl font-bold text-gray-700 mb-4'>Messages</h1>
          <div className='flex items-center space-x-4 border-2 rounded-md border-gray-300 mb-4 p-2'>
           <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-gray-400"><g><path d="M10.5 2.5a8 8 0 110 16 8 8 0 010-16zM20 21.7l-4.8-4.8c2.6-3.3 2.2-7.8-.9-10.8l-2.9 2.9c1.5 2 1.8 4.4.7 6.5l4.9 4.9z"></path></g></svg>
            <input type="text" placeholder="Search Direct Messages" className="border-none focus:ring-0 w-full"/>
        </div>
        <div className="flex w-full">
            <div className="w-[25%]">
            <div className="flex items-center space-x-2 mb-2 p-4 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s"
                     alt="User" className="h-8 w-8 rounded-full object-cover"/>
            <div className='flex flex-col'>
                  <h3 className="font-medium text-gray-700">
                       Dev Khant <span className="text-gray-400">@khant_dev</span>
                   </h3>
                <h6 className="text-gray-400 text-sm">Jan 20</h6>
            </div>
         </div>
          <div className="flex items-center space-x-2 mb-2 p-4 hover:bg-gray-100 rounded-md cursor-pointer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s"
                    alt="User" className="h-8 w-8 rounded-full object-cover"/>
             <div className='flex flex-col'>
                  <h3 className="font-medium text-gray-700">
                       Priyanshu Tanwar <span className="text-gray-400">@DrTanwar</span>
                    </h3>
                 <h6 className="text-gray-400 text-sm">Jan 19</h6>
               </div>

          </div>
          </div>


         <div className="w-[75%] flex flex-col items-center">
            <h2 className="text-2xl text-gray-500 mt-10">
              Select a message
            </h2>
             <p className="text-gray-500 text-center mt-4">
               Choose from your existing conversations, start a new one, or just keep swimming.
             </p>
             <button className="bg-blue-500 text-white rounded-full w-32 h-10 mt-4 font-bold hover:bg-blue-600">New message</button>
          </div>


      </div>

    </div>
  );
};

export default Messages;