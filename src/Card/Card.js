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
  children: PropTypes.node,
  title: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.node,
  titleElement: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6", "span"]),
  titleSize: PropTypes.oneOf(["xs", "s"]),
  description: PropTypes.node,
  image: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  layout: PropTypes.oneOf(["horizontal", "vertical"]),
  heading: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  color: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger"]),
  size: PropTypes.oneOf(["s", "m"]),
  iconType: PropTypes.oneOf(iconList),
  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  rel: PropTypes.string,
  betaBadgeProps: PropTypes.object,
  display: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger", "subdued", "plain", "transparent"]),
  selectable: PropTypes.Object, // EuiCardSelectProps e.g - selectable={{ onClick: card2Clicked, isSelected: card2Selected }}
  hasBorder: PropTypes.bool,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
  ref: PropTypes.element,
  onClick: PropTypes.func,
};



export default Card;
