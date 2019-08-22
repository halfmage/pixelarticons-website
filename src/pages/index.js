import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "pixelarticons/pixelarticons.css"

import File from "pixelarticons/icons/file.svg"
import Mail from "pixelarticons/icons/mail.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 className="headline">Pixelarticons</h1>
    <h2 className="subheadline">In Development - v.0.11.1</h2>

    <code>
      npm install pixelarticons
    </code>

    <div className="container">
      <a href={File} download="pixelarticon_File"><img src={File} /></a>
      <a href={Mail} download="pixelarticon_Mail"><img src={Mail} /></a>
    </div>

    <div className="container">
      <i className="px-48 px-delete"></i>
      <i className="px-48 px-file"></i>
      <i className="px-48 px-flag"></i>
      <i className="px-48 px-heart"></i>
      <i className="px-48 px-mail"></i>
    </div>
    
    <div className="container">
      <i className="px-48 px-arrow-up"></i>
      <i className="px-48 px-arrow-right"></i>
      <i className="px-48 px-arrow-down"></i>
      <i className="px-48 px-arrow-left"></i>
    </div>

    <div className="container">
      <i className="px-48 px-angle-up"></i>
      <i className="px-48 px-angle-right"></i>
      <i className="px-48 px-angle-down"></i>
      <i className="px-48 px-angle-left"></i>
    </div>

    <div className="container">
      <i className="px-48 px-angle-double-up"></i>
      <i className="px-48 px-angle-double-right"></i>
      <i className="px-48 px-angle-double-down"></i>
      <i className="px-48 px-angle-double-left"></i>
    </div>

    <div className="container">
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pixelarticons">
        Instagram
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/pixelarticons">
      NPM
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/halfmage/pixelarticons">
        Github
      </a>
    </div>

  </Layout>
)

export default IndexPage
