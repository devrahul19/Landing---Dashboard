import React from 'react';
import { HelpCircle, Plus } from 'lucide-react';

const FAQ = () => {
  return (
    <details className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 group">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <div className="flex items-center">
          <HelpCircle className="text-blue-700 mr-3" />
          <h2 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>
        <Plus className="transform group-open:rotate-45 transition-transform" />
      </summary>
      <div className="px-6 pb-6 border-t border-gray-200 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-medium text-gray-800 cursor-pointer list-none flex justify-between items-center">
              How does NetEarn work? <Plus />
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              NetEarn uses your unused internet bandwidth to help companies gather public data from the web. It's completely passive - just turn it on and start earning!
            </p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-medium text-gray-800 cursor-pointer list-none flex justify-between items-center">
              Is my personal data safe? <Plus />
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              Yes! We never access your personal data. We only use your bandwidth and IP address to access publicly available information on the web.
            </p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-medium text-gray-800 cursor-pointer list-none flex justify-between items-center">
              How much can I earn? <Plus />
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              Earnings vary based on usage time and bandwidth contribution. Most users earn between $15-$50 per month depending on their settings and internet connection.
            </p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-medium text-gray-800 cursor-pointer list-none flex justify-between items-center">
              When can I redeem my earnings? <Plus />
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              You can redeem your earnings once you've reached the minimum threshold of $5.00. Redemptions are processed within 24-48 hours.
            </p>
          </details>
        </div>
      </div>
    </details>
  );
};

export default FAQ;