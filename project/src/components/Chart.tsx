import React from 'react';
import { motion } from 'framer-motion';

const Chart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-2/3 bg-white rounded-xl p-6 shadow-sm"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Earnings History</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm hover:bg-gray-300 transition-colors">
            Week
          </button>
          <button className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-600 transition-colors">
            Month
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm hover:bg-gray-300 transition-colors">
            Year
          </button>
        </div>
      </div>
      <div className="h-[240px] relative">
        <svg viewBox="0 0 500 200" className="w-full h-full">
          <path
            d="M0,150 C100,100 150,180 200,120 C250,60 300,120 350,90 C400,60 450,80 500,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          <path
            d="M0,150 C100,100 150,180 200,120 C250,60 300,120 350,90 C400,60 450,80 500,30"
            fill="url(#gradient)"
            fillOpacity="0.2"
            stroke="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-0 w-full flex justify-between text-sm text-gray-500 px-2">
          <span>May 1</span>
          <span>May 8</span>
          <span>May 15</span>
          <span>May 22</span>
          <span>May 29</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Chart;