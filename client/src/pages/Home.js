import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-z1g9.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>MyPortfolio</h2>
        <div>
          <span>Home</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>I am Irfan</h1>
        <p>Full Stack Developer</p>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>My Projects</h2>

        <div className="project-container">
          {projects.map((proj) => (
            <div className="card" key={proj._id}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;