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
      data-test-subj={props.dataTestSubj}>
        {props.children}
    </EuiHorizontalRule>
  );
}

HorizontalRule.propTypes = {
  size: PropTypes.oneOf(["full", "half", "quarter"]), 
  textSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none", "xxl"]),
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
};

export default HorizontalRule;
