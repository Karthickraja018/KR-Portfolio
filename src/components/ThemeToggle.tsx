
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className="text-xs">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
