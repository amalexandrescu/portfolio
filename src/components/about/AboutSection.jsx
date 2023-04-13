import "./style.css";

const AboutSection = () => {
  return (
    <div id="aboutSection">
      <div id="aboutSectionLeft"></div>
      <div id="aboutSectionRight">
        <div id="introContainer">
          <div className="introduction">
            <h1>Alexandra Alexandrescu</h1>
            <h2>FullStack Developer</h2>
            <div className="aboutContent">
              I like creating <span>fun</span> & interactive{" "}
              <span>projects</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
