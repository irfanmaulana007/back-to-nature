import { sampleMountains } from '@/data/mountains';
import { motion } from 'framer-motion';
import GoogleMap, { MapMarker } from '@/components/GoogleMap';

// Animation variants

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function MapSection() {
  // Transform mountain data to map markers
  const mapMarkers: MapMarker[] = sampleMountains.map((mountain) => ({
    id: mountain.id,
    position: {
      lat: mountain.location.coordinates.latitude,
      lng: mountain.location.coordinates.longitude,
    },
    title: mountain.name,
    info: {
      name: mountain.name,
      location: `${mountain.location.province}, ${mountain.location.regency}`,
      elevation: mountain.elevation,
      difficulty: mountain.difficulty,
      description: mountain.description,
    },
  }));

  return (
    <section id="mountains" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Map of Mountains
          </h3>
          <p className="text-lg text-gray-600">
            Map of {sampleMountains.length} amazing mountains across Indonesia
          </p>
        </motion.div>

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <GoogleMap 
            className="w-full"
            center={{ lat: -2.5489, lng: 118.0149 }} // Indonesia center
            zoom={5}
            markers={mapMarkers}
          />
        </motion.div>
      </div>
    </section>
  );
}
