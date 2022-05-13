import React from "react";
import PropTypes from "prop-types";
import { EuiToolTip } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/tooltip
 */
function ToolTip(props) {
  return (
    <EuiToolTip 
      {...props}>
        {props.children}
    </EuiToolTip>
  );
}

ToolTip.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Passes onto the the trigger.
   */
  anchorClassName: PropTypes.string,

  /**
   * Unless you provide one, this will be randomly generated.
   */
  id: PropTypes.string,

  /**
   * Passes onto the tooltip itself, not the trigger.
   */
  className: PropTypes.string,

  /**
   * The main content of your tooltip.
   */
  content: PropTypes.node,

  /**
   * An optional title for your tooltip.
   */
  title: PropTypes.node,

  /**
   * Delay before showing tooltip. Good for repeatable items.
   */
  delay: PropTypes.oneOf(["regular", "long"]),

  /**
   * Suggested position. If there is not enough room for it this will be changed.
   */
  poisiton: PropTypes.oneOf(["left", "right", "top", "bottom"]),
 
  /**
   * If supplied, called when mouse movement causes the tool tip to be hidden.
   */
  onMouseOut: PropTypes.func,
};

export default ToolTip;
