/**
 * @file
 * Sharing buttons
 */

import React from 'react';
import PropTypes from 'prop-types';

const Share = props => (
  <div className="article__share article__share--top n-util-clearfix" data-trackable="share | top">
    <div className="container">
      <div data-o-component="o-share" className="o-share">
        <ul>
          <li className="o-share__action o-share__action--twitter">
            <a
              className="o-share__icon o-share__icon--twitter"
              href={`https://twitter.com/intent/tweet?url=${props.url}&amp;text=${props.tweetText ||
                props.twitterHeadline ||
                props.socialHeadline ||
                props.headline}${props.twitterRelatedAccounts &&
                `&amp;related=${props.twitterRelatedAccounts.join(',')}`}&amp;via=FinancialTimes`}
              rel="noopener"
            >
              <span className="o-share__text">Share on Twitter. Opens in a new window.</span>
            </a>
          </li>
          <li className="o-share__action o-share__icon--facebook">
            <a href={`http://www.facebook.com/sharer.php?u=${props.url}`} rel="noopener">
              <span className="o-share__text">Share on Facebook. Opens in a new window.</span>
            </a>
          </li>
          <li className="o-share__action o-share__icon--linkedin">
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${
                props.url
              }&amp;source=Financial%20Times`}
              rel="noopener"
            >
              <span className="o-share__text">Share on LinkedIn. Opens in a new window.</span>
            </a>
          </li>
          <li className="o-share__action o-share__icon--whatsapp">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`whatsapp://send?text=${props.socialHeadline || props.headline}%20-%20${
                props.url
              }`}
              data-trackable="whatsapp"
            >
              <span className="o-share__text">Share on Whatsapp. Opens in a new window.</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Share.propTypes = {
  url: PropTypes.string.isRequired,
  socialHeadline: PropTypes.string,
  twitterHeadline: PropTypes.string,
  headline: PropTypes.headline,
  twitterRelatedAccounts: PropTypes.arrayOf(PropTypes.string),
  tweetText: PropTypes.string,
};

export default Share;
