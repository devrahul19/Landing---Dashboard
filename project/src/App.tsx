import { useState } from 'react';
import { spotifyIcon, youtubeIcon, netflixIcon, amazonIcon } from './assets/images';
import { HelpCircle, User, TrendingUp, Wifi, Clock, Settings } from 'lucide-react';
import Navbar from './components/Navbar';
import StatsCard from './components/StatsCard';
import RewardCard from './components/RewardCard';
import Chart from './components/Chart';
import ReferralSection from './components/ReferralSection';
import DataSettings from './components/DataSettings';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-200">
      <div className="w-full bg-gray-100 min-h-screen font-sans">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white px-4 md:px-8 py-6">
          <div className="max-w-[1400px] mx-auto">
            <Navbar />
            
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back, Alex!</h2>
                <p className="text-blue-200">Your passive income is growing while you relax.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm flex items-center hover:bg-blue-500 transition-colors">
                  <HelpCircle className="w-4 h-4 mr-2" /> How it Works
                </button>
                <button className="px-4 py-2 bg-green-500 rounded-lg text-sm flex items-center hover:bg-green-400 transition-colors">
                  <User className="w-4 h-4 mr-2" /> Invite Friends
                </button>
              </div>
            </div>

            {/* Earnings Card */}
            <div className="bg-gradient-to-r from-blue-800 to-indigo-700 rounded-xl p-4 md:p-6 mb-8 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-blue-200 mb-1">Total Earnings</p>
                  <h3 className="text-3xl md:text-4xl font-bold">$27.82</h3>
                  <p className="text-blue-200 mt-1">+$0.43 today</p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="mr-0 md:mr-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-green-400" />
                      <div>
                        <p className="text-blue-200 text-sm">Monthly Forecast</p>
                        <p className="text-xl font-semibold">$48.20</p>
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={isActive}
                      onChange={() => setIsActive(!isActive)}
                    />
                    <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
                    <span className="ml-3 font-medium">Active</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 py-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatsCard 
                title="Bandwidth Used"
                subtitle="This month"
                value="2.8 GB"
                percentage={35}
                trend="+18%"
                icon={<Wifi className="text-blue-700" />}
              />
              <StatsCard 
                title="Active Hours"
                subtitle="This month"
                value="76 hrs"
                percentage={65}
                trend="+12%"
                icon={<Clock className="text-purple-700" />}
              />
              <StatsCard 
                title="Total Tasks"
                subtitle="Completed"
                value="1,293"
                percentage={80}
                trend="+23%"
                icon={<Settings className="text-teal-700" />}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Redeem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <RewardCard 
                name="Spotify Premium"
                duration="1 month"
                price="$9.99"
                imageUrl={spotifyIcon}
                buttonColor="bg-green-600"
                buttonHoverColor="hover:bg-green-500"
              />
              <RewardCard 
                name="YouTube Premium"
                duration="1 month"
                price="$11.99"
                imageUrl={youtubeIcon}
                buttonColor="bg-red-600"
                buttonHoverColor="hover:bg-red-500"
              />
              <RewardCard 
                name="Netflix Basic"
                duration="1 month"
                price="$8.99"
                imageUrl={netflixIcon}
                buttonColor="bg-red-700"
                buttonHoverColor="hover:bg-red-600"
              />
              <RewardCard 
                name="Amazon Gift Card"
                duration="$10 value"
                price="$10.00"
                imageUrl={amazonIcon}
                buttonColor="bg-yellow-600"
                buttonHoverColor="hover:bg-yellow-500"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <Chart />
              <ReferralSection />
            </div>

            <DataSettings />
            <FAQ />
          </div>
        </div>
        
        {/* Move Footer outside the padded container */}
        <div className="w-full bg-gray-800">
          <div className="max-w-[1400px] mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;