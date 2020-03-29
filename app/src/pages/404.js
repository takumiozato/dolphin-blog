import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>ページが見つかりませんでした。</p>
  </Layout>
)

export default NotFoundPage
