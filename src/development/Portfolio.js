// src/components/Portfolio.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

const projects = [
  {
    title: "Laptop Repair",
    description: "One-Stop Solution To All Your IT Needs.",
    image: "https://sdtechsolution.com/wp-content/uploads/2023/11/Laptop-Repair-Services-In-Noida.jpg",
    link: "https://sdtechsolution.com/",
  },
  {
    title: "Laptop,Pc's Software,Amc Hardware Solution in Noida",
    description: "We provide a variety of services, such as computer maintenance, AMC, laptop restoration, and software solutions at home, to companies of all sizes as well as to professionals working alone..",
    image:"https://sdtechsolution.in/assets/TECHNICIAN-Pu8CGwZW.png",
    link: "https://sdtechsolution.in/",
  },
  {
    title: "Currency Exchange Services",
    description: "Reliable currency exchange solutions tailored for your needs in Noida",
    image: "https://images.unsplash.com/photo-1568092715422-fff34eabbe84?auto=format&fit=crop&w=720&h=492",
    link: "https://flyerinnforex.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <h2 className="text-center pt-5  fw-bold">AMTECH Portfolio</h2>
        <p className="text-center mb-4 text-muted">
  Welcome to my portfolio! Here are some of the projects I've been working on recently.
  Each one showcases different skills in front-end, back-end, and UI/UX design.
</p>
        <h2 className="text-center  mb-5 fw-bold">We done Projects</h2>

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
