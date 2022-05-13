import React from "react";
import PropTypes from "prop-types";
import { EuiButton } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/navigation/button
 */
function Button(props) {
  return (
    <EuiButton {...props}>{props.children}</EuiButton>
  );
}

Button.propTypes = {

  children: PropTypes.node,

  /**
     * Make button a solid color for prominence
     */
  fill: PropTypes.bool,

  /**
     * Any of our named colors.
     */
  color: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger", "ghost", "text"]),


  /**
     * Use size `s` in confined spaces
     */
  size: PropTypes.oneOf(["s", "m"]),

  /**
     * `disabled` is also allowed
     */
  isDisabled: PropTypes.bool,

  /**
     * Extends the button to 100% width
     */
  fullWidth: PropTypes.bool,

  /**
     * Override the default minimum width
     */
  minWidth: PropTypes.number,

  /**
     * Force disables the button and changes the icon to a loading spinner
     */
  isLoading: PropTypes.bool,

  /**
     * Any `type` accepted by EuiIcon
     */
  iconType: PropTypes.oneOf(iconList),

  /**
     * Can only be one side `left` or `right`
     */
  iconSide: PropTypes.oneOf(["left", "right"]),

  iconSize: PropTypes.oneOf(["s", "m"]),

  href: PropTypes.string,

  onClick: PropTypes.func,

};



export default Button;
