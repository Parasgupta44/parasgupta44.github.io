// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Bio from '../components/blog-components/bio'
import Layout from '../components/blog-components/layout'
import SEO from '../components/blog-components/seo'
import { rhythm } from '../utils/typography'

import ThemeProvider from '../components/blog-components/ThemeProvider'

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    // <Link to="/blogIndex">Blog</Link>
    <ThemeProvider>
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All posts"
          description="All posts of Paras Gupta's personal portfolio / blog."
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h2
                  css={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{
                      boxShadow: `none`,
                      color: '#ed097b',
                      fontFamily: `Montserrat, sans-serif`,
                    }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}. &nbsp;</small>
                <p style={{ display: `inline` }}>
                  <b>
                    <small> ☕ {node.timeToRead} min read</small>
                  </b>
                </p>
              </header>
              <section>
                <p
                  css={{ marginBottom: rhythm(1.5) }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    </ThemeProvider>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
