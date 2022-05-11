import React from 'react';
import PropTypes from 'prop-types';
import { EuiFacetButton } from '@elastic/eui';

function Facet(props) {
    return (
        <EuiFacetButton 
            {...props}
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}
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
    icon: PropTypes.node,

    onClick: PropTypes.func,
}

export default Facet;