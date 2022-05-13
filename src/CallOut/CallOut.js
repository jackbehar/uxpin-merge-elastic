import React from "react";
import PropTypes from "prop-types";
import { EuiCallOut } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList';


/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/callout
 */
function CallOut(props) {
  return (
    <EuiCallOut {...props}>{props.children}</EuiCallOut>
  );
}

CallOut.propTypes = {
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


  ref: PropTypes.element,

  /**
   * Title text of CallOut
   */
  title: PropTypes.node,

  /**
   * CallOut Heading HTML DOM tag
   */
  heading: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),

  /**
   * Color of the CallOut
   */
  color: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger"]),
  
  /**
   * Size of the CallOut
   */
  size: PropTypes.oneOf(["s", "m"]),

  /**
   * Icon to be displayed
   */
  iconType: PropTypes.oneOf(iconList), 
};



export default CallOut;
