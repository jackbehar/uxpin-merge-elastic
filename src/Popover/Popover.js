import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EuiPopover } from '@elastic/eui';
import Button from '../Button/Button';
import Text from '../Text/Text';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/popover
 */
function Popover(props) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const onButtonClick = () => {
        setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
    }

    const closePopover = () => setIsPopoverOpen(false);

    const button = (
        <Button iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
            {props.label}
        </Button>
    )

    return (
        <EuiPopover 
            {...props}
            button={button}
            isOpen={isPopoverOpen}
            closePopover={closePopover}
            aria-label={props.ariaLabel}
            data-test-subj={props.string}
        >
            <Text style={{ width: 300 }}>
                <p>{props.children}</p>
            </Text>
        </EuiPopover>
    );
}

Popover.propTypes = {
    label: PropTypes.string,
    
    /**
     * @uxpinpropname content
     */
    children: PropTypes.node,

    /**
     * Show arrow indicating to originating button
     */
    hasArrow: PropTypes.bool,

    className: PropTypes.string,

    /**
     * Defines a string value that labels the current element. Provide a name to the popover panel @see aria-labelledby.
     */
    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    /**
     * Class name passed to the direct parent of the button
     */
    anchorClassName: PropTypes.string,

    /**
     * Alignment of the popover and arrow relative to the button
     */
    anchorPosition: PropTypes.oneOf(
        [
            "downLeft", 
            "upCenter", 
            "upLeft", 
            "upRight", 
            "downCenter", 
            "downRight", 
            "leftCenter", 
            "leftUp", 
            "leftDown", 
            "rightCenter", 
            "rightUp", 
            "rightDown"]),

    /**
     * Style and position alteration for arrow-less, left-aligned attachment. Intended for use with inputs as anchors, e.g. EuiInputPopover 
     * */        
    attachToAnchor: PropTypes.bool,

    /**
     * Style and position alteration for arrow-less, left-aligned attachment. Intended for use with inputs as anchors, e.g. EuiInputPopover
     * @uxpinignoreprop
     */
    button: PropTypes.node,

    /**
     * CSS display type for both the popover and anchor
     */
    display: PropTypes.oneOf(['inlineBlock', 'block']),

    buttonRef: PropTypes.func,

    /**
     * Callback to handle hiding of the popover
     */
    closePopover: PropTypes.func.isRequired,

    /**
     * Restrict the popover's position within this element
     */
    container: PropTypes.element,

    /**
     * Object of props passed to EuiFocusTrap
     */
    focusTrapProps: PropTypes.oneOf(['shards', 'scrollLock', 'noIsolation', 'clickOutsideDisables']),

}

export default Popover;

