import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";
import project5 from "./img/project5.jpg";

const App = () => {
  const projects = [
    {
      id: project1,
      name: "App",
      semi: "Youtube Video Downloader",
      link: "https://github.com/ncoderlk/youtubeDownloader",
    },
    {
      id: project2,
      name: "Web",
      semi: "Anime Details Site",
      link: "https://github.com/ncoderlk/animelake",
    },
    {
      id: project3,
      name: "Naturally",
      semi: "Food Site",
      link: "https://github.com/ncoderlk/e-commerce",
    },
    {
      id: project4,
      name: "App",
      semi: "Calculator",
      link: "https://github.com/ncoderlk/calculator",
    },
    {
      id: project5,
      name: "Web",
      semi: "My Portfolio",
      link: "https://github.com/ncoderlk/sithika",
    },
  ];
  const skills = [
    // Frontend Skills
    {
      name: "Frontend Developer",
      content: [
        [
          {
            skill: "HTML",
            level: "Advanced",
          },
          {
            skill: "CSS",
            level: "Advanced",
          },
          {
            skill: "JavaScript",
            level: "Advanced",
          },
        ],
        [
          {
            skill: "React",
            level: "Intermediate",
          },
          {
            skill: "Tailwind",
            level: "Advanced",
          },
          {
            skill: "Git",
            level: "Basic",
          },
        ],
      ],
    },
    // Backend Skills
    {
      name: "Backend Developer",
      content: [
        [
          {
            skill: "Node Js",
            level: "Intermediate",
          },
          {
            skill: "Python",
            level: "Intermediate",
          },
          {
            skill: "Nest Js",
            level: "Basic",
          },
        ],
        [
          {
            skill: "MySQL",
            level: "Basic",
          },
          {
            skill: "GoLang",
            level: "Basic",
          },
          {
            skill: "Firebase",
            level: "Basic",
          },
        ],
      ],
    },
  ];
  return (
    <main className="main">
      <section className="filters container">
        <ul className="filters-content">
          <button
            id="projectsBtn"
            className="filters-button active-btn"
            onClick={() => {
              let y = document.getElementById("projects");
              if (!y.classList.contains("active")) {
                document.getElementById("skills").classList.remove("active");
                document.getElementById("skills").classList.add("not-active");
                y.classList.add("active");
                y.classList.remove("not-active");
                document
                  .getElementById("skillsBtn")
                  .classList.remove("active-btn");
                document
                  .getElementById("projectsBtn")
                  .classList.add("active-btn");
              }
            }}
          >
            Projects
          </button>
          <button
            id="skillsBtn"
            className="filters-button"
            onClick={() => {
              let x = document.getElementById("skills");
              if (!x.classList.contains("active")) {
                document.getElementById("projects").classList.remove("active");
                document.getElementById("projects").classList.add("not-active");
                x.classList.add("active");
                x.classList.remove("not-active");
                document
                  .getElementById("skillsBtn")
                  .classList.add("active-btn");
                document
                  .getElementById("projectsBtn")
                  .classList.remove("active-btn");
              }
            }}
          >
            Skills
          </button>
        </ul>
        <div className="filters-sections">
          <div className="projects-content active grid" id="projects">
            {projects.map((project) => (
              <article className="projects-card">
                <img src={project.id} className="projects-img" />
                <div className="projects-modal">
                  <div>
                    <span className="projects-subtitle">{project.semi}</span>
                    <h3 className="projects-title">{project.name}</h3>
                    <a
                      href={project.link}
                      target={"_blank"}
                      className="projects-button button button-small"
                    >
                      <i className="ri-link"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="skills-content not-active grid" id="skills">
            {
              <div className="skills-area">
                <h3 className="skills-title">{skills[0].name}</h3>
                <div className="skills-box">
                  <div className="skills-group">
                    {skills[0].content[0].map((skill) => (
                      <div className="skills-data">
                        <i className="ri-checkbox-circle-line"></i>
                        <div>
                          <h3 className="skills-name">{skill.skill}</h3>
                          <span className="skills-level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="skills-group">
                    {skills[0].content[1].map((skill) => (
                      <div className="skills-data">
                        <i className="ri-checkbox-circle-line"></i>
                        <div>
                          <h3 className="skills-name">{skill.skill}</h3>
                          <span className="skills-level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
            {
              <div className="skills-area">
                <h3 className="skills-title">{skills[1].name}</h3>
                <div className="skills-box">
                  <div className="skills-group">
                    {skills[1].content[0].map((skill) => (
                      <div className="skills-data">
                        <i className="ri-checkbox-circle-line"></i>
                        <div>
                          <h3 className="skills-name">{skill.skill}</h3>
                          <span className="skills-level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="skills-group">
                    {skills[1].content[1].map((skill) => (
                      <div className="skills-data">
                        <i className="ri-checkbox-circle-line"></i>
                        <div>
                          <h3 className="skills-name">{skill.skill}</h3>
                          <span className="skills-level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
