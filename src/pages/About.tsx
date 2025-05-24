
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { Award, Users, Zap, Globe, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
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

  const achievements = [
    { icon: Award, text: "Published Research Papers", metric: "5+", color: "from-yellow-400 to-orange-500" },
    { icon: Users, text: "Fortune 500 Leadership", metric: "500+", color: "from-green-400 to-teal-500" },
    { icon: Zap, text: "ML Systems Users", metric: "1M+", color: "from-blue-400 to-purple-500" },
    { icon: Globe, text: "Conference Talks", metric: "10+", color: "from-pink-400 to-red-500" }
  ];

  const skills = [
    { name: "Machine Learning", level: 95, color: "bg-blue-500" },
    { name: "Deep Learning", level: 90, color: "bg-purple-500" },
    { name: "Python", level: 98, color: "bg-green-500" },
    { name: "TensorFlow", level: 85, color: "bg-orange-500" },
    { name: "Computer Vision", level: 88, color: "bg-pink-500" },
   
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden">
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
                alt="Alex Johnson"
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
                    className="group relative p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 overflow-hidden"
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
                    
                    <motion.div
                      className="relative z-10 text-center"
                    >
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

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Actions */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5 backdrop-blur-sm border border-white/20 dark:border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <Mail className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">alex.johnson@email.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <Phone className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <MapPin className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center space-y-6">
                <Link to="/resume">
                  <motion.button
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      View Resume
                    </span>
                  </motion.button>
                </Link>

                <Link to="/projects">
                  <motion.button
                    className="w-full group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold text-lg overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: "#3b82f6",
                      color: "#3b82f6"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      View Projects
                    </span>
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold text-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Get In Touch
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;
