import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Technology() {
  const frontend = [
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const backend = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const tools = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const renderTechList = (title, items, animation = "fade-up") => (
    <div className="col-md-4 mb-4" data-aos={animation}>
      <div className="card h-100 shadow-sm tech-card">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
<ul className="list-group list-group-flush">
  {items.map((tech, idx) => (
    <li key={idx} className="list-group-item d-flex align-items-center">
      <img
        src={tech.icon}
        alt={tech.name}
        style={{ width: "24px", height: "24px", marginRight: "10px" }}
      />
      {tech.name}
    </li>
  ))}
</ul>

        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 display-5 fw-bold"  style={{color:'#d4af37'}}>
        Our Technology
      </h2>
      <p className="text-center text-muted mb-5">
        We use modern tools to build fast, scalable, and secure web applications.
      </p>

      <div className="row">
        {renderTechList("Frontend", frontend, "zoom-in")}
        {renderTechList("Backend", backend, "fade-up")}
        {renderTechList("Tools & Platforms", tools, "flip-left")}
      </div>
    </div>
  );
}
