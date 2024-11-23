import UserMenu from "./../../blocks/UserMenu/UserMenu";
import Logo from "./../../blocks/Logo/Logo";
import SearchBar from "./../../blocks/SearchBar/SearchBar";
import "./style.scss";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__search">
                        <SearchBar />
                    </div>
                    <div className="header__user">
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
