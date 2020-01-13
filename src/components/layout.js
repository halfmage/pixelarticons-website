/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useSpring, animated} from 'react-spring'

import Header from './header';
import Footer from './footer';

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
      <Header />
        <animated.div style={props}>
          <div style={{
            maxWidth: '64rem',
            margin: '0 auto'
          }}
          >
            {children}
          </div>
        </animated.div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
