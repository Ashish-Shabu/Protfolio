import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaGraduationCap, FaCertificate, FaCode, FaUsers } from 'react-icons/fa';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: "B.Tech Computer Science Engineering",
    institution: "Amal Jyothi College of Engineering",
    year: "2022 - 2026",
  };

  // const certifications = [
  //   "AWS Certified Cloud Practitioner",
  //   "Google Cloud Platform Fundamentals",
  //   "Microsoft Azure AI Fundamentals",
  //   "TensorFlow Developer Certificate",
  // ];

  const technicalSkills = [
    "Machine Learning & AI", "Web Development", "Mobile App Development",
    "Database Design", "API Development", "DevOps & CI/CD",
    "UI/UX Design", "Cybersecurity", "Cloud Computing"
  ];

  const softSkills = [
    "Leadership", "Team Management", "Problem Solving", "Communication",
    "Project Planning", , "Event Organization",  
  ];

  const handleDownload = () => {
    // Placeholder for resume download
    const link = document.createElement('a');
    link.href = '/Ashish_Shabu_Resume_2025.pdf';
    link.download = 'Ashish_Shabu_Resume_2025.pdf';
    link.click();
  };

  return (
    <section id="resume" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Resume</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex flex-col"
          >
            <div className="glass-effect rounded-xl p-12  text-center h-full flex flex-col justify-between">
              <FaDownload className="text-6xl text-primary-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-6">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button
                onClick={handleDownload}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 hover-glow"
              >
                Download PDF
              </button>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full flex flex-col justify-between"
          >
            {/* Education */}
            <div className="glass-effect rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaGraduationCap className="text-2xl text-primary-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white">{education.degree}</h4>
                  <p className="text-gray-300">{education.institution}</p>
                  <p className="text-sm text-gray-400">{education.year}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FaUsers className="text-2xl text-primary-400" />
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            {/* <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FaCode className="text-2xl text-primary-400" />
                <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Soft Skills */}
            {/* <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FaUsers className="text-2xl text-primary-400" />
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 