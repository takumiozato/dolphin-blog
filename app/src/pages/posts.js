import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => (
  <Layout>
    <SEO title="記事一覧" />
    <h1>記事一覧</h1>
    {data.allMicrocmsPost.edges.map(post => (
      <p key={post.node.id}>{post.node.title}</p>
    ))}
    <Link to="/">トップへ戻る</Link>
  </Layout>
)

export const query = graphql`
  {
    allMicrocmsPost(filter: { createdAt: {} }) {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`

export default PostsPage
