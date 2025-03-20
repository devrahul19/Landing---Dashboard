import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Retrieve from './components/Retrieve'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile] = useState(window.innerWidth < 768); // Check if mobile

  const handleScroll = (e) => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = e.target.scrollTop;
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop - windowHeight / 3) {
        setActiveSection(index);
      }
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background container with fixed position */}
      <div className="fixed inset-0 z-0">
        {/* Base background color */}
        <div className="absolute inset-0 bg-[#0B1120]" />

        {/* Gradient overlays for each section */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-b from-blue-900/30 via-transparent to-indigo-900/30
            ${activeSection === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/30
            ${activeSection === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-b from-indigo-900/30 via-transparent to-purple-900/30
            ${activeSection === 2 ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Grid overlay - Adjusted for mobile */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]
          bg-repeat sm:bg-auto" />
        
        {/* Animated blobs - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          {/* Blob 1 */}
          <div 
            className={`absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob
              transition-colors duration-1000 bg-gradient-to-r
              ${activeSection === 0 ? 'from-blue-500/30 to-purple-500/30' : 
                activeSection === 1 ? 'from-purple-500/30 to-blue-500/30' : 
                'from-indigo-500/30 to-purple-500/30'}`}
          />
          {/* Blob 2 */}
          <div 
            className={`absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob animation-delay-2000
              transition-colors duration-1000 bg-gradient-to-r
              ${activeSection === 0 ? 'from-indigo-500/30 to-purple-500/30' : 
                activeSection === 1 ? 'from-blue-500/30 to-indigo-500/30' : 
                'from-purple-500/30 to-blue-500/30'}`}
          />
          {/* Blob 3 */}
          <div 
            className={`absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob animation-delay-4000
              transition-colors duration-1000 bg-gradient-to-r
              ${activeSection === 0 ? 'from-purple-500/30 to-blue-500/30' : 
                activeSection === 1 ? 'from-indigo-500/30 to-purple-500/30' : 
                'from-blue-500/30 to-indigo-500/30'}`}
          />
        </div>
      </div>

      {/* Content */}
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      <main 
        className="relative h-screen snap-y snap-mandatory snap-always overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth z-10"
        onScroll={handleScroll}
      >
        {/* Section 1: Hero & Partners */}
        <section className="relative snap-start snap-always min-h-screen w-full flex items-center justify-center px-4 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-[#0B1120] pointer-events-none" />
          <Hero />
        </section>

        {/* Section 2: Services */}
        <section className="relative snap-start snap-always min-h-screen w-full flex items-center justify-center px-4 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/90 to-[#0B1120] pointer-events-none" />
          <Services />
        </section>

        {/* Section 3: Retrieve */}
        <section className="relative snap-start snap-always min-h-screen w-full flex items-center justify-center px-4 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/90 to-[#0B1120] pointer-events-none" />
          <Retrieve />
        </section>
      </main>
    </div>
  )
}

export default App