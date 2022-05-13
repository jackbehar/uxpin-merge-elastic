import React from 'react';
import PropTypes from 'prop-types';
import { EuiFacetButton } from '@elastic/eui';
import { iconList } from '../Icon/iconList/iconList';
import Icon from '../Icon/Icon';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/navigation/facet
 */
function Facet(props) {
    return (
        <EuiFacetButton 
            {...props}
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}
            icon={props.icon == "none" ? null : <Icon type={props.icon} />}
        >
            {props.children}
        </EuiFacetButton>);
}

Facet.propTypes = {
    className: PropTypes.string,

    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    isDisabled: PropTypes.bool,

    /**
     * Adds/swaps for loading spinner & disables
     */
    isLoading: PropTypes.bool,

    /**
     * Changes visual of button to indicate it's currently selected
     */
    isSelected: PropTypes.bool,

    /**
     * Adds a notification indicator for displaying the quantity provided
     */
    quantity: PropTypes.number,

    buttonRef: PropTypes.element,
    /**
     * ReactNode to render as this component's content
     */
    children: PropTypes.node,

    /**
     * Any node, but preferably a EuiIcon or EuiAvatar
     */
    icon: PropTypes.oneOf(iconList),

    onClick: PropTypes.func,
}

Facet.defaultProps = {
    icon: "none",
}

export default Facet;