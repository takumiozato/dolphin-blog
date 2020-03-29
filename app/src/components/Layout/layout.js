import React from "react"
import LayoutStyles from "./style.module.css"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      microcmsProfile {
        id
        body
        name
        image {
          url
        }
      }
    }
  `)

  return (
    <div className={LayoutStyles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={LayoutStyles.container}>
        <aside className={LayoutStyles.aside_area}>
          <div className={LayoutStyles.profile_image_wrapper}>
            <img
              src={`${data.microcmsProfile.image.url}?w=200&h=200&fit=crop`}
              alt="プロフィール画像"
            />
          </div>
          <p className={LayoutStyles.profile_name}>
            {data.microcmsProfile.name}
          </p>
          <p className={LayoutStyles.profile_description}>
            {data.microcmsProfile.body}
          </p>
        </aside>
        <main className={LayoutStyles.main_area}>{children}</main>
      </div>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
