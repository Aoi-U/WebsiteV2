import "./App.css";
import "./Reset.css";
import SideNav from "./components/SideNav.js";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>

      <section className="Front-page">
        <div className="side-nav">
          <SideNav />
        </div>
      </section>
      <section className="About-me">
        <h1>About Me</h1>
      </section>
    </div>
  );
}

export default App;
