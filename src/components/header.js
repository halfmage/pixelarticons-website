import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container-fluid wrap center-xs">
      <h1 className="headline">Pixelarticons</h1>
      <h4>Version 1.2 - 359 retro interface icons</h4>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons"
          className="button"
        >
          Checkout Github
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: ".5rem" }}
          >
            <path
              d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `pixelarticons`,
}

export default Header
