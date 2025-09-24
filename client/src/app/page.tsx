'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/containers/home/HeroSection';
import MountainSection from '@/containers/home/MountainSection';
import MapSection from '@/containers/home/MapSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <HeroSection />
      <MountainSection />
      <MapSection />

      <Footer />
    </div>
  );
}
