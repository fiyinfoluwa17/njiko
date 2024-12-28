import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer.jsx";
import img1 from './assets/tabler_world.png';
import img2 from './assets/NJIKO FULL POSTER.png'
import './Njiko.css';

function App() {
  const [circles, setCircles] = useState([]);
  
  useEffect(() => {
    // Initialize 12 circles
    const initialCircles = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      group: Math.floor(index / 4), // Divide into 3 groups, 0, 1, 2
      top: Math.random() * 80 + '%',  // Random initial top position
      left: Math.random() * 80 + '%', // Random initial left position//
      right: Math.random() * 80 + '%', // Random initial left position//
    }));
    setCircles(initialCircles);

    // Update the position every second
    const interval = setInterval(() => {
      setCircles(prevCircles =>
        prevCircles.map(circle => ({
          ...circle,
          top: Math.random() * 80 + '%', // Random new top
          left: Math.random() * 80 + '%', // Random new left
          right: Math.random() * 80 + '%', // Random new left
        }))
      );
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="all ">
      <div className="header">
      <div className='njiko-header'>
        <div className='njiko-name'>
          <a href="/">NJIKO</a>
        </div>

        <div className="world-ball">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="njiko-center">
        <h1>NJIKO</h1>
      </div>

      {/* Render 12 circles */}
      <div className="circle-1">
        {circles.map(circle => (
          <div
            key={circle.id}
            className={`circle group-${circle.group}`}
            style={{
              top: circle.top,
              left: circle.left,
              right: circle.right,
            }}
          ></div>
        ))}
      </div>
    </div>
    <div className="hero-section">
    <div className="marquee">
    <h1>
      Preserving the Past, Innovating for the Future. Preserving the Past, Innovating for the Future. Preserving the Past, Innovating for the Future.
    </h1>
  </div>

      <p className="about-njiko">
      ABOUT NJIKO
      </p>
      <p className="intro">
      Njiko, drawn from the Igbo word for "connection," is a design-thinking practice founded by Myles Igwebuike, dedicated to reimagining the cultural heritage of Southeastern Nigeria. By treating heritage data as a dynamic and evolving medium, Njiko uncovers hidden narratives, reframes collective memory, and inspires communities to envision futures where culture remains fluid, adaptive, and transformative. Through inventive research, exploratory dialogue, and speculative practices, Njiko invites dreamers and thinkers alike to imagine new worlds shaped by tradition yet untethered from convention. It is a space for weaving the past into visionary futures, where heritage becomes a foundation for creativity, resilience, and endless possibility.
      </p>
    </div>
    <section className="projects">
      <h1>OUR PROJECTS</h1>
      <p className="digital"><b>Njiko’s Inaugural Digital Symposium themed “Rooted Legacies, Emerging Worlds”</b></p>
      <img src={img2} alt="" />
      <p className="landmark">This landmark event will explore how heritage data, creativity, and storytelling can drive cultural resilience and inspire sustainable economies.  </p>
      <div className="button-container">
      <a href="http://bit.ly/NJIKO2024" target="_blank" className="button">Register</a>
      </div>
    </section>
    <Footer/>

    </section>
    
  );
}

export default App;
