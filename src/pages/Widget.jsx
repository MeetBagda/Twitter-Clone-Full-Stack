import React from 'react';

const Widgets = () => {
    return (
        <div className="w-[25%] p-4  border-l-2 border-gray-100">
            <div className='flex items-center space-x-4 border-2 rounded-md border-gray-300 mb-4 p-2'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-gray-400"><g><path d="M10.5 2.5a8 8 0 110 16 8 8 0 010-16zM20 21.7l-4.8-4.8c2.6-3.3 2.2-7.8-.9-10.8l-2.9 2.9c1.5 2 1.8 4.4.7 6.5l4.9 4.9z"></path></g></svg>
            <input type="text" placeholder="Search" className="border-none focus:ring-0 w-full"/>
            </div>
            <div className="border rounded-md  mb-4 bg-white shadow-sm">
               <div className='p-4'>
                    <h2 className="text-lg font-medium mb-2">Subscribe to Premium</h2>
                     <p className="text-gray-500 text-sm mt-2">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                     <button className="bg-blue-500 text-white rounded-full w-32 h-10 mt-4 font-bold hover:bg-blue-600">Subscribe</button>
                 </div>
          </div>


         <div className="border rounded-md  mb-4 bg-white shadow-sm">
                 <div className="p-4">
                   <h2 className="text-lg font-medium mb-2">What's happening</h2>
                     <div className="flex items-center space-x-2 mb-2">
                         <img src="https://images.unsplash.com/photo-1496181131206-3d547a4ebab6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card" className="w-24 h-24 object-cover mr-2 rounded-md"/>
                          <div className='flex flex-col'>
                             <h3 className="font-medium text-gray-700">
                               Khloé in Wonder Land
                             </h3>
                            <p className="text-gray-500 text-sm mt-2">
                               LIVE
                            </p>
                        </div>
                    </div>
                      <p className="text-gray-500 text-sm mt-2">
                        Entertainment - Trending
                     </p>

                    <p className="text-gray-500 text-sm mt-2">
                    #IbrahimAliKhan
                     </p>

                    <div className="flex items-center space-x-2 mb-2 mt-4">

                       <div className='flex flex-col'>
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
                      </div>
                     <div className="flex items-center space-x-2 mb-2 mt-4">
                       <div className='flex flex-col'>
                         <h3 className="font-medium text-gray-700">
                            Sports - Trending
                          </h3>
                             <p className="text-gray-500 text-sm mt-2">
                            #TestCricket
                         </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2 mt-4">
                      <div className='flex flex-col'>
                        <h3 className="font-medium text-gray-700">
                         Business & Finance - Trending
                        </h3>
                         <p className="text-gray-500 text-sm mt-2">
                            #TataMotors
                          </p>
                    </div>
                </div>
                      <p className="text-gray-500 text-sm mt-2">
                         Show more
                     </p>
               </div>
            </div>

             <div className="border rounded-md  mb-4 bg-white shadow-sm">
                 <div className='p-4'>
                  <h2 className="text-lg font-medium mb-2">Who to follow</h2>
                      <div className="flex items-center space-x-2 mb-2">
                           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 object-cover rounded-full mr-2"/>
                             <div className='flex flex-col'>
                            <h3 className="font-medium text-gray-700">
                             meb keflezighi
                                </h3>
                                <h6 className="text-gray-500 text-sm">@runmeb</h6>
                            </div>
                           <button className="bg-black text-white rounded-full w-16 h-8 ml-auto font-bold  hover:bg-gray-800 text-sm">Follow</button>

                        </div>

                       <div className="flex items-center space-x-2 mb-2">
                            <img src="https://images.unsplash.com/photo-1578149496378-277e158ae741?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 object-cover rounded-full mr-2"/>
                               <div className='flex flex-col'>
                                <h3 className="font-medium text-gray-700">
                                 Zizheng Pan
                                   </h3>
                                   <h6 className="text-gray-500 text-sm">@zizpan</h6>
                               </div>
                           <button className="bg-black text-white rounded-full w-16 h-8 ml-auto font-bold  hover:bg-gray-800 text-sm">Follow</button>

                           </div>


                          <div className="flex items-center space-x-2 mb-2">
                             <img src="https://images.unsplash.com/photo-1552058544-f2b28b06e37e?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 object-cover rounded-full mr-2"/>
                                <div className='flex flex-col'>
                                    <h3 className="font-medium text-gray-700">
                                     des_linden
                                        </h3>
                                    <h6 className="text-gray-500 text-sm">@des_linden</h6>
                                </div>
                                 <button className="bg-black text-white rounded-full w-16 h-8 ml-auto font-bold  hover:bg-gray-800 text-sm">Follow</button>

                             </div>
                        <p className="text-gray-500 text-sm mt-2">
                            Show more
                        </p>
                </div>
           </div>
        </div>
    );
};

export default Widgets;