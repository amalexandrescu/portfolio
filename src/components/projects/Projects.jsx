import "./style.css";
import * as Icon from "react-bootstrap-icons";

const Projects = () => {
  return (
    <div id="projectsContainer">
      <div className="internalProjectsContainer">
        <h2>My projects.</h2>
        <div className="firstProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Whats App Clone</h3>
            <div className="projectTechnologiesUsed">
              The project is build with React, Redux, MondoDB, ExpressJS &
              socket.io.
            </div>
            <div>
              Users are able to sing up, log in, edit their profile information
              and chat in real time due to socket.io implementation.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://fs0422-build-week-5-whatsapp-fe.vercel.app/auth/login",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="secondProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">LinkedIn Clone</h3>
            <div className="projectTechnologiesUsed">
              The project is build with React, Redux, MondoDB & ExpressJS.
            </div>
            <div>
              Users are able to edit their profile details, create posts and
              comments for them. You can also download the CV of the logged in
              user.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open("https://linked-in-front.vercel.app/", "_blank");
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="thirdProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Spotify Clone</h3>
            <div className="projectTechnologiesUsed">
              The project is build with React & Redux.
            </div>
            <div>
              You can search for artists and add songs to favorites. You can
              also play music.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://spotify-clone-azure-rho.vercel.app/",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="fourthProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Epicode Benchmark Clone</h3>
            <div className="projectTechnologiesUsed">
              The project is build with vanilla JS.
            </div>
            <div>
              You are taking a benchmark and you have to answer the questions.
              Each question has a timer based on the difficulty of the question.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://epicode-benchmark.vercel.app/welcome.html",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="fifthProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Netflix Clone</h3>
            <div className="projectTechnologiesUsed">
              The project is build with React & MongoDB.
            </div>
            <div>
              Netflix visual clone. We are storing the movies using MongoDB.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://epicode-week14-fe-netflix-apis.vercel.app/",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="sixthProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Weather Project</h3>
            <div className="projectTechnologiesUsed">
              The project is build with React.
            </div>
            <div>
              Weather application where you can search for a certain town to
              check the wheather. You can also add the cities to favorites.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://epicode-week10-weather-project.vercel.app/",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="seventhProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Team Generator</h3>
            <div className="projectTechnologiesUsed">
              The project is build with vanilla JS.
            </div>
            <div>
              You can generate different number of teams and persons. The
              created persons will be assigned randomly to the teams.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open(
                  "https://team-generator-omega.vercel.app/",
                  "_blank"
                );
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
        <div className="eigthProject">
          <div className="topProjectScreen">
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
            <div className="dotProjectScreen"></div>
          </div>
          <div className="projectContent">
            <h3 className="projectTitle">Bingo game</h3>
            <div className="projectTechnologiesUsed">
              The project is build with vanilla JS.
            </div>
            <div>
              You can generate different number of boards. Then you can pick
              numbers and the boards will change color if the picked number
              matches the number from the board.
            </div>
            <div
              className="openProjectSection"
              onClick={() => {
                window.open("https://bingo-mauve.vercel.app/", "_blank");
              }}
            >
              <div className="openProject">Open project</div>
              <Icon.CaretRightFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
