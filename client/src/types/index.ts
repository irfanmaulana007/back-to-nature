export interface Mountain {
  id: string;
  name: string;
  elevation: number;
  location: {
    province: string;
    regency: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  bestSeasons: string[];
  registrationFee: {
    domestic: number;
    international: number;
    currency: 'IDR';
  };
  images: string[];
  lastUpdated: Date;
}

export interface HikingTrack {
  id: string;
  mountainId: string;
  name: string;
  description: string;
  totalDistance: number; // in kilometers
  estimatedDuration: {
    ascent: number; // in hours
    descent: number; // in hours
  };
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  positions: Position[];
}

export interface Position {
  id: string;
  name: string;
  type: 'Basecamp' | 'Pos' | 'Shelter' | 'Summit' | 'Checkpoint';
  elevation: number;
  estimatedTimeFromPrevious: number; // in minutes
  facilities: string[];
  waterAvailability: boolean;
  description: string;
}

export interface SearchFilters {
  province?: string;
  difficulty?: string;
  elevationRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
}
