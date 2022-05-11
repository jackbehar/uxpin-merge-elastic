import React from 'react';
import PropTypes from 'prop-types';
import { EuiPanel } from '@elastic/eui';

function Panel(props) {
    return (
        <EuiPanel 
            {...props} 
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}
        >
            {props.element}
        </EuiPanel>);
}

Panel.propTypes = {
    element: PropTypes.element,

    className: PropTypes.string,

    ariaLabel: PropTypes.string,
    
    dataTestSubj: PropTypes.string,

    /**
     * Adds a medium shadow to the panel; Only works when color="plain"
     */
    hasShadow: PropTypes.bool,

    /**
     * When true the panel will grow in height to match EuiFlexItem
     */
    grow: PropTypes.bool,

    /**
     * Adds a slight 1px border on all edges. 
     * Only works when color="plain | transparent" Default is undefined and will default to that theme's panel style
     */
    hasBorder: PropTypes.bool,

    /**
     * Padding for all four sides
     */
    paddingSize: PropTypes.oneOf(["none", "s", "m", "l"]),

    /**
     * Corner border radius
     */
    borderRadius: PropTypes.oneOf(["none", "m"]),

    panelRef: PropTypes.element,
    
    /**
     * Background color of the panel; Usually a lightened form of the brand colors
     */
    color: PropTypes.oneOf(["primary", "accent", "success", "warning", "danger", "subdued", "plain", "transparent"])
}

export default Panel;