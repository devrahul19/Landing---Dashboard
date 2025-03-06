import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-gray-900/75 border-b border-white/10 py-4 px-8 flex justify-between items-center z-50">
      <div className="flex items-center">
        <svg className="h-10 w-auto text-white/90" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          DataNova
        </span>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-300/90">
        {['Services', 'How It Works', 'Pricing', 'About Us'].map((item) => (
          <li key={item} className="relative group">
            <a href="#" className="hover:text-white transition-colors duration-300">
              {item}
            </a>
            <div className="absolute h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 bottom-0 left-0 group-hover:w-full transition-all duration-300" />
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button className="hidden md:block px-4 py-2 text-white/90 border border-white/20 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
          Log In
        </button>
        <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          Get Started
        </button>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-white/90 text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            menu
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-gray-900/90 border-b border-white/10 md:hidden p-6 mt-2 rounded-2xl mx-4 shadow-xl">
          <ul className="space-y-4">
            {['Services', 'How It Works', 'Pricing', 'About Us'].map((item) => (
              <li key={item}>
                <a href="#" className="block text-gray-300/90 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <button className="w-full px-4 py-2 text-white/90 border border-white/20 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 mb-3">
                Log In
              </button>
              <button className="w-full px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar 