import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header container-fluid">
    <div className="row middle-xs">
      <div className="col-xs-12 center-xs col-sm-6 start-sm">
        {siteTitle} <span className="badge">v1.0.2</span>
      </div>
      <div className="col-xs-12 center-xs col-sm-6 end-sm">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pixelarticons">Instagram</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/pixelarticons">NPM</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/halfmage/pixelarticons">Github</a>
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
