import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Background Blur Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"
      />

      {/* Card Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden"
      >
        {/* Profile Image Container */}
        <div className="relative p-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-32 h-32 mx-auto mb-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75" />
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
              alt="Karthick Raja"
              className="relative w-full h-full rounded-full object-cover border-2 border-white/50 dark:border-white/20"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 blur-sm"
            />
          </motion.div>

          {/* Name and Tagline */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Karthick Raja
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 mb-4"
            >
              ML Engineer & Full Stack Developer
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            {[
              { Icon: Github, href: "https://github.com/yourusername" },
              { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { Icon: Twitter, href: "https://twitter.com/yourusername" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Status Indicator */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard; 