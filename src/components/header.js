import PropTypes from "prop-types"
import React from "react"

import Download from "../icons/download.svg"
import ExternalLink from "../icons/external-link.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container-fluid wrap center-xs">
      <h1 className="headline">Pixelarticons</h1>
      <h3>385 retro interface icon</h3>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons/releases/download/v1.1.0/pixelarticons_1.1.0.zip"
          className="button primary"
        >
          <img alt="Download Icon Pixelarticons" src={Download} />
          Download 1.1.0
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons"
          className="button"
        >
          <img alt="External Link Icon Pixelarticons" src={ExternalLink} />
          Github
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
