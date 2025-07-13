import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiOpencv, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiFlask, SiBootstrap, SiNodedotjs, SiExpress, SiHandlebarsdotjs, SiRazorpay } from 'react-icons/si';
import CodeBackground from './CodeBackground';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: "LumoVale",
            description: "A full-stack e-commerce platform built with Node.js, Express, MongoDB, and Handlebars. Features include user authentication, shopping cart, order management, admin product control, image upload, and Razorpay payment integration—all wrapped in a responsive Bootstrap UI.",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Handlebars", "Razorpay"],
            icons: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiHandlebarsdotjs, SiRazorpay],
            github: "https://github.com/Ashish-Shabu/LumoVale"
        },
        {
            title: "Modernized Printing Solutions",
            description: "A full-stack print request management platform built with a Flask backend and a clean HTML/CSS/JS frontend. Designed for institutions to manage printing workflows with real-time tracking, role-based access, and MongoDB data storage.",
            tech: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB"],
            icons: [SiHtml5, SiCss3, SiJavascript, SiFlask, SiMongodb],
            github: "https://github.com/Ashish-Shabu/modernized-printing-solutions",

        },
        {
            title: "Portfolio Website",
            description: "Modern responsive portfolio with dark theme and smooth animations.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            icons: [FaReact],
            github: "https://github.com/ashishshabu/portfolio",
            live: "https://ashishshabu.vercel.app"
        },

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <CodeBackground />

            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for technology.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            className={`glass-effect rounded-xl p-6 hover-glow group flex flex-col h-full ${project.featured ? 'ring-2 ring-primary-500' : ''}`}
                        >
                            {/* Status badge (optional) */}
                            {project.status && (
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-4 w-max ${project.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                                    {project.status}
                                </span>
                            )}
                            {/* Project name */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-300 text-base leading-relaxed mb-4">
                                {project.description}
                            </p>
                            {/* Tech stack tags with icon and text together */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-sm bg-dark-700 text-gray-300 px-3 py-1 rounded-full whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {/* Tech stack icons */}
                            <div className="flex items-center space-x-4 text-xl mb-4">
                                {project.icons && project.icons.map((Icon, iconIndex) => (
                                    <Icon
                                        key={iconIndex}
                                        className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300"
                                    />
                                ))}
                            </div>
                            {/* Spacer to push buttons to bottom */}
                            <div className="flex-grow" />
                            {/* Buttons at the bottom */}
                            <div className="flex space-x-4 pt-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-base text-gray-200 hover:text-primary-400 transition-colors duration-300 font-semibold"
                                    style={{ cursor: "pointer" }}
                                >
                                    <FaGithub />
                                    <span>GitHub</span>
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors duration-300 text-base"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 