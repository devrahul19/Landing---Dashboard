import { motion } from 'framer-motion';

const serviceCards = [
  {
    icon: "🛒",
    title: "E-Commerce Intelligence",
    description: "Access comprehensive market trends, pricing strategies, and consumer behavior insights to optimize your e-commerce performance.",
    features: [
      "Real-time price monitoring",
      "Consumer sentiment analysis",
      "Competitor product insights"
    ],
    color: "from-blue-500/20 to-blue-600/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-blue-600/30",
    accentColor: "text-blue-400"
  },
  {
    icon: "📈",
    title: "Financial Market Data",
    description: "Leverage advanced financial data sets to drive predictive models, identify market opportunities, and minimize risk exposure.",
    features: [
      "Stock price predictions",
      "Market volatility indicators",
      "Economic trend analysis"
    ],
    color: "from-purple-500/20 to-purple-600/20",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-purple-600/30",
    accentColor: "text-purple-400"
  },
  {
    icon: "📰",
    title: "News Sentiment Analysis",
    description: "Capture the pulse of public opinion through AI-powered sentiment analysis of global news sources and social media.",
    features: [
      "Brand reputation monitoring",
      "Industry sentiment trends",
      "Real-time event impact"
    ],
    color: "from-teal-500/20 to-teal-600/20",
    hoverColor: "group-hover:from-teal-500/30 group-hover:to-teal-600/30",
    accentColor: "text-teal-400"
  }
];

function Services() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animated circles */}
        <div className="absolute w-[800px] h-[800px] -left-[200px] top-[10%] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute w-[800px] h-[800px] -right-[200px] top-[20%] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute w-[800px] h-[800px] left-1/3 bottom-[10%] bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] via-[#0B1120]/90 to-purple-900/30" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
            Our Premium Data Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock powerful insights with our comprehensive suite of data analytics services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group relative h-full bg-[#0B1120]/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${service.hoverColor} transition-all duration-300 opacity-10`} />
                  <div className="absolute inset-0 bg-grid-white/5 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                
                {/* Content */}
                <div className="relative z-20">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className={`w-5 h-5 ${service.accentColor} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button 
                    className={`mt-6 px-4 py-2 rounded-lg border border-opacity-20 ${service.accentColor} 
                      hover:bg-opacity-10 hover:bg-white transition-all duration-300 
                      relative overflow-hidden group`}
                  >
                    <span className="relative z-10">Learn more →</span>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 
                      bg-gradient-to-r ${service.color}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services; 