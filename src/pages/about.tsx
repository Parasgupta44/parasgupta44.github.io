// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Bio from '../components/blog-components/bio'
import Layout from '../components/blog-components/layout'
import SEO from '../components/blog-components/seo'

import ThemeProvider from '../components/blog-components/ThemeProvider'
import ThemeContext from '../components/blog-components/ThemeContext'
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
              />
              <Bio />
              <div>
                Hey there, found me. I am currently pursuing my Bachelor's of
                Technology from Punjab Engineering College, Chandigarh with
                majors in Computer Science.
                <br></br>
                <br></br>
                My interest areas are:{' '}
                <em>
                  <strong>
                    Deep Learning, Graphs, Computer Vision, Web Development.
                  </strong>
                </em>
                <br></br>
                <br></br>I have interned with Goldman Sachs, Bengaluru from Jan
                2020 to June 2020 as a Software Developer with the Corporate
                Treasury Team. There, I worked on a full stack project from
                scratch involving technologies like React JS, Redux JS, Flask,
                Fast API etc combined with Data Science elements.
                <br></br>
                <br></br>
                Find me on{' '}
                <a
                  href={config.social.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <em>linkedin,</em>
                </a>{' '}
                <a
                  href={config.social.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <em>twitter,</em>
                </a>{' '}
                <a
                  href={config.social.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <em>GitHub.</em>
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
                <Link to="/blogIndex">
                  <em>Blog,</em>
                </Link>{' '}
                <Link to="/">
                  <em>Portfolio.</em>
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
