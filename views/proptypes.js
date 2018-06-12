/**
 * @file
 * Reusable proptypes
 */

import PropTypes from 'prop-types';

export const flagsPropType = PropTypes.shape({
  prod: PropTypes.string.isRequired,
  errorReporting: PropTypes.string.isRequired,
  analytics: PropTypes.string.isRequired,
  googleAnalytics: PropTypes.string.isRequired,
  ads: PropTypes.bool.isRequired,
  onwardjourney: PropTypes.bool.isRequired,
  shareButtons: PropTypes.bool.isRequired,
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  comments: PropTypes.bool.isRequired,
});

export default '';
