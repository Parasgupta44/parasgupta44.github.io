// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Bio from '../components/blog-components/bio'
import Layout from '../components/blog-components/layout'
import SEO from '../components/blog-components/seo'

import ThemeProvider from '../components/blog-components/ThemeProvider'
import ThemeContext from '../components/blog-components/ThemeContext'
import { FaTwitter, FaLinkedin, FaGithub, FaHome, FaBlog } from 'react-icons/fa'
const config = require('../../data/siteConfig')

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const AboutIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  //   const posts = data.allMarkdownRemark.edges
  return (
    <ThemeProvider>
      <section css={{ height: '100%', minHeight: '100vh' }}>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Layout location={location} title={siteTitle}>
              <SEO
                title="About"
                description="About Paras Gupta's portfolio / blog."
                keywords={config.keyWords}
              />
              <Bio />
              <div>
                {config.curr_intro_brief}
                <br></br>
                <br></br>
                My interest areas are:{' '}
                <em>
                  <strong>{config.interest_areas}</strong>
                </em>
                <br></br>
                <br></br>
                {config.curr_intro}
                <br></br>
                {config.curr_work_area}
                <br></br>
                <br></br>
                Find me on{' '}
                <a
                  style={{ boxShadow: '0 0 0 0 currentColor' }}
                  href={config.social.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <em>
                    <FaLinkedin />,
                  </em>
                </a>{' '}
                <a
                  style={{ boxShadow: '0 0 0 0 currentColor' }}
                  href={config.social.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <em>
                    <FaTwitter />,
                  </em>
                </a>{' '}
                <a
                  style={{ boxShadow: '0 0 0 0 currentColor' }}
                  href={config.social.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <em>
                    <FaGithub />
                  </em>
                </a>
                <br></br>
                My{' '}
                <a
                  href={config.social.resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <em>Resume.</em>
                </a>
                <br></br>
                <br></br>
                Go back to the{' '}
                <Link
                  to="/blogIndex/"
                  style={{ boxShadow: '0 0 0 0 currentColor' }}
                >
                  <em>
                    <FaBlog />,
                  </em>
                </Link>{' '}
                <Link to="/" style={{ boxShadow: '0 0 0 0 currentColor' }}>
                  <em>
                    <FaHome />
                  </em>
                </Link>
                <br></br>
                <br></br>
                <hr
                  style={{
                    height: '1px',
                    borderWidth: 0,
                    color: 'gray',
                    backgroundColor: theme === 'dark' ? 'white' : 'black',
                  }}
                ></hr>
                <br></br>
                <br></br>
              </div>
            </Layout>
          )}
        </ThemeContext.Consumer>
      </section>
    </ThemeProvider>
  )
}

export default AboutIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
