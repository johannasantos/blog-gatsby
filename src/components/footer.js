import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
        <>
          <span className="footerCopyrights">
            © 2020 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          <span className="footerCopyrights">
            Blog created by <a href="https://twitter.com/johannableu">Jo Bleu</a>
          </span>
        </>
      )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
