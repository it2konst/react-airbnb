import "./style.scss";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">LOGO</div>
                    <div className="header__search">search</div>
                    <div className="header__user">user</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
