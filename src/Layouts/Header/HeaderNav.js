import './HeaderNav.css'
import { BookmarkIcon, ExploreIcon, HomeIcon, UserProfileIcon } from "../../components/Icons";


const HeaderNav = (props) => {
    

    return <nav className="header-nav-list">
        <span>
            <span className="header-nav-list-span">
                <span><HomeIcon className="header-nav-svg"/></span>
                <span>Home</span>
            </span>
        </span>
        <span>
            <span className="header-nav-list-span">
                <span><ExploreIcon className="header-nav-svg"/></span>
                <span>Explore</span>
            </span>
        </span>

        <span >
            <span className="header-nav-list-span">
                <span><UserProfileIcon className="header-nav-svg"/></span>
                <span>Profile</span>
            </span>
        </span>

        <span>
            <span className="header-nav-list-span">
                <span><BookmarkIcon className="header-nav-svg"/></span>
                <span>Bookmarks</span>
            </span>
        </span>

        
    </nav>
}

export default HeaderNav;