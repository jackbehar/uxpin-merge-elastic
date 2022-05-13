import React from "react";
import PropTypes from "prop-types";
import { EuiFlexGroup } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/flex
 */
function FlexGroup(props) {
  return (
    <EuiFlexGroup {...props}>{props.children}</EuiFlexGroup>
  );
}

FlexGroup.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  ref: PropTypes.element,

  alignItems: PropTypes.oneOf(["center", "baseline", "stretch", "flexStart", "flexEnd"]),

  component: PropTypes.oneOf("div", "span"),

  direction: PropTypes.oneOf(["row", "column", "rowReverse", "columnReverse"]),

  gutterSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none"]),

  justifyContent: PropTypes.oneOf(["center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "spaceEvenly"]),

  responsive: PropTypes.bool,
  
  wrap: PropTypes.bool,
};



export default FlexGroup;
