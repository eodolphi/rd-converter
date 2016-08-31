import React from 'react';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        Convert RD-coordinates to GPS-coordinates and vice versa
      </p>
    </div>
  );
};

export default AboutPage;
