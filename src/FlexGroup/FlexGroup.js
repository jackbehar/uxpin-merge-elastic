import React from "react";
import PropTypes from "prop-types";
import { EuiFlexGroup } from '@elastic/eui';


function FlexGroup(props) {
  return (
    <EuiFlexGroup {...props}>{props.children}</EuiFlexGroup>
  );
}

FlexGroup.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.oneOf(["center", "baseline", "stretch", "flexStart", "flexEnd"]),
  component: PropTypes.oneOf("div", "span"),
  direction: PropTypes.oneOf(["row", "column", "rowReverse", "columnReverse"]),
  gutterSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none"]),
  justifyContent: PropTypes.oneOf(["center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "spaceEvenly"]),
  responsive: PropTypes.bool,
  wrap: PropTypes.bool,
  ref: PropTypes.element,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
};



export default FlexGroup;
