import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const positiveQuotes = [
    "Thank you for reaching out! Looking forward to our collaboration.",
    "Great things happen to those who take the first step. I'll be in touch soon!",
    "Your message has been received with excitement. Let's create something amazing!",
    "Success is built on connections. Thanks for connecting with me!",
    "Every great partnership starts with a simple hello. Thanks for yours!"
  ];

  const [randomQuote] = useState(positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: -100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 100,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        delay: i * 0.1,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2
      }
    })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ulds5jj',
        'template_qths3br',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'e.karthickraja2004@gmail.com'
        },
        'GD_B-Ys2jsPdUbT1U'
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 6 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 relative">
        <AnimatePresence>
          {showSuccess && (
            <>
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={() => setShowSuccess(false)}
              />
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl z-50 w-[90%] max-w-md"
              >
                <div className="relative">
                  {/* Animated sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={sparkleVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute text-2xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="text-6xl mb-6 text-center"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    🎉
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    {randomQuote}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSuccess(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Continue Browsing
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Rest of the component remains the same */}
        {/* ... (keep all the existing JSX from the previous version) ... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm currently open to new opportunities and exciting projects. 
                Whether you have a question, proposal, or just want to say hi, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-700 dark:text-gray-300">e.karthickraja2004@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-700 dark:text-gray-300">+91 8098620388</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700 dark:text-gray-300">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/karthick-raja-e-2004-aiml/"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>🔗</span>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.github.com/karthickraja018"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://huggingface.co/Karthickraja89"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <span>🤗</span>
                  <span>HuggingFace</span>
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/karthick004/"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <span>💻</span>
                  <span>LeetCode</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
