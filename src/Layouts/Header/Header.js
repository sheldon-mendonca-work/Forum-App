import './Header.css';
import HeaderNav from "./HeaderNav";
import HeaderUserCard from "./HeaderUserCard";

const Header = (props) => {
    const { className } = props;

    return <header className={className}>
        <div className="header-content">
            <div>
                <h1 className="forum-heading-1">
                    Forum
                </h1>
                <HeaderNav />
                
            </div>
            <HeaderUserCard />
            </div>
    </header>
}

export default Header;