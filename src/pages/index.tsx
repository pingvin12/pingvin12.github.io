
import Projects from "../comp/Projects";
import Intro from "../comp/Intro";
import Skills from "../comp/Skills";
import Contact from "../comp/Contact";
import Tools from "../comp/Tools";
import NavigationBar from "../comp/NavigationBar";
import {useRef} from "react";
import AboutMe from "../comp/AboutMe";
function App() {
    const skillsref = useRef();
  return (
      <div>
          <NavigationBar/>
          <Intro scrollableref={skillsref} />
        <Skills ref={skillsref} />
        <Projects />
          <Tools />
          <AboutMe />
        <Contact />
      </div>
  );
}

export default App;

