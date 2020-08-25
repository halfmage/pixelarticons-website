import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pixelarticons - Beautiful pixel icons" />
    <div className="container-fluid wrap center-xs">
      {data.allFile.edges.map(({ node }) => (
        <a className="icon" key={node.id} href={node.publicURL} download>
          <img width="24" src={node.publicURL} alt={node.name} />
          <div className="icon-name" style={{ display: "none" }}>
            {node.name}
          </div>
        </a>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "svg" } }) {
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
