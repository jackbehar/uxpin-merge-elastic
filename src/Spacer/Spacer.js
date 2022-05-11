import React from 'react';
import PropTypes from 'prop-types';
import { EuiSpacer } from '@elastic/eui';

function Spacer(props) {
    return <EuiSpacer {...props} data-test-subj={props.dataTestSubj} />
}

Spacer.propTypes = {
    className: PropTypes.string,
    
    /**
     * Defines a string value that labels the current element. @see aria-labelledby.
     */
    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    size: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl"])
}

export default Spacer;