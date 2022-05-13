import React from "react";
import PropTypes from "prop-types";
import { EuiHealth } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/health
 */
function Health(props) {
  return (
    <EuiHealth 
      {...props} 
      aria-Label={props.ariaLabel}
      data-test-subj={props.dataTestSubj}>
        {props.children}
    </EuiHealth>
  );
}

Health.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node, 

  /**
   * Defines a string value that labels the current element. See aria-labelledby.
   */
  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  /**
   * Matches the text scales of EuiText. The inherit style will get its font size from the parent element
   */
  textSize: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),

  /**
   * Sets the color of the dot icon. It accepts any IconColor: default, primary, success, accent, warning, danger, text, subdued or ghost; or any valid CSS color value as a string
   */
  color: PropTypes.oneOf(["default", "accent", "success", "warning", "danger", "ghost", "subdued"]),
  
};

export default Health;
