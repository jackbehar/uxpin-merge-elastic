import React from "react";
import PropTypes from "prop-types";
import { EuiIcon } from '@elastic/eui';
import { iconList } from './iconList/iconList';


function Icon(props) {
  return (
    <EuiIcon 
        {...props} 
        aria-label={props.ariaLabel}
        data-test-subj={props.dataTestSubj} />
  );
}

Icon.propTypes = {

  /**
   * Descriptive title for naming the icon based on its use
   */
  title: PropTypes.string,

  /**
   * A unique identifier for the title element
   */
  titleId: PropTypes.string,

  className: PropTypes.string,

  /**
   * Defines a string value that labels the current element. @see aria-labelledby.
   */
  ariaLabel: PropTypes.string,

  dataTestSubj: PropTypes.string,

  /**
   * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value. 
   * Note that coloring only works if your SVG is removed of fill attributes.
   */
  color: PropTypes.string,

  /**
   * Enum is any of the named icons listed in the docs, string is usually a URL to an SVG file, and elementType is any React SVG component
   */
  type: PropTypes.oneOf(iconList),

  /**
   * Note that every size other than original assumes the provided SVG sits on a square viewbox.
   */
  size: PropTypes.oneOf(["s", "m", "l", "xl", "original", "xxl"]),

  /**
   * Callback when the icon has been loaded & rendered
   */
  onIconLoad: PropTypes.func,

};



export default Icon;
