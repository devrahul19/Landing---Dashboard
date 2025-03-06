import React, { useState } from 'react';
import { Megaphone, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://netearn.io/ref/alex123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full lg:w-1/3"
    >
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-xl font-bold text-gray-800 mb-4"
        >
          Referral Program
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-6"
        >
          Invite friends and earn $5 for each friend who joins and stays active for 30 days.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex items-center space-x-3 mb-6"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
          >
            <Megaphone className="text-blue-700" />
          </motion.div>
          <div>
            <p className="font-medium text-gray-800">Your referrals</p>
            <p className="text-gray-500">3 joined (2 active)</p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <input
            type="text"
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 pr-28 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value="https://netearn.io/ref/alex123"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyLink}
            className="absolute right-1 top-1 bg-blue-700 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-4 text-sm text-gray-500 flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Track your referrals in real-time
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReferralSection;