import { Button } from '@/components/ui/button';
import { sampleMountains } from '@/data/mountains';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const statsVariants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

const statItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function HeroSection() {
  return (
    <section
      className="relative h-screen px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          variants={titleVariants}
        >
          Discover Indonesia's
          <span className="text-green-400 block">Majestic Mountains</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto"
          variants={subtitleVariants}
        >
          Plan your next hiking adventure with detailed information about
          Indonesian mountains, tracks, and registration requirements.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div 
          className="flex justify-center items-center mb-8"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const mountainsSection = document.getElementById('mountains');
                mountainsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Mountains
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={statsVariants}
        >
          <motion.div 
            className="text-center"
            variants={statItemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-white mb-2">
              {sampleMountains.length}+
            </div>
            <div className="text-gray-200">Mountains</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={statItemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-white mb-2">
              {Math.max(...sampleMountains.map((m) => m.elevation))}m
            </div>
            <div className="text-gray-200">Highest Peak</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={statItemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-white mb-2">
              {
                sampleMountains.filter((m) => m.difficulty === 'Beginner')
                  .length
              }
              +
            </div>
            <div className="text-gray-200">Beginner Friendly</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
