import React from "react";
import PropTypes from "prop-types";
import { EuiAvatar } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList'

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/accordion
 */
function Avatar(props) {
  return (
    <EuiAvatar {...props} />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
         * Custom initials (max 2 characters).
         * By default will take the first character (of each word).
         */
  initials: PropTypes.string,

  /**
         * Specify how many characters to show (1 or 2).
         * By default, will show based on number of words (max first 2).
         */
  initialsLength: PropTypes.oneOf([1, 2]),

  /**
         * Path to an image to display instead of initials
         */
  imageUrl: PropTypes.string,

  /**
       * Any EUI glyph, logo or custom icon to display instead of initials
       */
  iconType: PropTypes.oneOf(iconList),

  /**
       * Manually change icon size
       */
  iconSize: PropTypes.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
       * Manually change icon color
       */
  iconColor: PropTypes.oneOf(["default", "primary", "success", "accent", "warning", "danger", "text", "subdued", "ghost", "inherit"]),

  /**
       * Full name of avatar for title attribute and calculating initial if not provided
       */
  name: PropTypes.string,

  /**
       * Accepts hex values like `#FFFFFF`, `#000` otherwise a viz palette color will be assigned.
       * Or pass `'plain'` for an empty shade, `'subdued'` for a light gray shade or `null` to remove entirely and the text/icon color will `inherit`
       */
  color: PropTypes.oneOf(["plain", "subdued", null]),

  /**
       * The type of avatar mainly controlling the shape.
       * `user` = circle
       * `space` = rounded square
       */
  type: PropTypes.oneOf(["space", "user"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),

  /**
       * Grays out the avatar to simulate being disabled
       */
  isDisabled: PropTypes.bool


};

export default Avatar;
