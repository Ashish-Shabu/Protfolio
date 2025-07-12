import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLinux,
  FaHtml5, FaCss3Alt, FaDocker, FaAws, FaFigma, FaGithub, FaFlask, FaJava,
} from 'react-icons/fa';
import {
  SiExpress, SiMysql, SiMongodb, SiFirebase, SiC, SiGooglecloud
} from 'react-icons/si';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Flask', icon: FaFlask, color: 'text-green-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-green-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'C', icon: SiC, color: 'text-green-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Linux', icon: FaLinux, color: 'text-yellow-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold gradient-text"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed text-justify"
            >
              I'm a final-year Computer Science Engineering student at Amal Jyothi College of Engineering, passionate about Web Development and Cybersecurity. I enjoy transforming complex ideas into seamless digital experiences using technologies like Flask, Node.js, Express, MongoDB, and Bootstrap. My work focuses on developing secure, user-centric applications with scalable backend logic and clean frontend design.

              Currently working on LumoVale, an e-commerce platform, I continue to explore new stacks and development practices that push my capabilities and reflect real-world usability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {/* <h3 className="text-2xl font-semibold text-primary-400">Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Event Coordinator at ACM AJCE</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>UXPLORE Hackathon Organizer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>UI/UX Workshop Trainer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Passionate about AI & Machine Learning</span>
                </li>
              </ul> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl font-bold gradient-text"
            >
              Technical Skills
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-lg text-center hover-glow group"
                >
                  <skill.icon className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 