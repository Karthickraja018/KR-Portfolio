
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Index = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/3 right-32 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Minimal Hero Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
                whileHover={{ 
                  backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f97316)",
                  transition: { duration: 0.5 }
                }}
              >
                Alex Johnson
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light tracking-wide"
              variants={itemVariants}
            >
              Machine Learning Engineer
            </motion.h2>
          </motion.div>

          {/* Stylish CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/projects">
              <motion.button
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                className="group relative px-12 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold text-xl overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#3b82f6",
                  color: "#3b82f6",
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Index;
