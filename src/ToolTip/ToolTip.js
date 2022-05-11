import React from "react";
import PropTypes from "prop-types";
import { EuiToolTip } from '@elastic/eui';

function ToolTip(props) {
  return (
    <EuiToolTip 
      {...props}>
        {props.children}
    </EuiToolTip>
  );
}

ToolTip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  title: PropTypes.node,
  delay: PropTypes.oneOf(["regular", "long"]),
  poisiton: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  anchorClassName: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onMouseOut: PropTypes.func,
};

export default ToolTip;
