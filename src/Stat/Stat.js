import React from "react";
import PropTypes from "prop-types";
import { EuiStat } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/stat
 */
function Stat(props) {
  return (
    <EuiStat 
      {...props} 
      aria-Label={props.ariaLabel}
      data-test-subj={props.dataTestSubj}>
    </EuiStat>
  );
}

Stat.propTypes = {
  /**
   * Defines a string value that labels the current element. @see aria-labelledby.
   */
  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  /**
   * Set the description (label) text
   */
  descriptionElement: PropTypes.string,

  /**
   * HTML Element to be used for title
   */
  titleElement: PropTypes.string,

  /**
   * The color of the title text
   */
  titleColor: PropTypes.string,

  /**
   * Set the description (label) text
   */
  description: PropTypes.node,

  /**
   * The (value) text
   */
  title: PropTypes.node,

  /**
   * Allignment of all text
   */
  textAlign: PropTypes.oneOf(["left", "right", "center"]),

  /**
   * Size of the title. See EuiTitle for options ('s', 'm', 'l'... etc)
   */
  titleSize: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),

  /**
   * Will hide the title with an animation until false
   */
  isLoading: PropTypes.bool,

  /**
   * Flips the order of the description and title
   */
  reverse: PropTypes.bool,
 
};

export default Stat;
