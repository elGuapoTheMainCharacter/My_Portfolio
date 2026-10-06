import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  Code2, Database, Server, ShieldCheck, Terminal, Menu, X,
  ChevronDown
} from "lucide-react";
import "./styles.css";

const github = "https://github.com/elGuapoTheMainCharacter";
const linkedin = "https://www.linkedin.com/in/ziponkefe";
const email = "mailto:isaacnkefe@gmail.com";

const projects = [
  {
    title: "GameStore",
    category: "Full-Stack",
    description:
      "A production-style game store demonstrating end-to-end application development, RESTful APIs, CRUD operations, PostgreSQL persistence and cloud deployment.",
    tech: ["React", ".NET 10", "EF Core", "PostgreSQL", "Docker"],
    live: "https://game-store-full-stack-bwbe.vercel.app/",
    code: "https://github.com/elGuapoTheMainCharacter/GameStore-FullStack",
    featured: true
  },
  {
    title: "Movie Den",
    category: "React",
    description:
      "A movie discovery application consuming external API data with search, dynamic rendering, state management and a responsive interface.",
    tech: ["React", "JavaScript", "API", "CSS"],
    live: "https://elguapothemaincharacter.github.io/MovieDen/",
    code: "https://github.com/elGuapoTheMainCharacter/MovieDen"
  },
  {
    title: "Home Services",
    category: "JavaScript",
    description:
      "A TaskRabbit-style service marketplace concept connecting customers with local service providers. Currently being developed toward a full-stack version.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://elguapothemaincharacter.github.io/home-services/",
    code: "https://github.com/elGuapoTheMainCharacter/home-services"
  },
  {
    title: "Finance Tracker",
    category: "JavaScript",
    description:
      "A practical finance application for recording income and expenses with basic visualisation and an interface designed around everyday usability.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://elguapothemaincharacter.github.io/finance-tracker/",
    code: "https://github.com/elGuapoTheMainCharacter/finance-tracker"
  },
  {
    title: "Tic Tac Toe",
    category: "JavaScript",
    description:
      "A browser game featuring multiple AI difficulty levels and a two-player mode, built around DOM manipulation and game-state logic.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://elguapothemaincharacter.github.io/Tik-Tak-Toe-Js/",
    code: "https://github.com/elGuapoTheMainCharacter/Tik-Tak-Toe-Js"
  },
  {
    title: "Egg Programming Language",
    category: "JavaScript",
    description:
      "A custom mini programming language with a CLI and browser UI, supporting programming concepts such as arithmetic, conditionals, loops and functions.",
    tech: ["JavaScript", "CLI", "Language Design"],
    live: "https://elguapothemaincharacter.github.io/Egg-The-Programming-Language-UI/",
    code: "https://github.com/elGuapoTheMainCharacter/Egg-The-Programming-Languages-CLI"
  },
  {
    title: "Weather App",
    category: "JavaScript",
    description:
      "A live weather application that retrieves and displays current weather information through an external API.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    live: "https://github.com/elGuapoTheMainCharacter/weather-app",
    code: "https://github.com/elGuapoTheMainCharacter/weather-app"
  },
  {
    title: "Beautiful Clock",
    category: "JavaScript",
    description:
      "An animated digital clock focused on clean interface design and real-time browser updates.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://github.com/elGuapoTheMainCharacter/beautiful-clock",
    code: "https://github.com/elGuapoTheMainCharacter/beautiful-clock"
  },
  {
    title: "Java Mini Projects",
    category: "Java",
    description:
      "A collection of foundational Java projects covering game logic, randomisation, input handling, loops and problem solving.",
    tech: ["Java", "OOP", "Algorithms"],
    code: "https://github.com/elGuapoTheMainCharacter/Tic-tac-toe"
  },
  {
    title: "Day of the Year Calculator",
    category: "C#",
    description:
      "A small C# project that calculates the day number within a year from a supplied date.",
    tech: ["C#", ".NET"],
    code: "https://github.com/elGuapoTheMainCharacter/day-number"
  }
];

