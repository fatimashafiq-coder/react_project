import React from 'react';

function Skills({ heading }) {
  const skills = [
    'Communication',
    'Problem-Solving',
    'Collaboration',
    'Empathy'
  ];

  return (
    <>
      <div className="skills-box">
        <h2>{heading}</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Skills;
