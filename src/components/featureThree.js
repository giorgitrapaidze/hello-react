import feature from "../images/icon3.png";
function FeatureThree() {
  return (
    <div className="featureCard">
      <img src={feature} alt="" />
      <h1 className="FeatureTitle">Single-Way</h1>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
  );
}

export default FeatureThree;
