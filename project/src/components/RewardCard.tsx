import React from 'react';
import { motion } from 'framer-motion';

interface RewardCardProps {
  name: string;
  duration: string;
  price: string;
  imageUrl: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const RewardCard: React.FC<RewardCardProps> = ({
  name,
  duration,
  price,
  imageUrl,
  buttonColor,
  buttonHoverColor
}) => {
  return (

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-center mb-4">

        <motion.img
          src={imageUrl}
          alt={name}

          className="w-16 h-16 object-contain p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
      <h3 className="text-center font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-center text-gray-500 text-sm mb-3">{duration}</p>
      <div className="flex justify-between items-center bg-gray-100 rounded-full px-3 py-1">
        <span className="text-gray-800 font-medium">{price}</span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${buttonColor} text-white px-3 py-1 rounded-full text-sm ${buttonHoverColor} transition-colors`}
        >
          Redeem

        </motion.button>
      </div>

    </motion.div>
  );
};

export default RewardCard;