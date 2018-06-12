/**
 * @file
 * Main page layout view
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { flagsPropType } from './proptypes';
import Header from './includes/header';
import HtmlHead from './includes/html-head';
import ArticleHead from './includes/article-head';
import OnwardJourney from './includes/onwardjourney';
import Comments from './includes/comments';
import Footer from './includes/footer';
import { strftime } from './filters';
import ArticleBody from '../client/app';

const Layout = ({ flags = {}, ...props }) => (
  <Fragment>
    <HtmlHead {...props} />
    {flags.header && <Header />}
    <main role="main">
      <article className="article" itemScope itemType="http://schema.org/Article">
        <div className="article-head o-grid-container">
          <div className="o-grid-row">
            <header data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
              <ArticleHead {...props} flags={flags} />
            </header>
          </div>
        </div>
        <div className="article-body o-typography-wrapper" itemProp="articleBody">
          <div className="o-grid-container">
            <div className="o-grid-row">
              <div data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
                <div>
                  <ArticleBody {...props} />
                </div>
              </div>
            </div>
          </div>

          <footer
            className="o-typography-footer"
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div className="o-grid-container">
              <div className="o-grid-row">
                <div data-o-grid-colspan="12 S11 Scenter M9 L8 XL7">
                  <small>
                    <a
                      href="http://www.ft.com/servicestools/help/copyright"
                      data-trackable="link-copyright"
                    >
                      Copyright
                    </a>
                    <span itemProp="name">The Financial Times</span> Limited{' '}
                    {strftime('%Y')(new Date())}. All rights reserved. You may share using our
                    article tools. Please don&apos;t cut articles from FT.com and redistribute by
                    email or post to the web.
                  </small>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </main>
    {flags.onwardjourney && <OnwardJourney {...props} />}
    {flags.comments && <Comments {...props} />}
    {flags.footer && <Footer {...props} />}
  </Fragment>
);

Layout.propTypes = {
  id: PropTypes.string,
  flags: flagsPropType.isRequired,
};

Layout.defaultProps = {
  id: '',
};

export default Layout;
