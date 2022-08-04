import NavigationBar from "../comp/NavigationBar";
import Intro from "../comp/Intro";
import Skills from "../comp/Skills";
import Projects from "../comp/Projects";
import Tools from "../comp/Tools";
import AboutMe from "../comp/AboutMe";
import Contact from "../comp/Contact";
import React from "react";

export default function Home() {
    return (
        <div>
            <NavigationBar/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Tools/>
            <AboutMe/>
            <Contact/>
        </div>
    )
}