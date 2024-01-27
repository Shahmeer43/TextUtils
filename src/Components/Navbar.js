import "../Styles/NavbarStyle.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ brandName: name, modeInfo: { mode, modeButton } }) {
  let containerStyle = {
    backgroundColor: mode === "light" ? "tomato" : "black",
  };

  let searchButtonStyle = {
    backgroundColor: mode === "light" ? "tomato" : "black",
  };

  let classNameForToggleButton = () => {
    let classStyle = mode === "light" ? "toggleBtn" : "animatedToggleBtn";
    return classStyle;
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <h1 className="title">
          <Link to="/" id="brandNameHeading">
            {name}
          </Link>
        </h1>
        <div className="allRightElements">
          <div className="listDiv">
            <ul className="navList">
              <li className="navListItem">
                <Link to="/About">About</Link>
              </li>
              <li className="navListItem">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="navListItem">
                <Link to="/Help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="toggleButtonBackground">
            <button
              className={classNameForToggleButton()}
              onClick={modeButton}
            ></button>
          </div>
          <div className="searchElements">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
            ></input>
            <button className="searchButton" style={searchButtonStyle}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  brandName: "BRAND NAME",
};

export default Navbar;
