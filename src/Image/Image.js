import { EuiImage } from '@elastic/eui';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/image
 */
function Image(props) {
    return (
    <EuiImage 
        {...props}
        aria-label={props.ariaLabel}
        data-test-subj={props.dataTestSubj} />
    );
}

Image.propTypes = {
    className: PropTypes.string,

    /**
     * When set to true (default) will apply a slight shadow to the image
     */
    hasShadow: PropTypes.bool,

    /**
     * When set to true will make the image clickable to a larger version
     */
    allowFullScreen: PropTypes.bool,
    
    /**
     * Defines a string value that labels the current element. @see aria-labelledby.
     */
    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    /**
     * Requires either src or url but defaults to using src if both are provided
     */
    src: PropTypes.string,

    url: PropTypes.string,

    /**
     * Separate from the caption is a title on the alt tag itself. This one is required for accessibility.
     */
    alt: PropTypes.string,

    /**
     * Float the image to the left or right. Useful in large text blocks.
     */
    float: PropTypes.oneOf(['left', 'right']),

    /**
     * Accepts s / m / l / xl / original / fullWidth / or a CSS size of number or string. 
     * fullWidth will set the figure to stretch to 100% of its container. 
     * string and number types will max both the width or height, whichever is greater.
     */
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'original', 'fullWidth']),

    /**
     * Margin around the image.
     */
    margin: PropTypes.oneOf(['s', 'm', 'l', 'xl']),

    fullScreenIconColor: PropTypes.oneOf(['light', 'dark']),

    /**
     * Provides the visible caption to the image
     */
    caption: PropTypes.node,

}

export default Image;

