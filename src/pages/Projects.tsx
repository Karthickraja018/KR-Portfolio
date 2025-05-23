
import { motion } from 'framer-motion';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using transformer architecture with context-aware responses and multi-modal capabilities.",
      category: "ai-agents",
      tech: ["Python", "PyTorch", "FastAPI", "React"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Image Classification API",
      description: "REST API for real-time image classification using convolutional neural networks with 95% accuracy.",
      category: "ml-models",
      tech: ["TensorFlow", "Docker", "AWS", "Node.js"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for tracking ML model performance with real-time analytics and visualizations.",
      category: "full-stack",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Stock Prediction Model",
      description: "Time-series prediction model using LSTM networks for financial market analysis and forecasting.",
      category: "ml-models",
      tech: ["Python", "TensorFlow", "Pandas", "Plotly"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Autonomous Game Agent",
      description: "Reinforcement learning agent that masters complex video games using deep Q-learning.",
      category: "ai-agents",
      tech: ["Python", "OpenAI Gym", "PyTorch", "Ray"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with ML-powered recommendation system and real-time inventory.",
      category: "full-stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-agents', label: 'AI Agents' },
    { id: 'ml-models', label: 'ML Models' },
    { id: 'full-stack', label: 'Full-Stack' }
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my work spanning AI agents, machine learning models, and full-stack applications.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-black/10 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">🚀</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-gray-800 text-white text-center rounded hover:bg-gray-700 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
