import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import name from "../images/cordelia--name.png";

const navLinks = [
  { label: 'About', href: '/about' },
  // { label: 'Comics', href: '/comics' },
  { label: 'Projects', href: '/projects' },
  { label: 'Talks', href: '/talks' },
  { label: 'Writing', href: '/writing' }
];

const Header = () => (
  <header>
    <div className="mw8 center tc">
      <Link to="/">
        <img 
          className="w-80 tracked b mt4 mb2 tc"
          src={name}
          alt="Cordelia McGee-Tubb"
        />
      </Link>
    </div>

    <nav className="tc pb3">
      <ul className="list b f3 ma0 pa0 tracked ttu">
        {navLinks.map((navLink, i) => { return (
          <li className="dib-ns mr4-ns mb2" key={i}>
            <Link to={navLink.href}>
              {navLink.label}
            </Link>
          </li>
        )})}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
