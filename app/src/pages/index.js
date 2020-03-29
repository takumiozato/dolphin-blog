import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Card from "../components/Card/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="HOME" />
    {data.allMicrocmsPost.edges.map(post => (
      <Card
        key={post.node.id}
        title={post.node.title}
        createdAt={post.node.createdAt}
      />
    ))}
  </Layout>
)

export const query = graphql`
  {
    allMicrocmsPost {
      edges {
        node {
          body
          title
          createdAt(locale: "ja", formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`

export default IndexPage
