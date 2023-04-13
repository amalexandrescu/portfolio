import "./style.css";

const Lamp = () => {
  return (
    <div id="lampContainer">
      <div class="lampWire"></div>
      <div className="lampWireEnd"></div>
      <div className="firstLampPart">
        <div className="lampLineDesign"></div>
      </div>
      <div className="secondLampPart"></div>
      <div className="lampBottomBorder"></div>
      <div className="lampBulb"></div>
    </div>
  );
};

export default Lamp;
