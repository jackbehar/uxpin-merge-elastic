import { EuiLoadingElastic } from '@elastic/eui';
import PropTypes from 'prop-types';
import React from 'react';

function LoadingElastic(props) {
    return (
        <div>
            <EuiLoadingElastic 
                {...props} 
                aria-label={props.ariaLabel} 
                data-test-subj={props.dataTestSubj} />
        </div>
    );
}

LoadingElastic.propTypes = {
    className: PropTypes.string,

    /**
     * Defines a string value that labels the current element. @see aria-labelledby.
     */
    ariaLabel: PropTypes.string,
    
    dataTestSubj: PropTypes.string,

    size: PropTypes.oneOf(['m', 'l', 'xl', 'xxl']),
}

export default LoadingElastic;