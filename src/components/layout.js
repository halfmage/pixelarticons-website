/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useSpring, animated} from 'react-spring'

import "./layout.css"

const Layout = ({ children }) => {

  const props = useSpring({
    transform: 'translateY(0)',
    opacity: 1,
    from: {
      transform: 'translateY(100px)',
      opacity: 0,
    }
  })

  return (
    <>
      <animated.div style={props}>
        <div className="maincontent">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </animated.div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
