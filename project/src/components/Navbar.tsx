import React, { useState } from 'react';
import { User, Settings, HelpCircle, LogOut, DollarSign, LayoutDashboard, Gift, Users, MessageCircleQuestion, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <DollarSign className="w-5 h-5" />
        </div>
        <h1 className="text-2xl font-bold">NetEarn</h1>
      </div>
      <div className="flex items-center gap-6 md:gap-8">
        <a href="#" className="text-white font-medium flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
          <Gift className="w-4 h-4" />
          Rewards
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
          <Users className="w-4 h-4" />
          Referrals
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
          <MessageCircleQuestion className="w-4 h-4" />
          FAQ
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
          <LifeBuoy className="w-4 h-4" />
          Support
        </a>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
          >
            <User className="w-5 h-5" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-10 py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Help Center
              </a>
              <hr className="my-1" />
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600">
                <LogOut className="w-4 h-4" />
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;