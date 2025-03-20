import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="px-4 sm:px-8 py-8 sm:py-16 z-10 w-full">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight text-center sm:text-left"
          variants={itemVariants}
        >
          Unlock the Power of{' '}
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 block sm:inline"
            animate={{ 
              backgroundPosition: ["0%", "100%"],
              backgroundSize: ["100%", "200%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Advanced Data
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed text-center sm:text-left"
          variants={itemVariants}
        >
          Transform your business with AI-driven data insights, market intelligence, and predictive analytics. 
          Harness the future today.
        </motion.p>
        
        <motion.div 
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
            <span>Start Your Journey</span>
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-500 text-white rounded-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">play_circle</span>
            <span>Watch Demo</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Background Effects - Hidden on mobile */}
      <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-700/20 to-transparent" />
        <div className="absolute top-1/4 right-16 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-32 w-48 h-48 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>
    </div>
  )
}

export default Hero