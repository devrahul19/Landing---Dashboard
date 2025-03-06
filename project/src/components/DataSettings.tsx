import React from 'react';
import { Settings, Clock, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const DataSettings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-6 shadow-sm mb-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Data Usage Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Bandwidth Limit</h3>
            <Settings className="text-blue-700" />
          </div>
          <p className="text-gray-600 text-sm mb-3">Control how much bandwidth to contribute</p>
          <div className="flex items-center justify-between">
            <input
              type="range"
              className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700">Medium</span>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Operation Hours</h3>
            <Clock className="text-purple-700" />
          </div>
          <p className="text-gray-600 text-sm mb-3">Set when the app should be active</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-purple-700 text-white rounded-md text-sm hover:bg-purple-600 transition-colors flex-1">
              All Day
            </button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300 transition-colors flex-1">
              Custom
            </button>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Network Types</h3>
            <Wifi className="text-teal-700" />
          </div>
          <p className="text-gray-600 text-sm mb-3">Choose which networks to use</p>
          <div className="flex items-center space-x-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-700" defaultChecked />
              <span className="ml-2 text-sm text-gray-700">Wi-Fi</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-700" />
              <span className="ml-2 text-sm text-gray-700">Mobile</span>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataSettings;