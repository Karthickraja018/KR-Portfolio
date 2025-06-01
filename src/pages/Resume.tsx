
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { FileDown } from 'lucide-react';

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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow text-lg flex items-center gap-2 mx-auto"
            >
              <FileDown className="w-5 h-5" /> Download Resume (PDF)
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
                  KARTHICK RAJA E
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                  Machine Learning Engineer
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📧 e.karthickraja2004@gmail.com</span>
                  <span>📱 +91 8098620388</span>
                  <span>📍 Coimbatore</span>
                  <span>🔗 <a href="https://github.com/karthickraja918" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">github.com/karthickraja918</a></span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Motivated Machine Learning student with a strong foundation in Python, SQL, 
                  machine learning concepts, web development and data visualization. Passionate 
                  about leveraging data-driven insights to solve real-world problems and drive innovation.
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
                          Machine Learning Intern
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Cognizz Technology
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">
                        March 2024 - April 2024
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>Assisted in building and optimizing machine learning models for real-world applications</li>
                      <li>Pre-processed large datasets, enhancing data quality and feature selection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Bachelor of Technology in Artificial Intelligence & Machine Learning
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        SNS College of Technology | CGPA: 8.8 (5th semester)
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-500 text-sm">
                      2022 - 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Higher Secondary School
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        DSM Higher Secondary School | Percentage: 89%
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-500 text-sm">
                      2019 - 2022
                    </span>
                  </div>
                </div>
              </div>
              {/* Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Notable Projects
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mental Health AI Assistant (Python, GPT-Neo)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Fine-tuned GPT-Neo model for mental health assistance and counseling.
                      Trained on curated mental health conversations to provide empathetic and helpful responses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Automated Task Management System (n8n)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Built an automation workflow using n8n that tracks team tasks and deadlines.
                      Sends automated emails to team members for new tasks, deadline reminders, and overdue tasks with Google Form links for status updates.
                      Generates and delivers comprehensive progress reports to team leaders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Data Visualization AI (Python, Streamlit)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Developed an AI-powered tool for generating interactive and insightful data visualizations.
                      Integrated Pandas, Matplotlib, and Streamlit to enhance user experience and real-time analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Real Time Animal Detection and Alert System for Farmlands
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The system detects animals in farmland using YOLOv8 and logs the detections with a user-friendly GUI.
                      On detecting repeated intrusion, it triggers a siren and sends SMS alerts to the farm owner for timely action.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Virtual Mouse using Gestures (Python, OpenCV, Mediapipe)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Designed a gesture-based virtual mouse using OpenCV.
                      Implemented hand tracking algorithms to enable touch-free computer interaction.
                    </p>
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
                      Programming Languages
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Python, Java
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Web Development
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      HTML, CSS, JavaScript (basics)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Databases
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      MySQL, PostgreSQL
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Frameworks & Libraries
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pandas, Numpy, Matplotlib, TensorFlow, FastAPI, Flask, OpenCV, PyTorch, Scikit-learn
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Tools & Platforms
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      MS Excel, VS Code, Git, Postman, n8n
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Soft Skills
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Adaptability, Time Management, Team Collaboration
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Certifications
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li><span className="font-medium">DBMS Course</span> - Infosys Springboard (May 2024)</li>
                  <li><span className="font-medium">NPTEL Computer Vision Course</span> - NPTEL (July-October 2024)</li>
                  <li><span className="font-medium">Machine Learning Course</span> - Infosys Springboard (July 2024)</li>
                  <li><span className="font-medium">Generative AI Introduction</span> - Skillthub (July-August 2024)</li>
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li><span className="font-medium">Project Expo Participant</span> - Showcased innovative projects at  college-level exhibitions</li>
                  <li><span className="font-medium">Event Coordinator</span> - Led and organized student project presentations and technical events</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
