import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0H4H0V4V40V44H4H32H36V40V16V12H32V8H28V4H24V0H20ZM28 12V8H24V12H28ZM20 12V4H4V40H32V16H24H20V12Z" fill="#000"/>
    </svg>
    <h1 className="headline">Pixel Art Icons</h1>
    <div>Coming soon...</div>
    <a
      className="button"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/pixelarticons"
    >
      <span role="img" aria-label="pointer-right">👉 </span> 
      Get notified on Intagram
      <span role="img" aria-label="pointer-left"> 👈</span>
    </a>
  </Layout>
)

export default IndexPage
