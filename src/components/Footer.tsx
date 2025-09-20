import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="text-xl font-bold">HikingNusantara</span>
            </div>
            <p className="text-gray-400">
              Your comprehensive guide to mountain hiking in Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Popular Mountains
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hiking Tracks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Get in touch for hiking information and support.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HikingNusantara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
