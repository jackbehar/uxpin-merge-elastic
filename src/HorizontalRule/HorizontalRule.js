import React from "react";
import PropTypes from "prop-types";
import { EuiHorizontalRule } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/horizontal-rule
 */
function HorizontalRule(props) {
  return (
    <EuiHorizontalRule 
      {...props} 
      aria-Label={props.ariaLabel}
      data-test-subj={props.dataTestSubj} />
  );
}

HorizontalRule.propTypes = {
  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  /**
   * Size of the Horizontal line
   */
  size: PropTypes.oneOf(["full", "half", "quarter"]), 

  /**
   * Margin of the horizontal line
   */
  margin: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none", "xxl"]),
  
};

export default HorizontalRule;
