import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../styles/layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          copyrights
          mainMenu {
            title
            path
          }
          showMenuItems
          menuMoreText
        }
      }
    }
  `)
  const {
    title,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
    copyrights,
  } = data.site.siteMetadata

  return (
    <div className="container">
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
      />
      <div className="content">{children}</div>
      <Footer copyrights={copyrights} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const Layout = ({ slug, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <Helmet title={data.site.siteMetadata.title}>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${slug}twitter-card.jpg`}
        />
      </Helmet>
    )}
  />
);

export default Layout
