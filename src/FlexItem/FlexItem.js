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
   ariaLabel: PropTypes.string,
   dataTestSubj: PropTypes.string,
   className: PropTypes.string,
};



export default FlexItem;
