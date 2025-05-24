import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { Award, Users, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const achievements = [
    { icon: Award, text: "Published Research Papers", metric: "5+", color: "from-yellow-400 to-orange-500" },
    { icon: Users, text: "Fortune 500 Leadership", metric: "500+", color: "from-green-400 to-teal-500" },
    { icon: Zap, text: "ML Systems Users", metric: "1M+", color: "from-blue-400 to-purple-500" },
    { icon: Globe, text: "Conference Talks", metric: "10+", color: "from-pink-400 to-red-500" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Floating gradient blobs for background, matching Index.tsx */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/3 right-32 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* Hero Section with Profile */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
                alt="Karthick Raja"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate Machine Learning Engineer with 8+ years of experience building intelligent systems 
              that solve real-world problems. I specialize in AI agents, deep learning models, and full-stack 
              applications that bridge cutting-edge research with practical implementation.
            </motion.p>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <motion.div className="relative z-10 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      
                      <motion.div
                        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {achievement.metric}
                      </motion.div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.text}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link to="/about">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Learn More About Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;
