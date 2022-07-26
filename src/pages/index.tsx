
import Projects from "../comp/Projects";
import Intro from "../comp/Intro";
import Skills from "../comp/Skills";
import Contact from "../comp/Contact";
import Tools from "../comp/Tools";
import NavigationBar from "../comp/NavigationBar";
import dark from "../misc/darkmode";
function App() {
    let d: dark = new dark()
    d.auto()
    d.dark_mode()
  return (
      <div>
          <NavigationBar/>
          <Intro />
        <Skills />
        <Projects />
          <Tools />
        <Contact />
      </div>
  );
}

export default App;

