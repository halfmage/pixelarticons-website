import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = ({ data }) => (
  <Layout>

    <SEO title="Home" />

    <Hero />

    <div className=" container-fluid">
      <div className="row center-xs icon-row">
        {data.allFile.edges.map(({ node }) => (
          <div className="col-icon col-xs-4 col-sm-3 col-md-3 col-lg-1 center-xs">
            <a className="icon-container" key={node.id} href={node.publicURL} download>
              <img src={node.publicURL} alt={node.name} />
              <div className="icon-name">{node.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>

    <div className="container">
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pixelarticons"> Instagram</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/pixelarticons"> NPM</a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/halfmage/pixelarticons"> Github</a>
    </div>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile(filter: {extension: {eq: "svg"}}) {
      edges {
        node {
          id
          name
          publicURL
          prettySize
        }
      }
    }
  }
`