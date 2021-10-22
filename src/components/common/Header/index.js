import Logo from "../../../images/companyLogo.jpg";
import "./header.css";

export default function Header(){

    return (
        <div className="max-width header">
            <img src={Logo} alt="FoodPoint" className="header-logo" />
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Delhi</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-separator"></div>
                    <div className="header-searchBar">
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input
                        className="search-input"
                        placeholder="Search for restaurant, cuisine or a dish"
                        />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img
                        src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                        className="header-profile-image"
                        alt="Profile"
                    />
                    <span className="header-username">Deepak</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                    </div>
            </div>
        </div>
    )
}