import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
          >
            <Img fixed={node.childImageSharp.fixed} />
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
      filter: { relativeDirectory: { eq: "icons" } }
      sort: { fields: name }
    ) {
      totalCount
      edges {
        node {
          id
          name
          publicURL
          childImageSharp {
            fixed(width: 24, height: 24) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
