import { MapPin, Mountain } from 'lucide-react';
import { Mountain as MountainType } from '@/types';

interface MountainCardProps {
  mountain: MountainType;
}

export default function MountainCard({ mountain }: MountainCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      {/* Background Image */}
      <div 
        className="w-full aspect-video bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/rinjani.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
      
      {/* Mountain Name - Always Visible */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
          {mountain.name}
        </h2>
      </div>

      {/* Clean Info Overlay - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="bg-gradient-to-t from-black/90 to-transparent p-6 space-y-3">
          {/* Location */}
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{mountain.location.regency}, {mountain.location.province}</span>
          </div>

          {/* Peak Height */}
          <div className="flex items-center text-white/90 text-sm">
            <Mountain className="h-4 w-4 mr-2" />
            <span>{mountain.elevation.toLocaleString()} m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
