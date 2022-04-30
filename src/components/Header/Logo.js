import { Link } from "react-router-dom";
import brainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";

export default function Logo() {
  return (
    <div className="header__logo-container">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-image" src={brainFlixLogo} alt="logo" />
      </Link>
    </div>
  );
}
