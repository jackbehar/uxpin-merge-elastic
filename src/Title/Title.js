import React from "react";
import PropTypes from "prop-types";
import { EuiTitle } from '@elastic/eui';

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
  children: PropTypes.node, 
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  textTransform: PropTypes.oneOf(["uppercase"]),
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
