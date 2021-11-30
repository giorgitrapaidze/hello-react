import feature from "../images/icon2.png";
function FeatureTwo() {
  return (
    <div className="featureCard">
      <img src={feature} alt="" />
      <h1 className="FeatureTitle">Components</h1>
      <p>Build Encapsulated components that manage their state</p>
    </div>
  );
}

export default FeatureTwo;
