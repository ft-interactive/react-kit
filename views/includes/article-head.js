/**
 * @file
 * Top of the article
 */

import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Share from './share';
import { ftdate } from '../filters';

export const Byline = ({ bylines }) =>
  (Array.isArray(bylines) ? (
    bylines.map((
      author,
      idx, // @TODO comma separation
    ) =>
      (author.url ? (
        <Fragment>
          <a href={author.url} className="o-typography-author">
            {author.name}
          </a>
        </Fragment>
      ) : (
        <span className="o-typography-author">{author.name}</span>
      )))
  ) : (
    <ReactMarkdown input={bylines} />
  ));

Byline.propTypes = {
  bylines: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string.isRequired,
    })),
  ]).isRequired,
};

const ArticleHead = props => (
  <Fragment>
    <div>
      <a href={props.topic.url} className="o-typography-topic">
        {props.topic.name}
      </a>
    </div>

    <h1 className="o-typography-headline" itemProp="headline">
      {<ReactMarkdown source={props.headline} />}
    </h1>

    <p className="o-typography-standfirst">
      {<ReactMarkdown source={props.summary} />}
      {props.relatedArticle && (
        <a href="{{ relatedArticle.url }}" className="o-typography-link">
          {props.relatedArticle.text}
        </a>
      )}
    </p>
    <meta itemProp="dateModified" content="{{ publishedDate | isotime }}" />

    {(props.mainImage.url || props.mainImage.uuid) && (
      <figure className="graphic graphic-b-1 graphic-pad-1">
        <img alt="" src="{{ mainImage | getMainImage }}" />
        <figcaption className="o-typography-caption">
          {props.mainImage.description}
          {props.mainImage.credit}
        </figcaption>
      </figure>
    )}

    {props.flags && props.flags.shareButtons && <Share {...props} />}

    <div>
      {props.byline && <Byline bylines={props.byline} />}

      {props.publishedDate && (
        <span
          data-o-component="o-date"
          className="o-date o-typography-timestamp"
          dateTime={props.publishedDate.toISOString()}
        >
          {ftdate(props.publishedDate)}
        </span>
      )}
    </div>
  </Fragment>
);

ArticleHead.propTypes = {
  flags: PropTypes.shape({}),
  mainImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  }),
  relatedArticle: PropTypes.shape({}),
  publishedDate: PropTypes.date,
  topic: PropTypes.shape({}),
};

export default ArticleHead;
