import React from 'react';
import Name from '../Products/Layout/Name';
import BannerIcons from '../Products/Layout/BannerIcons';

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
          Welcome to Furry Feet Friends! We're thrilled to have you here.
        </p>
        <p style={styles.paragraph}>
          Since our inception in 2003, we've been on a unique journey. Our company took root at the UT coding bootcamp, where we developed an innovative Ecommerce platform with a primary focus on showcasing products in a 3D perspective.
        </p>
        <p style={styles.paragraph}>
          Our core beliefs revolve around community, trust, and unmatched value. These tenets guide us as we continue to serve and evolve.
        </p>
        <p style={styles.paragraph}>
          Thank you for choosing Furry Feet Friends. We're honored to accompany you on this journey.
        </p>
      
      </div>
    </div>
  );
}

export default About;
