
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Resume = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download my latest resume or view it online
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow text-lg"
            >
              📄 Download Resume (PDF)
            </motion.button>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 p-8"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b border-gray-300 dark:border-gray-600 pb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Alex Johnson
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                  Machine Learning Engineer
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📧 alex.johnson@email.com</span>
                  <span>📱 (555) 123-4567</span>
                  <span>📍 San Francisco, CA</span>
                  <span>🔗 linkedin.com/in/alexjohnson</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Experienced Machine Learning Engineer with 5+ years developing and deploying 
                  AI systems at scale. Proven track record of building intelligent agents, 
                  deep learning models, and full-stack applications that deliver measurable 
                  business impact. Strong background in computer vision, NLP, and reinforcement learning.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Senior ML Engineer
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          TechCorp Inc. | San Francisco, CA
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">
                        2021 - Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>Led development of recommendation system serving 10M+ users</li>
                      <li>Improved model accuracy by 25% using advanced deep learning techniques</li>
                      <li>Built MLOps pipeline reducing deployment time by 60%</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          ML Engineer
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          AI Startup | Palo Alto, CA
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">
                        2019 - 2021
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>Developed computer vision models for autonomous vehicle perception</li>
                      <li>Published 3 papers in top-tier ML conferences</li>
                      <li>Built data pipeline processing 1TB+ of sensor data daily</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Education
                </h3>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        M.S. Computer Science
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Stanford University | GPA: 3.9/4.0
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-500 text-sm">
                      2017 - 2019
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Machine Learning
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Python, TensorFlow, PyTorch, Scikit-learn, Pandas
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Development
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React, Node.js, Docker, AWS, FastAPI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
