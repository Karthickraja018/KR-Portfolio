import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Brain, Globe, Server, Award, Trophy, Star, Database, BookOpen, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Python", icon: "🐍", featured: true },
        { name: "Java", icon: "☕" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "JavaScript", icon: "📜", featured: true }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "from-blue-400 to-cyan-400", 
      skills: [
        { name: "TensorFlow", icon: "🧠", featured: true },
        { name: "PyTorch", icon: "🔥" },
        { name: "scikit-learn", icon: "🤖", featured: true },
        { name: "Computer Vision", icon: "👁️" },
        { name: "NLP", icon: "💬" },
        { name: "Deep Learning", icon: "🧮" },
        { name: "Data Analysis", icon: "📊" }
      ]
    },
    {
      title: "Web Frameworks",
      icon: Layers,
      color: "from-green-400 to-teal-400", 
      skills: [
        { name: "FastAPI", icon: "⚡", featured: true },
        { name: "Flask", icon: "🌶️", featured: true },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Express", icon: "🚂" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "VS Code", icon: "💻", featured: true },
        { name: "Git", icon: "🔄", featured: true },
        { name: "Jupyter", icon: "📔" },
        { name: "n8n", icon: "⚡" ,featured: true},
        { name: "Postman", icon: "📮" },
        { name: "Streamlit", icon: "📊" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-yellow-400 to-amber-500",
      skills: [
        { name: "MySQL", icon: "🗄️"},
        { name: "PostgreSQL", icon: "🐘", featured: true },
        { name: "SQL Queries", icon: "🔍", featured: true },
      ]
    }
  ];

  const certifications = [
    {
      title: "DBMS Course",
      description: "Infosys Springboard (May 2024)",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Computer Vision",
      description: "NPTEL (July-October 2024)",
      icon: "🎓",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Machine Learning",
      description: "Infosys Springboard (July 2024)",
      icon: "🏅",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Generative AI",
      description: "Skillible (July-August 2024)",
      icon: "🤖",
      color: "from-red-400 to-pink-500"
    }
  ];

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
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing the technical skills I've developed through hands-on project experience in machine learning, automation, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 p-8 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 dark:hover:bg-black/5 transition-colors duration-200"
                      >
                        <motion.span 
                          className="text-xl"
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className={`text-gray-700 dark:text-gray-300 font-medium text-lg ${skill.featured ? 'featured' : ''}`}>
                          {skill.name}
                          {skill.featured && <span className="ml-1 text-yellow-500">★</span>}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-r from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 p-8 overflow-hidden"
        >
          <motion.h3 
            className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
            whileHover={{ scale: 1.02 }}
          >
            Certifications 
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group text-center p-6 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${cert.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{cert.icon}</span>
                </motion.div>
                
                <motion.h4 
                  className="font-semibold text-gray-900 dark:text-white mb-2 text-lg"
                  whileHover={{ color: "#3b82f6" }}
                >
                  {cert.title}
                </motion.h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
