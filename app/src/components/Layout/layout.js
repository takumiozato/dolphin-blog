import React from "react"
import LayoutStyles from "./style.module.css"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={LayoutStyles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <ul>
          <li>HOME</li>
          <li>仕事について</li>
          <li>生活について</li>
        </ul>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
