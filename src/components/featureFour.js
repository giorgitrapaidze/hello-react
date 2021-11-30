import feature from "../images/icon4.png";
function FeatureFour() {
  return (
    <div className="featureCard">
      <img src={feature} alt="" />
      <h1 className="FeatureTitle">JSX</h1>
      <p>Statically-typed designed to run on modern browsers.</p>
    </div>
  );
}

export default FeatureFour;
