import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/blog-components/bio'
import Layout from '../components/blog-components/layout'
import SEO from '../components/blog-components/seo'
import { rhythm, scale } from '../utils/typography'
import ThemeProvider from '../components/blog-components/ThemeProvider'
import ThemeContext from '../components/blog-components/ThemeContext'
import { getTheme } from '../utils/theme'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <ThemeProvider>
      <section css={{ height: '100%', minHeight: '100vh' }}>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Layout location={location} title={siteTitle}>
              <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
              />
              <article>
                <header>
                  <h1
                    style={{
                      marginTop: rhythm(1),
                      marginBottom: 0,
                    }}
                  >
                    {post.frontmatter.title}
                  </h1>
                  <p
                    style={{
                      ...scale(-1 / 5),
                      display: `inline`,
                      marginBottom: rhythm(1),
                    }}
                  >
                    {post.frontmatter.date}. &nbsp;
                  </p>
                  <p
                    style={{
                      ...scale(-1 / 5),
                      display: `block`,
                      marginBottom: rhythm(1),
                      fontWeight: 'bold',
                    }}
                  >
                    {post.timeToRead} min read ☕
                  </p>
                </header>
                <div
                  css={{
                    a: {
                      boxShadow: '0 0 0 0 currentColor',
                      borderBottomColor: getTheme(theme).color,
                      '&:hover, &:focus': {
                        borderBottomStyle: 'solid',
                        borderBottomColor: getTheme(theme).color,
                      },
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <hr
                  style={{
                    borderBottom: `1px solid ${getTheme(theme).borderColor}`,
                    height: 0,
                    marginBottom: rhythm(1),
                  }}
                />
                <footer>
                  <Bio />
                </footer>
              </article>

              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </Layout>
          )}
        </ThemeContext.Consumer>
      </section>
    </ThemeProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
      timeToRead
    }
  }
`
