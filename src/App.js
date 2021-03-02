import React from "react";
import { Link } from "react-scroll";
import Header from "./components/header";
import "./App.css";
import GITHUB_LOGO from "./components/GitHub-Mark-Light-120px-plus.png";
import LINKEDIN_LOGO from "./components/linkedin-128.png";
import GLOBE_LOGO from "./components/globe.png";

function App() {
  return (
    <>
      <Header />
      <div className="fullsize">
        {/* <Header /> */}
        <div className="container">
          <div name="presentation">
            <h1 className="title">PORTFOLIO</h1>
            <p className="subtitle">by Matias</p>
          </div>
          <div className="container-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="btn-text"
            >
              <p className="arrow-down">&#5167;</p>
              Scroll
            </Link>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div className="fullsize" id="about">
        <div className="container">
          <div className="presentation">
            <h1 className="title">WHO I AM</h1>
            <p className="subtitle">
              My name is Matias and i'm a <bold>Full-Stack Developer</bold>.
              Also i'm 19 years old and currently living in Buenos Aires,
              Argentina. I've a degree as <bold>Programming Technician</bold>{" "}
              and currently i'm studying on{" "}
              <bold>
                <a href="https://www.soyhenry.com/" className="hyperlink">
                  Henry
                </a>
              </bold>
              .
            </p>
            <div className="list__social align-left">
              <div className="list__social-content">
                <a
                  href="https://www.linkedin.com/in/matias-benitez81/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="list__social-img"
                    src={LINKEDIN_LOGO}
                    alt="linkedin logo"
                  ></img>
                </a>
              </div>
              <div className="list__social-content">
                <a
                  href="https://github.com/fatso1000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="list__social-img"
                    src={GITHUB_LOGO}
                    alt="github logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="fullsize" id="skills">
        <div className="container">
          <div className="presentation-projects presentation">
            <h1 className="title">SKILLS</h1>
            <div className="content-bg margin">
              <div className="list__skills">
                <div className="list__skills-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>Javascript</bold>
                  </p>
                </div>
                <div className="skills__container box-sizing">
                  <div className="skills javascript">
                    <bold>100%</bold>
                  </div>
                </div>
              </div>
              <div className="list__skills">
                <div className="list__skills-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>Typescript</bold>
                  </p>
                </div>
                <div className="skills__container box-sizing">
                  <div className="skills typescript">
                    <bold>50%</bold>
                  </div>
                </div>
              </div>
              <div className="list__skills">
                <div className="list__skills-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>React</bold>
                  </p>
                </div>
                <div className="skills__container box-sizing">
                  <div className="skills react">
                    <bold>70%</bold>
                  </div>
                </div>
              </div>
              <div className="list__skills">
                <div className="list__skills-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>NodeJs</bold>
                  </p>
                </div>
                <div className="skills__container box-sizing">
                  <div className="skills nodejs">
                    <bold>80%</bold>
                  </div>
                </div>
              </div>
              <div className="list__skills">
                <div className="list__skills-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>API</bold>
                  </p>
                </div>
                <div className="skills__container box-sizing">
                  <div className="skills javascript">
                    <bold>100%</bold>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROJECTS */}
      <div className="fullsize" id="projects">
        <div className="container">
          <div className="presentation-projects">
            <h1 className="title">PROJECTS</h1>
            <div className="list-container content-bg margin">
              <div className="list__social">
                <div className="list__social-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>XKCD</bold>
                  </p>
                </div>
                <div className="list__social-content">
                  <a
                    href="https://github.com/fatso1000/xkcd-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="list__social-img"
                      src={GITHUB_LOGO}
                      alt="github logo"
                    ></img>
                  </a>
                </div>
                <div className="list__social-content">
                  <a
                    href="https://xkcd-heroku.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="list__social-img"
                      src={GLOBE_LOGO}
                      alt="globe logo"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="list-container content-bg margin">
              <div className="list__social">
                <div className="list__social-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>Henry project</bold>
                  </p>
                </div>
                <div className="list__social-content">
                  <a
                    href="https://github.com/fatso1000/individual-project-henry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="list__social-img"
                      src={GITHUB_LOGO}
                      alt="github logo"
                    ></img>
                  </a>
                </div>
                <div className="list__social-content">
                  <a
                    href="https://pi-videogames.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="list__social-img"
                      src={GLOBE_LOGO}
                      alt="globe logo"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="list-container content-bg margin">
              <div className="list__social">
                <div className="list__social-content">
                  <p className="subtitle margin-0 no-italic">
                    <bold>Library Online</bold>
                  </p>
                </div>
                <div className="list__social-content">
                  <a
                    href="https://github.com/fatso1000/biblioteca-virtual"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="list__social-img"
                      src={GITHUB_LOGO}
                      alt="github logo"
                    ></img>
                  </a>
                </div>
                <div className="list__social-content">
                  <div>
                    <img
                      className="list__social-img disabled"
                      src={GLOBE_LOGO}
                      alt="globe logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
