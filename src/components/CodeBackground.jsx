import React, { useEffect, useState } from 'react';

const CodeBackground = () => {
  const [codeLines, setCodeLines] = useState([]);

  useEffect(() => {
    const generateCodeLines = () => {
      const lines = [];
      const codeSnippets = [
        'const project = {',
        '  name: "InvigiLens",',
        '  tech: ["React", "Node.js", "YOLO"]',
        '};',
        'function buildSolution() {',
        '  return "Innovation";',
        '}',
        'class Portfolio {',
        '  constructor() {',
        '    this.skills = ["AI", "Web Dev"];',
        '  }',
        '}',
        'const future = await explore();',
        'if (passion && dedication) {',
        '  success = true;',
        '}',
        'export default Ashish;',
        '// Building the future',
        '// One line at a time',
        'async function innovate() {',
        '  return "Tomorrow";',
        '}',
      ];

      for (let i = 0; i < 15; i++) {
        lines.push({
          id: i,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6,
        });
      }

      setCodeLines(lines);
    };

    generateCodeLines();
  }, []);

  return (
    <div className="code-lines">
      {codeLines.map((line) => (
        <div
          key={line.id}
          className="code-line"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            animationDelay: `${line.delay}s`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
};

export default CodeBackground; 