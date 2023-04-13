import "./style.css";
import * as Icon from "react-bootstrap-icons";

const ContactMe = () => {
  return (
    <div id="contactMeContainer">
      <div className="internalContactMeContainer">
        <div className="whiteContainer">
          <div className="rightContainer">
            <img
              src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681308437/portofolio/avatar_cd2pqj.webp"
              alt="photo of me"
            />
          </div>
          <div className="leftContainer">
            <h2>I'm always up for a chat.</h2>
            <p>Please contact me on my LinkedIn account.</p>
            <p>And for more projects, visit my github account.</p>
            <div>
              <Icon.Linkedin
                className="linkedInIcon"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/alexandra-alexandrescu/",
                    "_blank"
                  );
                }}
              />
              <Icon.Github
                className="linkedInIcon"
                onClick={() => {
                  window.open("https://github.com/amalexandrescu", "_blank");
                }}
              />
            </div>
          </div>
          <h1 className="heyThereContactMe">Hey there!</h1>
        </div>
      </div>
      <div
        className="goOnTop"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Go on Top
      </div>
    </div>
  );
};

export default ContactMe;
