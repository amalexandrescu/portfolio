import "./style.css";
import * as Icon from "react-bootstrap-icons";

const Screen = () => {
  return (
    <div id="screenContainer">
      <div className="screenBase"></div>
      <div className="screenBaseTwo"></div>
      <div className="actualScreen">
        <div className="screen">
          <div className="screenBorder">
            <div className="internalScreen">
              <div className="screenIconDocumentContainer">
                <Icon.FileTextFill className="documentIcon" />
              </div>
              <div className="screenCardDocumentContainer">
                <Icon.CardText className="cardDocumentIcon" />
                <Icon.CardText className="cardDocumentIconTwo" />
              </div>
            </div>
          </div>
        </div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default Screen;
