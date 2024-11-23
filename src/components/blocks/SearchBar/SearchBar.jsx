import LinkButton from "./../../blocks/LinkButton/LinkButton";
import searchIcon from "./search.svg";
import "./style.scss";

const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="searchbar__btns-wrapper">
                <div className="searchbar__btn">
                    <LinkButton text="Anywhere" />
                </div>
                <div className="searchbar__btn">
                    <LinkButton text="Any week" />
                </div>
                <div className="searchbar__btn">
                    <LinkButton text="Add guests" isActive={true} />
                </div>
            </div>
            <button className="searchbar__btn-search">
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    );
};

export default SearchBar;
