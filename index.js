/**
 * @file
 * Main entry-point for app
 */

import React from 'react';
import { hydrate } from 'react-dom';
import Layout from './views/layout';
import getContext from './config';

(async () =>
  hydrate(React.createElement(Layout, await getContext()), document.getElementById('content')))();
