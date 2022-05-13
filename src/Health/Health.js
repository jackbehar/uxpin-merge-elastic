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
  children: PropTypes.node, 
  textSize: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),
  color: PropTypes.oneOf(["default", "accent", "success", "warning", "danger", "ghost", "subdued"]),
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
};

export default Health;
