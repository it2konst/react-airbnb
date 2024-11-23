import logoImage from "./logo.svg";
import "./style.scss";

const Logo = () => {
    return (
        <a href="#">
            <img src={logoImage} alt="Logo" />
        </a>
    );
};

export default Logo;
