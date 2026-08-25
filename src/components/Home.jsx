import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-retro-bg">
      
      <div className="container-custom text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="gradient-text">Ashish Shabu</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-black max-w-4xl mx-auto leading-relaxed font-bold"
          >
            Engineering Ideas. Building Solutions. Exploring the Future of Tech.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 text-2xl"
          >
            <a
              href="https://github.com/Ashish-Shabu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white hover:bg-black p-2 transition-colors duration-75 border-2 border-transparent hover:border-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-shabu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white hover:bg-black p-2 transition-colors duration-75 border-2 border-transparent hover:border-black"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ashishshabu2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white hover:bg-black p-2 transition-colors duration-75 border-2 border-transparent hover:border-black"
            >
              <FaEnvelope />
            </a>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToProjects}
            className="mt-8 retro-button-primary text-xl font-mono"
          >
            [ View Projects ]
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-4 border-black flex justify-center bg-retro-window shadow-retro-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-black mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 