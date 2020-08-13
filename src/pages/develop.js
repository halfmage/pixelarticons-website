import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Pixelarticons - Beautiful pixel icons" />
    <div style={{ backgroundColor: "#fff" }}>
      <br />
      <h3 style={{ margin: "0 1rem", color: "#222" }}>
        pixelarticons v2 24x24 - {data.allFile.totalCount} icons
      </h3>
      {data.allFile.edges.map(({ node }) => (
        <img
          src={node.publicURL}
          alt={node.name}
          style={{ padding: "1rem", width: "1.5rem", height: "1.5rem" }}
        />
      ))}
    </div>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "icons" } }
      sort: { fields: name, order: ASC }
    ) {
      totalCount
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
