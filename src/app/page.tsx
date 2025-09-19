'use client';

import { useState, useEffect } from 'react';
import { Search, Mountain, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sampleMountains } from '@/data/mountains';
import { Mountain as MountainType } from '@/types';
import MountainCard from '@/components/MountainCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const difficulties = [
    'all',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert',
  ];
  const provinces = [
    'all',
    ...Array.from(new Set(sampleMountains.map((m) => m.location.province))),
  ];

  const filteredMountains = sampleMountains.filter((mountain) => {
    const matchesSearch =
      mountain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mountain.location.province
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      mountain.location.regency
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === 'all' ||
      mountain.difficulty === selectedDifficulty;
    const matchesProvince =
      selectedProvince === 'all' ||
      mountain.location.province === selectedProvince;

    return matchesSearch && matchesDifficulty && matchesProvince;
  });


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Mountain
                className={`text-green-600 transition-all duration-300 ${
                  isScrolled ? 'h-6 w-6' : 'h-8 w-8'
                }`}
              />
              <h1
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? 'text-gray-900 text-xl' : 'text-white text-2xl'
                }`}
              >
                HikingNusantara
              </h1>
            </div>
            <nav
              className={`hidden md:flex transition-all duration-300 ${
                isScrolled ? 'space-x-6' : 'space-x-8'
              }`}
            >
              <a
                href="#"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </a>
              <a
                href="#"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Mountains
              </a>
              <a
                href="#"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Indonesia's
            <span className="text-green-400 block">Majestic Mountains</span>
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
            Plan your next hiking adventure with detailed information about
            Indonesian mountains, tracks, and registration requirements.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const mountainsSection = document.getElementById('mountains');
                mountainsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Mountains
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {sampleMountains.length}+
              </div>
              <div className="text-gray-200">Mountains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {Math.max(...sampleMountains.map((m) => m.elevation))}m
              </div>
              <div className="text-gray-200">Highest Peak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {
                  sampleMountains.filter((m) => m.difficulty === 'Beginner')
                    .length
                }
                +
              </div>
              <div className="text-gray-200">Beginner Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mountains Grid */}
      <section id="mountains" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Mountains
            </h3>
            <p className="text-lg text-gray-600">
              Discover {filteredMountains.length} amazing mountains across
              Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMountains.map((mountain) => (
              <MountainCard key={mountain.id} mountain={mountain} />
            ))}
          </div>

          {filteredMountains.length === 0 && (
            <div className="text-center py-12">
              <Mountain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No mountains found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
