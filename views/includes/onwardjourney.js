/**
 * @file
 * OnwardJourney component
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const OnwardJourney = ({ onwardJourney }) => (
  <Fragment>
    <aside className="onward-journey__block">
      {onwardJourney.relatedContent.map(sectionData => (
        <section
          className="onward-journey__section"
          data-g-component="onward-journey"
          data-list={sectionData.list}
          data-rows={sectionData.rows || 1}
        />
      ))}
    </aside>
    <style>
      {`
      .onward-journey__link {
        color: #333;
        text-decoration: none;
      }
      `}
    </style>
    <script
      dangerouslySetInnerHTML={{
        __html: `
    (function() {
      [].forEach.call(document.querySelectorAll('[data-g-component="onward-journey"]'), function(tag) {
        if (!tag.classList.contains('is-rendered')) {
          var list = tag.getAttribute('data-list');
          var layout = tag.getAttribute('data-layout') || '';
          var limit = parseInt(tag.getAttribute('data-rows') || '1') * 4;
          var urlBase = 'https://ig.ft.com/onwardjourney/v3/';
          var url = [urlBase, list, '/html/', layout, '?limit=', limit].join('');
          if (list) {
            fetch(url)
              .then(function(res) {
                return res.text();
              })
              .then(function(html) {
                tag.innerHTML = html;
              })
              .catch(function() {
                tag.remove();
              });
          }
        }

        tag.classList.add('is-rendered');
      });
    })();
    `,
      }}
    />
  </Fragment>
);

OnwardJourney.propTypes = {
  onwardJourney: PropTypes.arrayOf(PropTypes.shape({})),
};

export default OnwardJourney;
