/**
 * @file
 * Header component
 */

import React from 'react';

const Header = () => (
  <header className="o-header o-header--simple" data-o-component="o-header" data-o-header--no-js="">
    <div className="o-header__row o-header__top">
      <div className="o-header__container">
        <div className="o-header__top-wrapper">
          <div className="o-header__top-column o-header__top-column--center">
            <a
              className="o-header__top-logo"
              href="http://www.ft.com/"
              title="Go to Financial Times homepage"
            >
              <span className="o-header__visually-hidden">Financial Times</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
