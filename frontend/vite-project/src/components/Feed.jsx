import React, { useState } from 'react';
import { Image, Table, LineChart, AlignLeft, Smile, Camera, MapPin } from 'lucide-react';

import Tweet from './tweet';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <div className='w-1/2 h-screen overflow-y-auto'>
      {/* Tab Navigation */}
      <div className='sticky top-0  text-white p-4 flex justify-center outline-none '>
        <div className='flex justify-evenly w-full'>
          {['For You', 'Following', 'Build in Public'].map((tab) => (
            <button
              key={tab}
              className={`relative pb-2 text-sm w-[1fr]  ${
                activeTab === tab ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-1/2 -bottom-1 w-[100%] h-[3px] bg-white rounded-full transform -translate-x-1/2"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    {/* input box */}
    <div className='p-4 border border-gray-600 rounded-2xl mt-8'>
    <div className="flex justify-evenly">
        <input
          type="text"
          placeholder="Jump Into Someone else"
          className="bg-transparent text-white flex-grow outline-none text-lg"
        />
        <button className="px-4 py-1 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-colors">
          Post
        </button>
      </div>
      
      <div className="flex gap-4 mt-4">
        <button className="group" aria-label="Add image">
          <Image className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Add table">
          <Table className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Add chart">
          <LineChart className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Format text">
          <AlignLeft className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Add emoji">
          <Smile className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Add photo">
          <Camera className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="group" aria-label="Add location">
          <MapPin className="text-gray-500 group-hover:text-white transition-colors" size={20} />
        </button>
      </div>
      </div>
      <div className='flex justify-center '>
      <div className='border-b-[1px] border-transparent w-[80%] mt-8 mb-8'></div>
      </div>
      {/* Content based on selected tab */}
      <div className="p-4 text-white flex justify-center">
        {activeTab === 'For You' && (
          
           <>
           <Tweet />
           </>
          
        )}
        {activeTab === 'Following' && (
          <div>
            <h2 className="text-xl font-bold">Posts from Followed Users</h2>
            <p className="mt-2">This is content for the "Following" section.</p>
          </div>
        )}
        {activeTab === 'Build in Public' && (
          <div>
            <h2 className="text-xl font-bold">Building in Public</h2>
            <p className="mt-2">This is content for the "Build in Public" section.</p>
          </div>
        )}
      </div>
    </div>

    
  );
};

export default Feed;
