import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';

/**
 * Projects component displays a portfolio of projects with tab-based filtering
 * and animated project cards, categorized into Models, Automation, and Full-Stack.
 */
const Projects = () => {
  // State for the currently selected tab (e.g., 'all', 'models', 'automation', 'full-stack')
  const [activeTab, setActiveTab] = useState('all');
  // State for tracking the currently hovered project card for hover effects
  const [hoveredProject, setHoveredProject] = useState(null);

  // Array of project objects with details for display, categorized by technical focus
  const projects = [
    {
      id: 1,
      title: "Animal Detection",
      description: "Real-time animal detection system using YOLOv8, with bounding box visualization and CSV logging for monitoring.",
      category: "models",
      tech: ["Python", "OpenCV", "YOLOv8"],
      image: "/placeholder.svg", // Replace with actual image of animal detection
      github: "https://github.com/Karthickraja018/Animal-Detection",
      demo: null,
      gradient: "from-green-400 to-teal-400",
      stats: "95% accuracy"
    },
    {
      id: 2,
      title: "Virtual Mouse",
      description: "Gesture-controlled virtual mouse using hand tracking with MediaPipe for seamless cursor navigation.",
      category: "models",
      tech: ["Python", "MediaPipe", "OpenCV"],
      image: "/placeholder.svg", // Replace with actual image of virtual mouse
      github: "https://github.com/Karthickraja018/Virtual-Mouse",
      demo: null,
      gradient: "from-blue-400 to-cyan-400",
      stats: "Real-time tracking"
    },
    {
      id: 3,
      title: "Data Analytics Chatbot",
      description: "Interactive chatbot for data analysis and visualization using Streamlit, with support for CSV processing and NLP.",
      category: "full-stack",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: "/placeholder.svg", // Replace with actual image of chatbot UI
      github: "https://github.com/Karthickraja018/AskUrDataz",
      demo: "https://askurdataz.streamlit.app/",
      gradient: "from-purple-400 to-pink-400",
      stats: "100+ queries"
    },
    {
      id: 4,
      title: "Semester Result Prediction",
      description: "Machine learning model to predict semester grades based on student performance data, using regression techniques.",
      category: "models",
      tech: ["Python", "Scikit-learn", "Pandas"],
      image: "/placeholder.svg", // Replace with actual image of prediction dashboard
      github: "#",
      demo: "#",
      gradient: "from-orange-400 to-red-400",
      stats: "85% accuracy"
    },
    {
      id: 5,
      title: "Mental Health Assistant",
      description: "Fine-tuned GPT-Neo model for conversational mental health support, providing empathetic responses.",
      category: "models",
      tech: ["Python", "Transformers", "PyTorch"],
      image: "/placeholder.svg", // Replace with actual image of assistant interface
      github: "#",
      demo: "#",
      gradient: "from-indigo-400 to-purple-400",
      stats: "Context-aware"
    },
    {
      id: 6,
      title: "Skin Disease Prediction",
      description: "ML-powered web app for predicting skin diseases from images, with a React frontend for user interaction.",
      category: "full-stack",
      tech: ["Python", "TensorFlow", "React"],
      image: "/placeholder.svg", // Replace with actual image of skin disease app
      github: "#",
      demo: "#",
      gradient: "from-pink-400 to-rose-400",
      stats: "90% accuracy"
    },
    {
      id: 7,
      title: "Project Task Scheduler",
      description: "Automated project management system using n8n that sends daily status reports to managers and task reminders to team members. Includes Google Forms integration for status updates, deadline notifications, and overdue alerts.",
      category: "automation", 
      tech: ["n8n", "Google Forms", "Gmail API", "Cron"],
      image: "/placeholder.svg", // Replace with actual image of automation workflow
      github: "#",
      demo: "#",
      gradient: "from-blue-600 to-teal-600",
      stats: "98% task tracking"
    },
    {
      id: 8,
      title: "LeetBuddy",
      description: "Automated email system using n8n that sends daily LeetCode problems and solutions for consistent practice and learning.",
      category: "automation", 
      tech: ["n8n", "Email", "LeetCode API"],
      image: "/placeholder.svg", // Replace with actual image of email automation workflow
      github: "#",
      demo: "#",
      gradient: "from-yellow-400 to-orange-400",
      stats: "Daily emails"
    }
  ];

  // Tabs for filtering projects by category
  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'models', label: 'Models', count: projects.filter(p => p.category === 'models').length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length }
  ];

  // Filter projects based on the active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header Section */}
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
            A collection of my work spanning machine learning models, automation solutions, and full-stack applications.
          </p>
        </motion.div>

        {/* Tab Navigation */}
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
              aria-label={`Select ${tab.label} tab`}
            >
              {/* Animated background for active tab */}
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

        {/* Projects Grid */}
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
                {/* Project Image/Icon Section */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-white text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🚀
                  </motion.div>
                  
                  {/* Hover overlay with GitHub and Demo links */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.github && (
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white border-2 border-white/30 hover:bg-white/40 hover:border-white/50 transition-all duration-200 cursor-pointer z-20"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 5,
                          backgroundColor: "rgba(255, 255, 255, 0.5)"
                        }}
                        whileTap={{ 
                          scale: 0.9,
                          rotate: -5
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="w-6 h-6" />
                      </motion.button>
                    )}
                    {project.demo && (
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank', 'noopener,noreferrer');
                        }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white border-2 border-white/30 hover:bg-white/40 hover:border-white/50 transition-all duration-200 cursor-pointer z-20"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: -5,
                          backgroundColor: "rgba(255, 255, 255, 0.5)"
                        }}
                        whileTap={{ 
                          scale: 0.9,
                          rotate: 5
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.button>
                    )}
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
                
                {/* Project Details */}
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
                  
                  {/* Tech Stack Tags */}
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
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white text-center rounded-xl text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 cursor-pointer z-10"
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          y: 0
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    )}
                    {project.demo && (
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank', 'noopener,noreferrer');
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer z-10"
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          y: 0
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                        aria-label={`View ${project.title} demo`}
                      >
                        <Eye className="w-4 h-4" />
                        Demo
                      </motion.button>
                    )}
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