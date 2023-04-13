import Book from "./Book";
import "./style.css";
import * as Icon from "react-bootstrap-icons";
import Screen from "./Screen";
const Flower = () => {
  return (
    <div id="flowerContainer">
      <div className="firstShelfContainer">
        <div className="firstShelf">
          <div className="flowerPot"></div>
          <div className="flowerPotNeck"></div>
          <div className="leaf"></div>
          <div className="leafTwo"></div>
          <div className="leafThree"></div>
          <div className="leafFour"></div>
          <div className="leafFive"></div>
          <Book />
        </div>
      </div>
      <div className="secondShelfContainer">
        <div className="secondShelf">
          <div className="cupContainer">
            <Icon.CupHotFill className="cupIcon" />
          </div>
          <div className="bookContainerShelfTwo">
            {/* <Book /> */}
            <Screen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flower;
