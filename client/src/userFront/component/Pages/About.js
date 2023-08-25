import React from 'react';
import Name from '../shop/Name';
import BannerIcons from '../shop/BannerIcons';

// You can optionally create a CSS module for this component.
// For demonstration, I'll continue using inline styles.

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  },
  header: {
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontSize: '24px'
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '20px 0'
  },
  teamTitle: {
    fontSize: '20px',
    marginTop: '30px'
  }
};

function About() {
  return (
    <div>
      <BannerIcons />
      <div style={styles.container}>
      <Name />

      <h1 style={styles.header}>About Us</h1>

      <p style={styles.paragraph}>
        Welcome to [Your Company Name]! We're thrilled to have you here.
      </p>

      <p style={styles.paragraph}>
        Since our inception in [Year of Establishment], we've been committed to [Brief about the mission]. Our dedicated team ensures that [specific quality].
      </p>

      <p style={styles.paragraph}>
        Our core beliefs revolve around community, trust, and unmatched value. These tenets guide us as we continue to serve and evolve.
      </p>

      <p style={styles.paragraph}>
        Thank you for choosing [Your Company Name]. We're honored to accompany you on this journey.
      </p>

      <h2 style={styles.teamTitle}>Meet Our Team</h2>
      <p style={styles.paragraph}>
        Comprising individuals with a shared passion for [specific domain], our team boasts expertise in [specific departments]. Day and night, we're here to ensure you receive the best possible experience.
      </p>
    </div>
    </div>
  );
}

export default About;
