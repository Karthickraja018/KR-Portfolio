import { motion } from 'framer-motion';
import { Github, Linkedin,  BookOpen } from 'lucide-react';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-xl shadow-2xl p-6"
    >
      {/* Profile Image Container with Pop-out Effect */}
      <div className="relative flex justify-center">
        <motion.div
          whileHover={{ scale: 1.15, y: -20 }}
          className="relative w-48 h-64 -mt-20"
        >
          <img
            src="Mine.png"
            alt="Karthick Raja"
            className="w-full h-full object-contain shadow-lg"
          />
        </motion.div>
      </div>

      {/* Name and Tagline */}
      <div className="text-center mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white"
        >
          Karthick Raja
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 mt-2"
        >
          ML Engineer & Full Stack Developer
        </motion.p>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center space-x-4 mt-4"
      >
        {[
          { Icon: Github, href: "https://github.com/karthickraja018" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/karthick-raja-e-2004-aiml/" },
          { Icon: BookOpen, href: "https://huggingface.co/Karthickraja89" },
        ].map(({ Icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition-colors"
          >
            <Icon className="w-5 h-5 text-gray-200" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;