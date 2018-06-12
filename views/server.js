/**
 * @file
 * Main entry-point for app
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import Layout from './layout';

export default (context) => {
  const app = ReactDOMServer.renderToString(React.createElement(Layout, context));
  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="app">
            ${app}
          </div>
      </body>
    </html>
  `;
};
