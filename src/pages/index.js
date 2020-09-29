import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pixelarticons - Beautiful pixel icons" />
    <div className="container-fluid wrap center-xs">
      <div className="row">
        {data.allFile.edges.map(({ node }) => (
          <a
            className="icon col-xs-3 col-sm-2 col-md-1"
            key={node.id}
            href={node.publicURL}
            download
          >
            <img width="24" src={node.publicURL} alt={node.name} />
            <div className="icon-name">{node.name}</div>
          </a>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "icons" }, extension: { eq: "svg" } }
      sort: { fields: name }
    ) {
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
