import React from "react";
import PropTypes from "prop-types";
import { EuiFlexItem } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/flex
 */
function FlexItem(props) {
  return (
    <EuiFlexItem {...props}>{props.children}</EuiFlexItem>
  );
}

FlexItem.propTypes = {
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
   * Element type of the component
   */
  component: PropTypes.element,

  /**
   * If the component will take full available width
   */
  grow: PropTypes.bool,
  
};

export default FlexItem;
