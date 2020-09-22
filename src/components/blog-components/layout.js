import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { FiTerminal, FiSun, FiMoon } from 'react-icons/fi'
import { FaTwitter, FaLinkedin, FaGithub, FaHome } from 'react-icons/fa'

import { rhythm, scale } from './../../utils/typography'

import ThemeContext from './ThemeContext'
import Button from './Button'
import {
  BACKGROUND_TRANSITION_TIME,
  EASE_IN_OUT_TRANSITION,
  getTheme,
} from '../../utils/theme'
const config = require('../../../data/siteConfig')

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blogIndex`
  let header
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { color, background, secondary } = getTheme(theme)
  const darkTheme = getTheme('dark')

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blogIndex`}
        >
          {/* {title} */}
          Some weird shit!
        </Link>
      </h1>
    )
  } else {
    header = (
      <h2
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blogIndex`}
        >
          {/* {title} */}
          Some weird shit!
        </Link>
      </h2>
    )
  }
  return (
    <div
      css={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        a: {
          color: 'inherit',
          textDecoration: 'none',
          transition: `border-color ${EASE_IN_OUT_TRANSITION}`,
          borderBottom: `1px dashed transparent`,
          '&:hover, &:focus': {
            borderBottomColor: color,
          },
        },
        blockquote: {
          color: secondary,
          borderColor: secondary,
        },
      }}
    >
      <h6
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Back to home!
        </Link>
      </h6>
      <header
        css={{
          display: 'flex',
          flexDirection: location.pathname === rootPath ? 'row' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {header}

        <Button
          aria-label="Light and dark mode switch"
          circular
          onClick={toggleTheme}
          className="container"
          style={{
            background,
            transitionDuration: '0s',
            // delay background-color transition for nicer animation
            transitionDelay:
              theme === 'dark' ? '0s' : BACKGROUND_TRANSITION_TIME,
            transitionProperty: 'background-color, color',
          }}
        >
          {theme === 'light' ? <FiSun /> : <FiMoon />}
          <div
            className={theme}
            css={{
              position: 'absolute',
              background: darkTheme.background,
              borderRadius: '50%',
              width: 32,
              height: 32,
              zIndex: -1,
              transition: `transform ${BACKGROUND_TRANSITION_TIME} ease`,
              '&.dark': {
                transform: 'scale(150)',
              },
            }}
          />
        </Button>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <Link to="/" style={{ boxShadow: '0 0 0 0 currentColor' }}>
          <FaHome />
        </Link>
        {` `}
        <a
          style={{ boxShadow: '0 0 0 0 currentColor' }}
          href={config.social.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        {` `}
        <a
          style={{ boxShadow: '0 0 0 0 currentColor' }}
          href={config.social.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        {` `}
        <a
          style={{ boxShadow: '0 0 0 0 currentColor' }}
          href={config.social.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </footer>
    </div>
  )
}

export default Layout
