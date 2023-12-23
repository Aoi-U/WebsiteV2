import "./App.css";
import "./Reset.css";
import SideNav from "./components/SideNav.js";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="side-nav">
        <ul className="side-nav-ul">
          <SideNav page="#Home-page" name="Home" />
          <SideNav page="#About-me-page" name="About Me" />
          <SideNav page="#Education-page" name="Education" />
          <SideNav page="#My-life-page" name="My Life" />
          <SideNav page="#Projects-page" name="Projects" />
        </ul>
      </div>
      <section className="Page" id="Home-page">
        <div className="Home">
          <h1 className="page-title">Home</h1>
        </div>
      </section>
      <section className="Page" id="About-me-page">
        <div className="About-me">
          <h1 className="page-title">About Me</h1>
        </div>
      </section>
      <section className="Page" id="Education-page">
        <div className="Education">
          <h1 className="page-title">Education</h1>
        </div>
      </section>
      <section className="Page" id="My-life-page">
        <div className="My-life">
          <h1 class="page-title">My Life</h1>
        </div>
      </section>
      <section className="Page" id="Projects-page">
        <div className="Projects">
          <h1 className="page-title">Projects</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
