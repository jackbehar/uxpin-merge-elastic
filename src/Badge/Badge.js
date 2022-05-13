import React from "react";
import PropTypes from "prop-types";
import { EuiBadge } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList';

function Badge(props) {
     return (
          <EuiBadge {...props} />
     );
}

Badge.propTypes = {
     /**
 * The content of the badge
 * */
     children: PropTypes.node,

     /**
   * Accepts either our palette colors (primary, success ..etc) or a hex value `#FFFFFF`, `#000`.
   */
     color: PropTypes.oneOf(["default", "primary", "success", "accent", "warning", "danger", "text", "subdued", "ghost", "inherit"]),

     /**
        * Accepts any string from our icon library
        */
     iconType: PropTypes.oneOf(iconList),
     /**
        * The side of the badge the icon should sit
        */
     iconSide: PropTypes.oneOf(["left", "right"]),

     /**
        * Will override any color passed through the `color` prop.
        */
     isDisabled: PropTypes.bool,

     /**
        * Props passed to the close button.
        */
     closeButtonProps: PropTypes.object,
     className: PropTypes.string,
     "aria-label": PropTypes.string,
     "data-test-subj": PropTypes.string,



     /**
        * Aria label applied to the iconOnClick button
        */
     iconOnClickAriaLabel: PropTypes.string,



     /**
        * Aria label applied to the onClick button
        */
     onClickAriaLabel: PropTypes.string,
     href: PropTypes.string,
     target: PropTypes.string,
     rel: PropTypes.string,
     /**
         * Will apply an onclick to the badge itself
         */
     onClick: PropTypes.func,

     /**
     * Will apply an onclick to icon within the badge
     */
     iconOnClick: PropTypes.func,
};

export default Badge;
