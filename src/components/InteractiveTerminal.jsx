import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InteractiveTerminal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Ashish\'s Terminal v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.\n' },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => [
      '╔══════════════════════════════════════════╗',
      '║         AVAILABLE COMMANDS               ║',
      '╠══════════════════════════════════════════╣',
      '║  whoami        → About me                ║',
      '║  skills        → Technical skills         ║',
      '║  projects      → My projects              ║',
      '║  education     → Education details         ║',
      '║  certifications→ My certifications         ║',
      '║  contact       → Get in touch              ║',
      '║  resume        → Download my resume        ║',
      '║  clear         → Clear terminal            ║',
      '║  sudo hire ashish → 😉                    ║',
      '╚══════════════════════════════════════════╝',
    ],

    whoami: () => [
      '',
      '  ╭─────────────────────────────────────╮',
      '  │  Ashish Shabu                       │',
      '  │  Software Development Engineer      │',
      '  ╰─────────────────────────────────────╯',
      '',
      '  CSE Graduate from Amal Jyothi College of Engineering.',
      '  Passionate about System Design, AI, and building',
      '  scalable backend architectures.',
      '',
    ],

    skills: () => [
      '',
      '  ⚡ Languages    → Python, JavaScript, Java, C',
      '  🌐 Frontend     → React, HTML5, CSS3, Tailwind',
      '  🔧 Backend      → Node.js, Express, Flask',
      '  🗄️ Databases    → MongoDB, MySQL, Firebase',
      '  ☁️ Cloud        → AWS, Google Cloud, Docker',
      '  🛠️ Tools        → Git, Linux, Figma, GitHub',
      '',
    ],

    projects: () => [
      '',
      '  ┌─ 🔥 Invigilens: AI-Powered Proctoring',
      '  │  Real-time AI exam monitoring with OpenCV & YOLOv8',
      '  │  Tech: Python, Node.js, Express, MongoDB, WebSockets',
      '  │  github.com/Ashish-Shabu/Invigilens',
      '  │',
      '  ├─ 🖨️ Modernized Printing Solutions',
      '  │  Full-stack print management platform',
      '  │  Tech: Flask, MongoDB, HTML/CSS/JS',
      '  │',
      '  ├─ 🛒 LumoVale',
      '  │  E-commerce platform with Razorpay payments',
      '  │  Tech: Node.js, Express, MongoDB, Handlebars',
      '  │',
      '  └─ 💼 Portfolio Website',
      '     This very site! Built with React + Vite',
      '     Tech: React, Tailwind CSS, Framer Motion',
      '',
    ],

    education: () => [
      '',
      '  🎓 B.Tech Computer Science Engineering',
      '     Amal Jyothi College of Engineering',
      '     2022 - 2026',
      '',
    ],

    certifications: () => [
      '',
      '  📜 Introduction to IT and AWS Cloud — AWS',
      '  📜 Full Stack Developer Bootcamp — GeeksforGeeks',
      '  📜 Cloud Computing Foundations — Google Cloud',
      '',
    ],

    contact: () => [
      '',
      '  📧 Email    → ashishshabu4@gmail.com',
      '  🔗 LinkedIn → linkedin.com/in/ashish-shabu',
      '  🐙 GitHub   → github.com/Ashish-Shabu',
      '',
    ],

    resume: () => {
      // Trigger download
      const link = document.createElement('a');
      link.href = '/Ashish_Shabu_Resume.pdf';
      link.download = 'Ashish_Shabu_Resume.pdf';
      link.click();
      return [
        '',
        '  📥 Downloading resume...',
        '  ✅ Thanks for checking it out!',
        '',
      ];
    },

    clear: () => 'CLEAR',

    'sudo hire ashish': () => {
      setTimeout(() => {
        window.open('https://www.linkedin.com/in/ashish-shabu/', '_blank');
      }, 1500);
      return [
        '',
        '  [sudo] password for recruiter: ********',
        '  ✅ Permission granted.',
        '  🚀 Redirecting to LinkedIn...',
        '  💼 Let\'s build something amazing together!',
        '',
      ];
    },
  };

  const handleCommand = (input) => {
    const trimmed = input.trim().toLowerCase();

    // Add the user's command to history if not empty
    if (trimmed !== '') {
      setCommandHistory((prev) => [...prev, trimmed]);
    }
    setHistoryIndex(-1);

    // Add the user's command to terminal view history
    const newHistory = [
      ...history,
      { type: 'input', content: input },
    ];

    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    if (trimmed === 'clear') {
      setHistory([
        { type: 'system', content: 'Terminal cleared.' },
        { type: 'system', content: 'Type "help" to see available commands.\n' },
      ]);
      return;
    }

    const commandFn = commands[trimmed];
    if (commandFn) {
      const output = commandFn();
      setHistory([
        ...newHistory,
        { type: 'output', content: output.join('\n') },
      ]);
    } else {
      setHistory([
        ...newHistory,
        { type: 'error', content: `  command not found: ${trimmed}\n  Type "help" to see available commands.` },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal Window */}
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{
              border: '1px solid rgba(56, 189, 248, 0.2)',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.08)',
            }}
          >
            {/* Title Bar */}
            <div
              className="flex items-center px-4 py-3 space-x-3"
              style={{ background: '#1a1a2e' }}
            >
              {/* macOS Dots */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
              </div>
              {/* Title */}
              <span
                className="text-xs font-mono text-gray-400 flex-1 text-center"
                style={{ letterSpacing: '0.05em' }}
              >
                ashish@portfolio:~$
              </span>
              <div className="w-14" /> {/* Spacer to center the title */}
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              onClick={focusInput}
              className="p-5 font-mono text-sm overflow-y-auto cursor-text"
              style={{
                background: '#0d1117',
                height: '380px',
                lineHeight: '1.7',
              }}
            >
              {/* History */}
              {history.map((entry, index) => (
                <div key={index} className="whitespace-pre-wrap">
                  {entry.type === 'input' && (
                    <div>
                      <span className="text-green-400">ashish</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-blue-400">portfolio</span>
                      <span className="text-gray-500">:~$ </span>
                      <span className="text-gray-200">{entry.content}</span>
                    </div>
                  )}
                  {entry.type === 'output' && (
                    <div className="text-cyan-300 mb-1">{entry.content}</div>
                  )}
                  {entry.type === 'system' && (
                    <div className="text-gray-500 mb-1">{entry.content}</div>
                  )}
                  {entry.type === 'error' && (
                    <div className="text-red-400 mb-1">{entry.content}</div>
                  )}
                </div>
              ))}

              {/* Current Input Line */}
              <div className="flex items-center">
                <span className="text-green-400">ashish</span>
                <span className="text-gray-500">@</span>
                <span className="text-blue-400">portfolio</span>
                <span className="text-gray-500">:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-gray-200 font-mono text-sm caret-cyan-400"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* Hint Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center text-gray-600 text-xs mt-4 font-mono"
          >
            💡 Click the terminal and type a command. Try "help" to get started.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
