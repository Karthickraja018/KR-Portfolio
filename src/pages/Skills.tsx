
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas/NumPy", level: 95 }
      ]
    },
    {
      title: "AI & Deep Learning",
      skills: [
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 88 },
        { name: "Reinforcement Learning", level: 80 },
        { name: "GANs", level: 75 },
        { name: "Transformers", level: 90 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Three.js", level: 70 },
        { name: "D3.js", level: 75 }
      ]
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "PostgreSQL", level: 82 }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-lg border border-white/10 dark:border-white/5 p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Awards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                AWS ML Specialty
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Machine Learning Specialist Certification
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Google AI/ML
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Professional ML Engineer Certificate
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏅</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Kaggle Expert
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Top 5% in ML competitions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
