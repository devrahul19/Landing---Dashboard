import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  subtitle: string;
  value: string;
  percentage: number;
  trend: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  subtitle,
  value,
  percentage,
  trend,
  icon
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        {icon}
      </div>
      <div className="flex items-end">
        <div className="flex-1">
          <h4 className="text-3xl font-bold text-gray-800">{value}</h4>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-700 h-2 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        <div className="ml-2 text-sm text-green-600 font-medium">{trend}</div>
      </div>
    </motion.div>
  );
};

export default StatsCard;