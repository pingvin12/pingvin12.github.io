import Projects from "../comp/Projects";
import Intro from "../comp/Intro";
import Skills from "../comp/Skills";
import Contact from "../comp/Contact";
import Tools from "../comp/Tools";
import NavigationBar from "../comp/NavigationBar";
import AboutMe from "../comp/AboutMe";
import React from "react";
function App() {
    return (
        <div>
            <NavigationBar />
            <Intro />
            <Skills/>
            <Projects/>
            <Tools/>
            <AboutMe/>
            <Contact/>
        </div>
    );
}

export default App;

