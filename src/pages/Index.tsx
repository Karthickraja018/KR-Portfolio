
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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              Machine Learning Engineer
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in AI agents, deep learning models, and full-stack applications 
            that bridge the gap between cutting-edge research and practical implementation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="p-6 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI Agents</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reinforcement learning agents and intelligent automation systems
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">ML Models</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Computer vision, NLP, and time-series prediction models
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full-Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end applications with modern web technologies
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/5"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">• Published 5 papers in top-tier ML conferences</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">• Led AI team at Fortune 500 company</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">• Built ML systems serving 1M+ users</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">• Speaker at 10+ international conferences</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Index;
