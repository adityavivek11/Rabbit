import { Search } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-[350px]  text-white p-3 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#202327] text-white rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      {/* Premium Subscribe Section */}
      <div className=" bg-transparent/45 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-gray-300 text-sm mb-3">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <button className="bg-[#1D9BF0] text-white font-bold rounded-full px-4 py-2">Subscribe</button>
      </div>

      {/* People you might know Section */}
      <div className=" bg-transparent/45 rounded-2xl">
        <h2 className="text-xl font-bold p-4">People you might know</h2>

        {/* User Profiles */}
        {[
          { name: "John Doe", handle: "@johndoe", avatar: "/placeholder.svg?height=48&width=48" },
          { name: "Jane Smith", handle: "@janesmith", avatar: "/placeholder.svg?height=48&width=48" },
          { name: "Alex Johnson", handle: "@alexj", avatar: "/placeholder.svg?height=48&width=48" },
        ].map((user, index) => (
          <div
            key={index}
            className="p-4 bg-transparent/45 hover:  cursor-pointer flex justify-between items-center border-t border-gray-700"
          >
            <div className="flex items-center">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={`${user.name}'s avatar`}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.handle}</p>
              </div>
            </div>
            <button className="bg-white text-black font-bold rounded-full px-4 py-1 text-sm hover:bg-gray-200">
              Follow
            </button>
          </div>
        ))}

        {/* Show more button */}
        <div className="p-4 hover: bg-transparent/45 cursor-pointer border-t border-gray-700">
          <button className="text-blue-400">Show more</button>
        </div>
      </div>
    </div>
  )
}

