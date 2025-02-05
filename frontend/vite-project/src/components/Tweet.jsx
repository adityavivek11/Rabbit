import React from 'react'
import { Heart, MessageCircle, Repeat2, BarChart2, Bookmark, Share } from "lucide-react";


const Tweet = () => {
  return (
    <div className=" w-[80%] bg-transparent/45 text-white border border-neutral-800 rounded-xl">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              
            </a>
            <div>
              <div className="flex items-center gap-2">
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <span className="font-bold">User</span>
                  <span className="text-gray-500">@username</span>
                </a>
                <span className="text-gray-500">· 1h</span>
              </div>
              {/* Empty post content */}
              <p className="mb-2">hello brothers.......</p>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
            <button className="flex items-center gap-1 group hover:text-blue-500 transition-colors">
              <MessageCircle size={18} className="group-hover:text-blue-500 transition-colors" />
              <span>0</span>
            </button>
            <button className="flex items-center gap-1 group hover:text-green-500 transition-colors">
              <Repeat2 size={18} className="group-hover:text-green-500 transition-colors" />
              <span>0</span>
            </button>
            <button className="flex items-center gap-1 group hover:text-pink-500 transition-colors">
              <Heart size={18} className="group-hover:text-pink-500 transition-colors" />
              <span>0</span>
            </button>
            <button className="flex items-center gap-1 group hover:text-blue-500 transition-colors">
              <BarChart2 size={18} className="group-hover:text-blue-500 transition-colors" />
              <span>0</span>
            </button>
            <div className="flex items-center gap-4">
              <button className="hover:text-blue-500 transition-colors">
                <Bookmark size={18} />
              </button>
              <button className="hover:text-blue-500 transition-colors">
                <Share size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Tweet