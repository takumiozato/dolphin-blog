import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./style.module.css"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.header}>
    <h1 className={HeaderStyles.title}>
      <Link className={HeaderStyles.link} to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
