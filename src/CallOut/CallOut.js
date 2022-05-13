import React from "react";
import PropTypes from "prop-types";
import { EuiCallOut } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList';


function CallOut(props) {
  return (
    <EuiCallOut {...props}>{props.children}</EuiCallOut>
  );
}

CallOut.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  heading: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  color: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger"]),
  size: PropTypes.oneOf(["s", "m"]),
  iconType: PropTypes.oneOf(iconList),
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
  ref: PropTypes.element,
};



export default CallOut;
