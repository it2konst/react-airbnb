import "./style.scss";

// eslint-disable-next-line react/prop-types
const LinkButton = ({ text, isActive, icon }) => {
    return (
        <a href="#" className={isActive ? "btn btn--active" : "btn"}>
            {icon && <img src={icon} alt="Icon" />}
            {text}
        </a>
    );
};

export default LinkButton;
