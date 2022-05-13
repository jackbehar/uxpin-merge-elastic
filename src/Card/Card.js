import React from "react";
import PropTypes from "prop-types";
import { EuiCard } from '@elastic/eui';
import Icon from "../Icon/Icon";
import { iconList } from '../Icon/iconList/iconList';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/card
 */
function Card(props) {
  
  return (
    <EuiCard 
      {...props}
      icon={props.iconType ? <Icon type={props.iconType} /> : null}
      >
        {props.children}
      </EuiCard>
  );
}

Card.propTypes = {
  /**
   * Custom children
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Defines a string value that labels the current element. See aria-labelledby.
   */
  "aria-label": PropTypes.string,

  "data-test-subj": PropTypes.string,

  className: PropTypes.string,

  href: PropTypes.string,

  rel: PropTypes.string,

  /**
   * Accepts a url in string form or ReactElement for a custom image component
   */
  image: PropTypes.string,

  /**
   * Adds a badge to top of the card to label it as "Beta" or other non-GA state. Accepts all the props of EuiBetaBadge, where label is required.
   */
  betaBadgeProps: PropTypes.object,

  /**
   * Adds a button to the bottom of the card to allow for in-place selection
   */
  selectable: PropTypes.bool, // EuiCardSelectProps e.g - selectable={{ onClick: card2Clicked, isSelected: card2Selected }}

  /**
   * Cards are required to have at least a title and a description and/or children
   */
  title: PropTypes.node,

  /**
   * Accepts any combination of elements
   */
  footer: PropTypes.node,

  /**
   * Placed within a small EuiText <p> tag
   */
  description: PropTypes.node,

  /**
   * Determines the title's heading element
   */
  titleElement: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6", "span"]),

  /**
   * Determines the title's size, matching that of EuiTitle. Though, card titles can't be too large or small relative to the description text.
   */
  titleSize: PropTypes.oneOf(["xs", "s"]),

  /**
   * Changes alignment of the title and description
   */
  textAlign: PropTypes.oneOf(["left", "right", "center"]),

  /**
   * Change to "horizontal" if you need the icon to be left of the content. Horizontal layouts cannot be used in conjunction with image, footer, or textAlign.
   */
  layout: PropTypes.oneOf(["horizontal", "vertical"]),


  iconType: PropTypes.oneOf(iconList),

  /**
   * Matches to the color property of EuiPanel. If defined, removes any border & shadow. Leave as undefined to display as a default panel. Selectable cards will always display as a default panel
   */
  display: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger", "subdued", "plain", "transparent"]),

  isDisabled: PropTypes.bool,

  /**
   * Use a border style of card instead of shadow
   */
  hasBorder: PropTypes.bool,
};

export default Card;
