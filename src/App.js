import "./App.css";
import "./Reset.css";
import { SideNav } from "./components/SideNav.js";
import { PageBase } from "./components/PageBase.js";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="side-nav-container">
        <div className="side-nav">
          <SideNav page="#home-page" name="Home" />
          <SideNav page="#about-me-page" name="About Me" />
          <SideNav page="#education-page" name="Education" />
          <SideNav page="#my-life-page" name="My Life" />
          <SideNav page="#projects-page" name="Projects" />
        </div>
      </div>
      <section className="page" id="home-page">
        <img src={require('./images/p1.jpg')} alt='Page 1' className="page-img" />
        <PageBase pageTitle='Home' />
      </section>
      <section className="page" id="about-me-page">
        <img src={require('./images/p2.jpg')} alt='Page 2' className="page-img" />
        <PageBase pageTitle='About Me' />
      </section>
      <section className="page" id="education-page">
        <img src={require('./images/p3.jpg')} alt='Page 3' className="page-img" />
        <PageBase pageTitle='Education' />
      </section>
      <section className="page" id="my-life-page">
        <img src={require('./images/p4.jpg')} alt='Page 4' className="page-img" />
        <PageBase pageTitle='My Life' />
      </section>
      <section className="page" id="projects-page">
        <img src={require('./images/p5.jpg')} alt='Page 5' className="page-img" />
        <PageBase pageTitle='Projects' />
      </section>
    </div>
  );
}

export default App;
