/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="container-fluid wrap center-xs">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pixelarticons"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/pixelarticons"
        >
          NPM
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons"
        >
          Github
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
