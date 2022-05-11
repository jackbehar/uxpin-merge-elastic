import React from "react";
import PropTypes from "prop-types";
import { EuiFlexItem } from '@elastic/eui';


function FlexItem(props) {
  return (
    <EuiFlexItem {...props}>{props.children}</EuiFlexItem>
  );
}

FlexItem.propTypes = {
  children: PropTypes.node, 
  grow: PropTypes.bool,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
};



export default FlexItem;
