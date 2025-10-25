import { useState } from 'react';

export default function About() {
  const cardStyle = {
    flex: '1 1 200px',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  };

  const skills = [
    { emoji: '🐍', text: 'Python' },
    { emoji: '💻', text: 'Full-stack: React, Django, FastAPI, MySQL' },
    { emoji: '🐳', text: 'Docker for deployment' },
    { emoji: '🤖', text: 'LLMs: LangChain, RAG, agentic frameworks' },
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>About Me</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map((skill, idx) => {
          const [hovered, setHovered] = useState(false);
          return (
            <div
              key={idx}
              style={{ ...cardStyle, ...(hovered ? cardHoverStyle : {}) }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>{skill.emoji}</span>
              <span>{skill.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
