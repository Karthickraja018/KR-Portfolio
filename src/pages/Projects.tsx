
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using transformer architecture with context-aware responses and multi-modal capabilities.",
      category: "ai-agents",
      tech: ["Python", "PyTorch", "FastAPI", "React"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-purple-400 to-pink-400",
      stats: "95% accuracy"
    },
    {
      id: 2,
      title: "Image Classification API",
      description: "REST API for real-time image classification using convolutional neural networks with 95% accuracy.",
      category: "ml-models",
      tech: ["TensorFlow", "Docker", "AWS", "Node.js"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-blue-400 to-cyan-400",
      stats: "1M+ requests/day"
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for tracking ML model performance with real-time analytics and visualizations.",
      category: "full-stack",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-green-400 to-teal-400",
      stats: "Real-time data"
    },
    {
      id: 4,
      title: "Stock Prediction Model",
      description: "Time-series prediction model using LSTM networks for financial market analysis and forecasting.",
      category: "ml-models",
      tech: ["Python", "TensorFlow", "Pandas", "Plotly"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-orange-400 to-red-400",
      stats: "85% accuracy"
    },
    {
      id: 5,
      title: "Autonomous Game Agent",
      description: "Reinforcement learning agent that masters complex video games using deep Q-learning.",
      category: "ai-agents",
      tech: ["Python", "OpenAI Gym", "PyTorch", "Ray"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-indigo-400 to-purple-400",
      stats: "Super-human performance"
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with ML-powered recommendation system and real-time inventory.",
      category: "full-stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      gradient: "from-pink-400 to-rose-400",
      stats: "10K+ users"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-agents', label: 'AI Agents', count: projects.filter(p => p.category === 'ai-agents').length },
    { id: 'ml-models', label: 'ML Models', count: projects.filter(p => p.category === 'ml-models').length },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my work spanning AI agents, machine learning models, and full-stack applications.
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <span className="relative z-10 flex items-center gap-2">
                {tab.label}
                <motion.span 
                  className={`px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id 
                      ? 'bg-white/20' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tab.count}
                </motion.span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-white text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🚀
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>

                  {/* Stats badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.stats}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white text-center rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Glow effect on hover */}
                {hoveredProject === project.id && (
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-20`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Projects;
