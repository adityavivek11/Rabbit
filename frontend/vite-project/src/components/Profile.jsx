import React from 'react';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <div className=" text-white min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
      <Link to="/home">
        <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-xl font-bold">John Developer</h1>
          <span className="text-gray-400">45 posts</span>
        </div>
      </div>

      {/* Profile Image and Edit Button */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden ">
          <img 
            src="/api/placeholder/96/96" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute right-0 top-0 px-4 py-2 rounded-full border border-gray-600 text-sm">
          Edit profile
        </button>
      </div>

      {/* Profile Info */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-xl font-bold">John Developer</h2>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Get verified</span>
        </div>
        <div className="text-gray-400 mb-4">@johndeveloper</div>
        <p className="mb-4">Building the future of web | Full Stack Developer 💻 | Open Source Contributor 🚀 | Tech Enthusiast ⚡</p>
        
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>San Francisco</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Joined January 2025</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm">
        <div>
          <span className="font-bold">120</span>
          <span className="text-gray-400"> Following</span>
        </div>
        <div>
          <span className="font-bold">56</span>
          <span className="text-gray-400"> Followers</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;