import feature from "../images/icon1.png";
function FeatureOne() {
  return (
    <div className="featureCard">
      <img src={feature} alt="" />
      <h1 className="FeatureTitle">Declarative</h1>
      <p>React make it painless to create interactive UIs</p>
    </div>
  );
}

export default FeatureOne;
