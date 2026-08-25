import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ashishshabu4@gmail.com',
      link: 'mailto:ashishshabu4@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8921091050',
      link: 'tel:+918921091050'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Kerala, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/Ashish-Shabu',
      color: 'hover:text-gray-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashish-shabu/',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: 'mailto:ashishshabu4@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-retro-bg">

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="retro-window">
              <h3 className="text-2xl font-bold text-black mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white shadow-retro-inset border-2 border-black text-black font-bold placeholder-gray-500 focus:outline-none transition-colors duration-75"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white shadow-retro-inset border-2 border-black text-black font-bold placeholder-gray-500 focus:outline-none transition-colors duration-75"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white shadow-retro-inset border-2 border-black text-black font-bold placeholder-gray-500 focus:outline-none transition-colors duration-75 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full retro-button-primary text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '[ Sending... ]' : '[ Send Message ]'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="retro-window">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center shadow-retro-sm">
                      <info.icon className="text-xl text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-black font-bold">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-black hover:text-white hover:bg-black px-1 transition-colors duration-75 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-black font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="retro-window">
              <h3 className="text-2xl font-bold text-black mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white border-2 border-black flex items-center justify-center text-xl text-black hover:text-white hover:bg-black transition-colors duration-75 hover-push shadow-retro-sm`}
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="retro-window mt-8">
              <h3 className="text-2xl font-bold text-black mb-4">Quick Response</h3>
              <p className="text-black font-medium text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters,
                feel free to reach out directly via email or phone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 