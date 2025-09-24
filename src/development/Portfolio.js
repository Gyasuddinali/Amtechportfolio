// src/components/Portfolio.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

const projects = [
  {
    title: "React Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    image: "https://via.placeholder.com/400x250.png?text=Weather+App",
    link: "https://your-weather-app-link.com",
  },
  {
    title: "E-commerce Website",
    description: "An online store with full cart and payment features.",
    image: "https://via.placeholder.com/400x250.png?text=E-commerce+Site",
    link: "https://your-ecommerce-site.com",
  },
  {
    title: "Personal Blog",
    description: "A blog built with Gatsby and markdown posts.",
    image: "https://via.placeholder.com/400x250.png?text=Personal+Blog",
    link: "https://your-blog-link.com",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">🌟 My Projects</h2>
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <div className="card project-card h-100 shadow-lg border-0">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-outline-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website 🔗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
