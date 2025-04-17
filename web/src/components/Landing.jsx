import landingLogo from "../images/landing-logo-transparent.png";
import foodBg from "../images/landing-bgnd.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  const backgroundStyle = {
    backgroundImage: `url(${foodBg})`,
  };

  return (
    <div className="landing" style={backgroundStyle}>
      <div className="landing_logo">
        <img
          className="landing_logo_src"
          src={landingLogo}
          alt="logo EasyMeal"
        />
      </div>
      <p className="landing_text">Diseña tus menús semanales</p>
      <Link className="landing_link" to="/start">
        Comenzar
      </Link>
    </div>
  );
};

export default Landing;