const skills = [
  ["Frontend", "React.js", "Vite", "JavaScript", "HTML5", "CSS3"],
  ["Backend", "C#", "ASP.NET Core", "Entity Framework Core", "REST APIs"],
  ["Data", "PostgreSQL", "MySQL", "SQLite", "SQL"],
  ["Cloud & Tools", "Docker", "Git", "GitHub", "Render", "Vercel", "Linux CLI"],
  ["Other", "Java", "Python", "PHP", "C++", "WordPress"]
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Full-Stack", "React", "JavaScript", "Java", "C#"];
  const visibleProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          ZN<span>.</span>
        </a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a
            className="nav-github"
            href="/Zipo-Nkefe-CV.pdf"
            download
          >
            Download CV <Download size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER · SOUTH AFRICA</p>
            <h1>Building practical software with <span>React & .NET.</span></h1>
            <p className="hero-text">
              I’m <strong>Zipo Siposenkosi Nkefe
                </strong>, a self-directed Full-Stack Developer
              focused on building useful, reliable web applications and growing
              into a strong software engineer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>

              <a
                className="button secondary"
                href="/Zipo-Nkefe-CV.pdf"
                download
                >
                <Download size={18} /> Download CV
              </a>

              <a
                className="button secondary"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
              <Github size={18} /> GitHub
              </a>
            </div>
            <div className="quick-links">
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href={email}><Mail size={16} /> Email me</a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <img src="/profile.jpg" alt="Zipo Nkefe" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <div className="photo-placeholder">
                <div className="avatar-mark">ZN</div>
                <strong>Add your photo</strong>
                <span>Place your image at<br /><code>public/profile.jpg</code></span>
              </div>
            </div>
            <div className="status"><span></span> Open to junior & internship opportunities</div>
          </div>
        </section>

        <section id="about" className="section split">
          <div>
            <p className="eyebrow">01 · ABOUT</p>
            <h2>A developer who learns by building.</h2>
          </div>
          <div className="about-copy">
            <p>
              I build end-to-end web applications using React, ASP.NET Core,
              PostgreSQL and modern development tools. My development journey
              has been strongly self-directed, with project-based learning at
              the centre of how I improve.
            </p>
            <p>
              I enjoy debugging, solving problems and understanding how systems
              work behind the interface. Alongside development, my experience
              teaching Information Technology has strengthened my communication,
              patience, mentoring and ability to explain technical concepts.
            </p>
            <p>
              I’m looking for an internship, junior or entry-level software
              development opportunity where I can contribute while continuing
              to grow in a professional engineering environment.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 · STACK</p>
              <h2>Tools I work with.</h2>
            </div>
            <p className="muted">A practical stack focused on modern web development.</p>
          </div>
          <div className="skill-grid">
            {skills.map(([title, ...items]) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon">
                  {title === "Frontend" ? <Code2 /> :
                   title === "Backend" ? <Server /> :
                   title === "Data" ? <Database /> :
                   title === "Cloud & Tools" ? <Terminal /> : <ShieldCheck />}
                </div>
                <h3>{title}</h3>
                <div className="tags">{items.map((x) => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 · SELECTED WORK</p>
              <h2>Projects that show how I think.</h2>
            </div>
            <p className="muted">Explore the live work or inspect the source on GitHub.</p>
          </div>

          <div className="filters">
            {categories.map((cat) => (
              <button key={cat} className={filter === cat ? "filter active" : "filter"} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className={project.featured ? "project featured" : "project"} key={project.title}>
                <div className="project-top">
                  <span className="project-number">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tech.map((x) => <span key={x}>{x}</span>)}</div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live project <ExternalLink size={15} />
                    </a>
                  )}
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Source <Github size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section split experience">
          <div>
            <p className="eyebrow">04 · EXPERIENCE</p>
            <h2>Technology, teaching & problem solving.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">CURRENT</span>
              <h3>Information Technology Teacher</h3>
              <p>Teach programming fundamentals, algorithms, computer systems and software development principles while creating practical exercises and assessments.</p>
            </div>
            <div className="timeline-item">
              <span className="date">FEB 2026 — MAY 2026</span>
              <h3>Grade 12 Mathematics Tutor</h3>
              <p>Provided academic tutoring and problem-solving support, strengthening learners’ analytical and mathematical reasoning skills.</p>
            </div>
            <div className="timeline-item">
              <span className="date">2024</span>
              <h3>Transformation Officer · Wits Mathematical Sciences Student Council</h3>
              <p>Supported students, coordinated initiatives and assisted with communication, reporting and administrative coordination.</p>
            </div>
          </div>
        </section>

        <section className="section learning">
          <div className="learning-card">
            <div>
              <p className="eyebrow">CURRENTLY LEARNING</p>
              <h2>Going deeper into the .NET ecosystem.</h2>
              <p>
                Authentication & authorization, .NET Identity, JWT, scalable
                ASP.NET Core APIs, advanced React patterns, SQL/database design
                and WordPress development.
              </p>
            </div>
            <div className="learning-badge">.NET 10</div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">05 · CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>
            I’m open to internship, junior, entry-level and freelance
            opportunities. If you’re a recruiter or hiring manager, I’d be
            happy to discuss how I can contribute.
          </p>
          <div className="contact-actions">
            <a className="button primary" href={email}><Mail size={18} /> Get in touch</a>
            <a className="button secondary" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a className="button secondary" href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Zipo Siposenkosi Nkefe</span>
        <a href="#home">Back to top <ChevronDown size={15} className="rotate" /></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
