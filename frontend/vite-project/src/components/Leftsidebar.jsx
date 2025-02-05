import React from 'react';
import '../App.css';
import { GiMagicHat } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const Leftsidebar = () => {
    return (
        <div className=' w-[25%] h-[100vh] flex justify-end font-montserrat text-white mr-4 '>
            <div className='w-96 flex flex-col'>

                {/* Logo and Title */}
                <div className='flex'>
                    <div className='text-white'>
                        <GiMagicHat className="text-white text-4xl ml-9 mt-5" />
                    </div>
                    <div className='text-white ml-3 mt-7 font-bold text-2xl'>
                        Rabbit
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className='ml-[92px] mt-4 flex flex-col space-y-2 font-medium'>
                        <li className='flex items-center p-2 text-white rounded-lg hover:bg-[#808080] group'>Explore</li>
                        <li className='flex items-center p-2 text-white rounded-lg hover:bg-[#808080] group'>Home</li>
                        <li className='flex items-center p-2 text-white rounded-lg hover:bg-[#808080] group'>Notification</li>
                        <li className='flex items-center p-2 text-white rounded-lg hover:bg-[#808080] group'>Profile</li>
                        <li className='flex items-center p-2 text-white rounded-[16px] hover:bg-[#808080] group'>Post</li>
                    </ul>
                </div>

                
                <div className='mt-auto mb-40 ml-9'>
                    <FaUser className="text-white text-2xl" />
                </div>

            </div>
        </div>
    );
};

export default Leftsidebar;