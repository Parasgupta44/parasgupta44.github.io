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

const Home = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  //   const posts = data.allMarkdownRemark.edges
  return (
    <ThemeProvider>
      <section css={{ height: '100%', minHeight: '100vh' }}>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Layout location={location} title={siteTitle}>
              <SEO
                title="Paras Gupta"
                description="Paras Gupta's portfolio / blog."
                keywords={config.keyWords}
              />
              <Bio />
              <div>
                Enter my{' '}
                <Link
                  to="/blogIndex/"
                  style={{ boxShadow: '0 0 0 0 currentColor' }}
                >
                  <em>
                    Blog <FaBlog />
                  </em>
                </Link>
                <br></br>
                <br></br>
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
                Find me on &nbsp;
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
                {/* <br></br>
                <br></br>
                Go back to the{' '}
                <Link to="/blogIndex/">
                  <em>Blog,</em>
                </Link>{' '}
                <Link to="/">
                  <em>
                    <FaHome />
                  </em>
                </Link> */}
                <br></br>
                <br></br>
                <a
                  href={config.social.dontClick}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <em>Don't click.</em>
                </a>
                <br></br>
                Check out some p5's: &nbsp;
                <Link to="/flows/">
                  <em>Flows</em>
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

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
