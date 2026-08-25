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

  const certifications = [
    "Introduction to IT and AWS Cloud - AWS",
    "Full Stack Developer Bootcamp - GeeksforGeeks",
    "Cloud Computing Foundations - Google Cloud"
  ];

  const technicalSkills = [
    "Machine Learning & AI", "Web Development", "Mobile App Development",
    "Database Design", "API Development", "DevOps & CI/CD",
    "UI/UX Design", "Cybersecurity", "Cloud Computing"
  ];

  const softSkills = [
    "Leadership", "Team Management", "Problem Solving", "Communication",
    "Project Planning", "Event Organization"
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ashish_Shabu_Resume.pdf';
    link.download = 'Ashish_Shabu_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="section-padding bg-retro-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Resume</h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto">
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
            <div className="retro-window text-center h-full flex flex-col justify-between">
              <FaDownload className="text-6xl text-black mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Download Resume</h3>
              <p className="text-black font-medium mb-6">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button
                onClick={handleDownload}
                className="retro-button-primary text-xl font-mono mx-auto w-max"
              >
                [ Download PDF ]
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
            <div className="retro-window mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaGraduationCap className="text-2xl text-black" />
                <h3 className="text-xl font-bold text-black">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-black">{education.degree}</h4>
                  <p className="text-black font-medium">{education.institution}</p>
                  <p className="text-sm text-black font-bold">{education.year}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="retro-window">
              <div className="flex items-center space-x-3 mb-4">
                <FaCertificate className="text-2xl text-black" />
                <h3 className="text-xl font-bold text-black">Certifications</h3>
              </div>
              <div className="flex flex-col gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-black mt-1.5 border border-black"></div>
                    <span className="text-black font-medium text-sm leading-tight">{cert}</span>
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
            <div className="retro-window">
              <div className="flex items-center space-x-3 mb-4">
                <FaCode className="text-2xl text-black" />
                <h3 className="text-xl font-bold text-black">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="text-black font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="retro-window">
              <div className="flex items-center space-x-3 mb-4">
                <FaUsers className="text-2xl text-black" />
                <h3 className="text-xl font-bold text-black">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="text-black font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 