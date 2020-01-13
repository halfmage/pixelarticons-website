import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CalendarIcon from '../components/icons/Calendar'

import "pixelarticons/pixelarticons.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1
      style={{
        fontFamily: 'Space Mono'
      }}
    >pixelarticons</h1>

    <table>
      <tr>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
      </tr>
      <tr>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
      </tr>
      <tr>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
        <td><CalendarIcon /></td>
      </tr>
    </table>

  </Layout>
)

export default IndexPage
