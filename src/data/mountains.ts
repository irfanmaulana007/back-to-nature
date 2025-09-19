import { Mountain } from '@/types';

export const sampleMountains: Mountain[] = [
  {
    id: '1',
    name: 'Gunung Rinjani',
    elevation: 3726,
    location: {
      province: 'Nusa Tenggara Barat',
      regency: 'Lombok Timur',
      coordinates: {
        latitude: -8.4112,
        longitude: 116.4572,
      },
    },
    description:
      'Gunung Rinjani adalah gunung berapi aktif yang terletak di Pulau Lombok, Nusa Tenggara Barat. Gunung ini merupakan gunung tertinggi kedua di Indonesia dan terkenal dengan kaldera dan danau Segara Anak yang indah.',
    difficulty: 'Advanced',
    bestSeasons: [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
    ],
    registrationFee: {
      domestic: 150000,
      international: 220000,
      currency: 'IDR',
    },
    images: [
      '/images/rinjani-1.jpg',
      '/images/rinjani-2.jpg',
      '/images/rinjani-3.jpg',
    ],
    lastUpdated: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Gunung Semeru',
    elevation: 3676,
    location: {
      province: 'Jawa Timur',
      regency: 'Lumajang',
      coordinates: {
        latitude: -8.1081,
        longitude: 112.9225,
      },
    },
    description:
      'Gunung Semeru adalah gunung tertinggi di Pulau Jawa dan merupakan gunung berapi aktif. Gunung ini terkenal dengan puncak Mahameru dan pemandangan yang spektakuler.',
    difficulty: 'Expert',
    bestSeasons: [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
    ],
    registrationFee: {
      domestic: 32500,
      international: 32500,
      currency: 'IDR',
    },
    images: [
      '/images/semeru-1.jpg',
      '/images/semeru-2.jpg',
      '/images/semeru-3.jpg',
    ],
    lastUpdated: new Date('2024-01-10'),
  },
  {
    id: '3',
    name: 'Gunung Bromo',
    elevation: 2329,
    location: {
      province: 'Jawa Timur',
      regency: 'Probolinggo',
      coordinates: {
        latitude: -7.9425,
        longitude: 112.9531,
      },
    },
    description:
      'Gunung Bromo adalah gunung berapi aktif yang terkenal dengan pemandangan sunrise yang menakjubkan dan kawah yang masih aktif. Merupakan bagian dari Taman Nasional Bromo Tengger Semeru.',
    difficulty: 'Beginner',
    bestSeasons: [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
    ],
    registrationFee: {
      domestic: 25000,
      international: 25000,
      currency: 'IDR',
    },
    images: [
      '/images/bromo-1.jpg',
      '/images/bromo-2.jpg',
      '/images/bromo-3.jpg',
    ],
    lastUpdated: new Date('2024-01-20'),
  },
  {
    id: '4',
    name: 'Gunung Kerinci',
    elevation: 3805,
    location: {
      province: 'Jambi',
      regency: 'Kerinci',
      coordinates: {
        latitude: -1.6967,
        longitude: 101.2642,
      },
    },
    description:
      'Gunung Kerinci adalah gunung tertinggi di Sumatera dan merupakan gunung berapi tertinggi di Indonesia. Gunung ini terkenal dengan pemandangan Danau Gunung Tujuh dan hutan tropis yang lebat.',
    difficulty: 'Advanced',
    bestSeasons: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    registrationFee: {
      domestic: 50000,
      international: 100000,
      currency: 'IDR',
    },
    images: [
      '/images/kerinci-1.jpg',
      '/images/kerinci-2.jpg',
      '/images/kerinci-3.jpg',
    ],
    lastUpdated: new Date('2024-01-12'),
  },
  {
    id: '5',
    name: 'Gunung Prau',
    elevation: 2565,
    location: {
      province: 'Jawa Tengah',
      regency: 'Wonosobo',
      coordinates: {
        latitude: -7.1833,
        longitude: 109.9167,
      },
    },
    description:
      'Gunung Prau adalah gunung yang terkenal dengan pemandangan sunrise dan lautan awan yang menakjubkan. Gunung ini relatif mudah didaki dan cocok untuk pemula.',
    difficulty: 'Beginner',
    bestSeasons: [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
    ],
    registrationFee: {
      domestic: 15000,
      international: 15000,
      currency: 'IDR',
    },
    images: ['/images/prau-1.jpg', '/images/prau-2.jpg', '/images/prau-3.jpg'],
    lastUpdated: new Date('2024-01-18'),
  },
  {
    id: '6',
    name: 'Gunung Merbabu',
    elevation: 3145,
    location: {
      province: 'Jawa Tengah',
      regency: 'Magelang',
      coordinates: {
        latitude: -7.45,
        longitude: 110.4333,
      },
    },
    description:
      'Gunung Merbabu adalah gunung berapi yang sudah tidak aktif dan terkenal dengan padang rumput yang luas di puncaknya. Gunung ini menawarkan pemandangan yang indah ke arah Gunung Merapi dan Gunung Sumbing.',
    difficulty: 'Intermediate',
    bestSeasons: [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
    ],
    registrationFee: {
      domestic: 20000,
      international: 20000,
      currency: 'IDR',
    },
    images: [
      '/images/merbabu-1.jpg',
      '/images/merbabu-2.jpg',
      '/images/merbabu-3.jpg',
    ],
    lastUpdated: new Date('2024-01-14'),
  },
];
