import React from "react";
// import Header from "./components/header";
import "./App.css";
import GITHUB_LOGO from "./components/GitHub-Mark-Light-120px-plus.png";
import LINKEDIN_LOGO from "./components/linkedin-128.png";
import GLOBE_LOGO from "./components/globe.png";

function App() {
  // const [darkMode, setDarkMode] = React.useState(false);

  // React.useEffect(() => {
  //   darkMode
  //     ? document.body.classList.add("dark")
  //     : document.body.classList.remove("dark");
  // }, [darkMode]);

  return (
    <>
      <div className="fullsize">
        {/* <Header /> */}
        <div className="container">
          <div name="presentation">
            <h1 className="title">PORTFOLIO</h1>
            <p className="subtitle">by Matias</p>
          </div>
          <div className="container-2">
            <a href="http://corndog.io/" className="btn-text">
              {/* <img src="chevron-down-solid.svg" alt="scroll down button" /> */}
              <p className="arrow-down">&#5167;</p>
              Scroll
            </a>
          </div>
        </div>
      </div>
      <div className="fullsize">
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
            <div className="list__social">
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
                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn-dark"
                >
                  Dark Mode
                </button> */}
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
      {/* PROJECTS */}
      <div className="fullsize">
        <div className="container">
          <div className="presentation-projects">
            <h1 className="title">MY PROJECTS</h1>
            <div className="black">
              <br />
            </div>
            <div className="list-container">
              <div className="list__social padding">
                <div className="list__social-content">
                  <p>XKCD</p>
                </div>
                <div className="list__social-content">
                  <a href="https://github.com/fatso1000/xkcd-react">
                    <img
                      className="list__social-img"
                      src={GITHUB_LOGO}
                      alt="github logo"
                    ></img>
                  </a>
                </div>
                <div className="list__social-content">
                  <a href="https://xkcd-heroku.herokuapp.com/">
                    <img
                      className="list__social-img"
                      src={GLOBE_LOGO}
                      alt="globe logo"
                    ></img>
                  </a>
                </div>
              </div>
              {/* <ul>
                <li>
                  <a className="subtitle">
                    <bold>xkcd project</bold> - Front-end project
                  </a>
                </li>
                <li>
                  <p className="subtitle">
                    <bold>jodapp project</bold> - Back-end project
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div className="fullsize">
        <div className="container">
          <div className="presentation-projects">
            <h1 className="title">MY PROJECTS</h1>
            <div className="list-container">
              <ul>
                <li>
                  <p className="subtitle">
                    <bold>xkcd project</bold> - Front-end project
                  </p>
                </li>
                <li>
                  <p className="subtitle">
                    <bold>jodapp project</bold> - Back-end project
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
