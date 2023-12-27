import "./App.css";
import "./Reset.css";
import { useState } from "react";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Education from "./pages/Education.js";
import MyLife from "./pages/MyLife.js";
import Projects from "./pages/Projects.js";

function App() {
  const [sectionList, setSectionList] = useState([
    <Home />,
    <AboutMe />,
    <Education />,
    <Projects />,
  ]);

  const addSpaceBetweenCaps = (string) => {
    const newString = string.replace(/([A-Z])/g, " $1");
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  };

  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="side-nav-container">
        <ul className="side-nav">
          {sectionList.map((section, index) => (
            <li
              key={index}
              onClick={() => {
                const element = document.getElementById(section.type.name);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {addSpaceBetweenCaps(section.type.name)}
            </li>
          ))}
        </ul>
      </div>

      {/* <button
        className="SomeButton"
        onClick={() => {
          setSectionList([...sectionList, <MyLife />, <Projects />]);
        }}
      >
        Click Me
      </button> */}

      {sectionList.map(
        (section) => section && <div ref={section.pageRef}>{section}</div>
      )}
    </div>
  );
}

export default App;
