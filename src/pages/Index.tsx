
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { Code, Brain, Globe, Zap, Award, Users } from 'lucide-react';

const Index = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const specializations = [
    {
      icon: Brain,
      title: "AI Agents",
      description: "Reinforcement learning agents and intelligent automation systems",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Code,
      title: "ML Models",
      description: "Computer vision, NLP, and time-series prediction models",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Full-Stack",
      description: "End-to-end applications with modern web technologies",
      color: "from-green-400 to-teal-400"
    }
  ];

  const achievements = [
    { icon: Award, text: "Published 5 papers in top-tier ML conferences", metric: "5+" },
    { icon: Users, text: "Led AI team at Fortune 500 company", metric: "500+" },
    { icon: Zap, text: "Built ML systems serving 1M+ users", metric: "1M+" },
    { icon: Globe, text: "Speaker at 10+ international conferences", metric: "10+" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
                  whileHover={{ 
                    backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f97316)",
                    transition: { duration: 0.3 }
                  }}
                >
                  Alex Johnson
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 relative">
                <span className="relative z-10">Machine Learning Engineer</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm"
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </h2>
            </motion.div>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Passionate about building{' '}
              <motion.span 
                className="text-blue-600 dark:text-blue-400 font-semibold"
                whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                transition={{ duration: 0.2 }}
              >
                intelligent systems
              </motion.span>{' '}
              that solve real-world problems. Specializing in AI agents, deep learning models, 
              and full-stack applications that bridge the gap between cutting-edge research 
              and practical implementation.
            </p>
          </motion.div>

          {/* Specializations */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={spec.title}
                    className="group relative p-8 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 overflow-hidden"
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {spec.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/projects">
                <motion.button
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="group px-10 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold text-lg relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#3b82f6",
                    color: "#3b82f6"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Get In Touch</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <div className="relative p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Notable Achievements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group text-center p-4 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
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
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {achievement.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Index;
