import React from "react";
import Members from "../../components/members"
import About from "../../components/about"
import Projects from "../../components/projects"
import Contact from "../../components/contact"
import "./home.css"

const Home = () => {
  return (
    <React.Fragment>
            <div id="section1">
                <div className="sec_content_main_title">
                    <span className="sub-title-head">Loren Ipsun </span>
                    Amec Consetum
                </div>
                <Members />
            </div>
            <div id="section2">
                <div className="sec_content_main_title">
                    <span className="sub-title-head">Loren Ipsun </span>
                    <br/>
                    Amec Consetum
                </div>
                <About />
            </div>
            <div id="section3" className="mb-5">
                <div className="sec_content_main_title">
                    <span className="sub-title-head">Projects work</span>
                    <br/>
                    Our team
                </div>
                <Projects />
            </div>
            <div id="section4">
                <Contact />
            </div>
        </React.Fragment>
  );
};

export default Home