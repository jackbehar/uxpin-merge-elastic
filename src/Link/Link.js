import React from 'react';
import PropTypes from 'prop-types';
import { EuiLink } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/navigation/link
 */
function Link(props) {
    return (
    <div>
        <EuiLink 
            {...props} 
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}>
            {props.children}
        </EuiLink>
    </div>
        );
}

Link.propTypes = {
    /**
     * @uxpinpropname text
     */
    children: PropTypes.node,

    href: PropTypes.string,

    className: PropTypes.string,

    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    type: PropTypes.oneOf(['button', 'reset', 'submit']),

    color: PropTypes.oneOf(["text", "primary", "accent", "success", "warning", "danger", "ghost", "subdued"]),
    
    external: PropTypes.boolean,
    
    ref: PropTypes.element,

    onClick: PropTypes.func,
}

export default Link;