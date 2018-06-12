/**
 * @file
 * Comments component
 */

import React from 'react';

const Comments = ({
  title, headline, id, testCommentsUuid, url,
}) => (
  <div className="o-grid-container">
    <div className="o-grid-row">
      <div
        id="comments"
        data-o-grid-colspan="12 S11 Scenter M9 L8 XL7"
        data-o-component="o-comments"
        data-o-comments-auto-init="true"
        data-o-comments-config-title={title || headline}
        data-o-comments-config-url={url}
        data-o-comments-config-article-id={id || testCommentsUuid}
      >
        <div className="o--if-no-js">
          To participate in this chat, you need to upgrade to a newer web browser.{' '}
          <a href="http://help.ft.com/tools-services/browser-compatibility/">Learn more.</a>
        </div>
      </div>
    </div>
  </div>
);

export default Comments;
