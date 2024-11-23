import Account from "./../../blocks/Account/Account";
import LinkButton from "./../../blocks/LinkButton/LinkButton";
import globeIcon from "./globe.svg";
import "./style.scss";

const UserMenu = () => {
    return (
        <div className="user-menu">
            <div className="user-menu__home">
                <LinkButton text="Airbnb your home" />
            </div>
            <div className="user-menu__local">
                <LinkButton icon={globeIcon} />
            </div>
            <div className="user-menu__user">
                <Account />
            </div>
        </div>
    );
};

export default UserMenu;
