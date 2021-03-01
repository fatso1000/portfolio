import React from "react";
// import Header from "./components/header";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

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
            <a href="https://puginarug.com/" className="btn-text">
              <img src="chevron-down-solid.svg" alt="scroll down button" />
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
            <button onClick={() => setDarkMode(!darkMode)} className="btn-dark">
              Dark Mode
            </button>
          </div>
        </div>
      </div>
      <div className="fullsize">
        <div className="container">
          <div className="presentation-projects">
            <h1 className="title">SOME PROJECTS</h1>
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
