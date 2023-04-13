import "./App.css";
import AboutSection from "./components/about/AboutSection";
import ContactMe from "./components/contact/ContactMe";
import Book from "./components/design/Book";
import Flower from "./components/design/Flower";
import Lamp from "./components/design/Lamp";
import CustomNavbar from "./components/navbar/CustomNavbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Lamp />
      <Flower />
      {/* <Book /> */}
      <CustomNavbar />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
