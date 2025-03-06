import { motion } from 'framer-motion';

function Retrieve() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: "insights",
      title: "Real-time Analytics",
      description: "Monitor performance metrics and data trends as they happen with live updates and intuitive visualizations.",
      color: "blue",
      delay: 0.2
    },
    {
      icon: "tune",
      title: "Customizable Parameters",
      description: "Adjust your data preferences, filtering criteria, and reporting schedules to match your specific business needs.",
      color: "purple",
      delay: 0.4
    },
    {
      icon: "security",
      title: "Enterprise-Grade Security",
      description: "Rest assured with our advanced encryption, secure authentication, and strict compliance with global data regulations.",
      color: "cyan",
      delay: 0.6
    }
  ];

  return (
    <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient blobs */}
        <div className="absolute w-[1000px] h-[1000px] -left-[200px] top-[10%] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute w-[1000px] h-[1000px] -right-[200px] top-[20%] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute w-[1000px] h-[1000px] left-1/3 bottom-[10%] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] via-[#0B1120]/90 to-purple-900/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:max-w-xl"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"
              >
                Advanced AI Dashboard
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-10 text-lg"
                initial={fadeIn.initial}
                whileInView={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
              >
                Our intuitive dashboard gives you complete control over your data assets. Monitor
                performance, customize parameters, and gain insights in real-time.
              </motion.p>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: feature.delay }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mr-4 flex-shrink-0 
                      group hover:bg-${feature.color}-500/20 transition-all duration-300`}>
                      <span className={`material-symbols-outlined text-${feature.color}-400 text-2xl 
                        group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-lg">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium 
                  hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1
                  relative overflow-hidden group"
              >
                <span className="relative z-10">Schedule Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Right dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:max-w-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1A1F2E]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-2xl"
              >
                <div className="rounded-xl overflow-hidden bg-[#131B2C] p-6">
                  {/* Window controls */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-8"
                  >
                    <div className="flex space-x-2">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 rounded-full bg-red-500/90"
                      />
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 rounded-full bg-yellow-500/90"
                      />
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 rounded-full bg-green-500/90"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <motion.span 
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
                      >
                        refresh
                      </motion.span>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
                      >
                        more_vert
                      </motion.span>
                    </div>
                  </motion.div>

                  <div className="space-y-8">
                    {/* Data Acquisition Chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-white font-medium">Data Acquisition Metrics</h4>
                        <motion.span 
                          animate={{ 
                            opacity: [1, 0.5, 1],
                            scale: [1, 0.98, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full"
                        >
                          Live
                        </motion.span>
                      </div>
                      <div className="w-full h-36 bg-[#1E2433] rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 flex items-end justify-around px-2">
                          {[50, 65, 40, 70, 60, 80].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${height}%` }}
                              transition={{ 
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }}
                              whileHover={{ 
                                height: `${height + 10}%`,
                                backgroundColor: "rgb(59, 130, 246)"
                              }}
                              className="w-1/6 bg-blue-500/80 rounded-t-lg transition-all duration-300"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* AI Performance Chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-white font-medium">AI Model Performance</h4>
                        <motion.div 
                          className="flex items-center"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          <span className="text-xs text-purple-400">98.7% Accuracy</span>
                        </motion.div>
                      </div>
                      <div className="w-full h-36 bg-[#1E2433] rounded-lg relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                          <motion.svg 
                            className="w-full h-full" 
                            viewBox="0 0 100 100" 
                            preserveAspectRatio="none"
                          >
                            <motion.path
                              d="M0,50 Q10,30 20,35 T40,30 T60,40 T80,35 T100,30"
                              stroke="rgb(168, 85, 247)"
                              strokeWidth="2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                            />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Active Sources */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.div 
                        className="bg-[#1E2433] rounded-lg p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="text-gray-400 text-sm">Active Sources</h5>
                          <motion.span 
                            animate={{ 
                              opacity: [1, 0.5, 1],
                              scale: [1, 0.95, 1]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="material-symbols-outlined text-blue-400 text-sm"
                          >
                            wifi
                          </motion.span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Retrieve; 