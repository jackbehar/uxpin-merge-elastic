import React from "react";
import PropTypes from "prop-types";
import { EuiTitle } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/title
 */
function Title(props) {
  return (
    <EuiTitle 
      {...props} 
      aria-Label={props.ariaLabel}
      data-test-subj={props.dataTestSubj}>
        {props.children}
    </EuiTitle>
  );
}

Title.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node, 

  /**
   * ID of Title
   */
  id: PropTypes.string,

  /**
   * Defines a string value that labels the current element. See aria-labelledby.
   */
  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  /**
   * Font size
   */
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),

  /**
   * If text is uppercase
   */
  textTransform: PropTypes.oneOf(["uppercase"]),
  
};

export default Title;
