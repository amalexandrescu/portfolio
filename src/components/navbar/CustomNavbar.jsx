import "./style.css";

const CustomNavbar = () => {
  return (
    <div id="navbar">
      <div id="myLogo">alexandra</div>
      <div id="navbarMenu">
        <a href="#aboutSection">
          <span>about</span>
        </a>
        <a href="#skillsContainer">
          <span>skills</span>
        </a>
        <a href="#projectsContainer">
          <span>projects</span>
        </a>
        <a href="#contactMeContainer">
          <span>contact me</span>
        </a>
      </div>
    </div>
  );
};

export default CustomNavbar;
