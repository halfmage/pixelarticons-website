/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, url, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} - %s`}
      meta={[
        {
          name: `description`,
          content: `Beautiful pixel icons. For the pixel vibes.`,
        },
        {
          property: `og:title`,
          content: `pixelarticons`,
        },
        {
          property: `og:description`,
          content: `Beautiful pixel icons. For the pixel vibes.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://pixelarticons.com/pixelarticons-cover.jpg`,
        },
        {
          property: `og:url`,
          content: `https://pixelarticons.com`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `Gerrit Halfmann`,
        },
        {
          name: `twitter:title`,
          content: `pixelarticons`,
        },
        {
          name: `twitter:description`,
          content: `Beautiful pixel icons. For the pixel vibes.`,
        },
        {
          name: `twitter:image`,
          content: `https://pixelarticons.com/pixelarticons-cover.jpg`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
