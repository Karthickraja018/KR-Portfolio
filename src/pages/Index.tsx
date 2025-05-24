import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { Award, Users, Zap, Globe, ArrowRight, Mail } from 'lucide-react';

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

  const achievements = [
    { icon: Award, text: "Published Research Papers", metric: "5+", color: "from-yellow-400 to-orange-500" },
    { icon: Users, text: "Fortune 500 Leadership", metric: "500+", color: "from-green-400 to-teal-500" },
    { icon: Zap, text: "ML Systems Users", metric: "1M+", color: "from-blue-400 to-purple-500" },
    { icon: Globe, text: "Conference Talks", metric: "10+", color: "from-pink-400 to-red-500" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative">
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
            <motion.div variants={itemVariants} className="mb-16 relative">
              <motion.div
                className="absolute left-0 -top-20 text-2xl text-gray-600 dark:text-gray-400"
                style={{
                  fontWeight: '500',
                  transform: 'rotate(-5deg)',
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                  cursor: 'grab'
                }}
                drag
                dragConstraints={{
                  left: -500,
                  right: 500,
                  top: -300,
                  bottom: 300
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileDrag={{ scale: 1.2 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                Hello, I'm
              </motion.div>

              <motion.h1 
                className="text-7xl md:text-9xl font-bold mb-8 mt-24"
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
                  Karthick Raja
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

              <a href="#about">
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
                  <span className="relative z-10">About Me</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section - Simplified for Home Page */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative">
          {/* Enhanced floating elements - same as hero section */}
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
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '6s' }}
            className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-2xl"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                className="text-lg text-blue-600 dark:text-blue-400 font-semibold"
                variants={itemVariants}
              >
                About Me
              </motion.p>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Passionate about <span className="text-blue-600 dark:text-blue-400">AI</span> & <span className="text-purple-600 dark:text-purple-400">Innovation</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
              Just your friendly neighborhood ML student 🕷️ trying to teach computers how to think! 
              Currently juggling neural networks like a circus performer 🎪 while attempting to explain 
              to my laptop why it needs to train faster. My greatest achievements include successfully 
              installing TensorFlow without crying and making a model that can tell cats from dogs... 
              most of the time! 😅 Let's connect and geek out about AI - I promise to keep the math 
              jokes to a minimum! 🤓✨
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-6 py-6"
                variants={itemVariants}
              >
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.metric}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/about">
                  <motion.button
                    className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 rounded-full font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Background Shape */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl transform rotate-6 scale-110 opacity-20"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className="relative z-10 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=600&fit=crop&crop=face"
                  alt="Karthick Raja"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border-4 border-blue-100 dark:border-blue-900"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
