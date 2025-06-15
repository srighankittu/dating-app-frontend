import { useSelector } from "react-redux";
import {
  Search,
  Bell,
  Menu,
  Heart,
  MessageCircle,
  User,
  Home,
  Star,
  Info,
} from "lucide-react";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/10 via-purple-200/10 to-indigo-200/10"></div>

      <nav className="relative z-10 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left - Mobile Menu & Navigation */}
          <div className="flex items-center space-x-4">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 shadow-sm transition-all duration-200"
              >
                <Menu className="h-5 w-5 text-gray-700" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-2xl z-[1] mt-3 w-64 p-3 shadow-xl border border-white/20"
              >
                <li>
                  <a className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-200">
                    <Home className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">Homepage</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-200">
                    <Star className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">Discover</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-200">
                    <Info className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">About</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center">
            <a className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-200">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
                Srighan's Dating App
              </span>
            </a>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button className="btn btn-ghost btn-circle bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 shadow-sm transition-all duration-200 group">
              <Search className="h-5 w-5 text-gray-700 group-hover:text-purple-600 transition-colors" />
            </button>

            {/* Messages Button */}
            <button className="btn btn-ghost btn-circle bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 shadow-sm transition-all duration-200 group relative">
              <MessageCircle className="h-5 w-5 text-gray-700 group-hover:text-purple-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                3
              </span>
            </button>

            {/* Notifications Button */}
            <button className="btn btn-ghost btn-circle bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 shadow-sm transition-all duration-200 group relative">
              <Bell className="h-5 w-5 text-gray-700 group-hover:text-purple-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                2
              </span>
            </button>

            {/* Profile Button */}
            <button className="btn btn-ghost btn-circle bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 shadow-sm transition-all duration-200 group overflow-hidden">
              {user?.data?.photoUrl ? (
                <img
                  src={user.data.photoUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
