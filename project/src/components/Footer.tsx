import React from 'react';
import { DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-800 text-white p-6 rounded-b-xl footer"
    >
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <DollarSign className="w-6 h-6" />
            <h3 className="text-lg font-bold">NetEarn</h3>
          </div>
          <p className="text-gray-400 text-sm mb-2">Passive income made simple.</p>
          <p className="text-gray-400 text-sm">© 2023 NetEarn Technologies Inc.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rewards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Referrals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;