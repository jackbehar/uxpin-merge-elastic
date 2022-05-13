import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { EuiAccordion, useGeneratedHtmlId } from '@elastic/eui';

function Accordion(props) {
     const accordionId = useGeneratedHtmlId({ prefix: props.id });

     const [isAccordionOpen, setIsAccordionOpen] = useState(props.forceState);

     // For preview
     const handleToggle = (isOpen) => {
          const newState = isOpen ? 'open' : 'closed';
          setIsAccordionOpen(newState);
     }

     // For editor - [WIP]
     React.useEffect(() => setIsAccordionOpen(props.forceState), [props.forceState] );

     return (
          <EuiAccordion 
               {...props}
               onToggle={handleToggle} 
               forceState={isAccordionOpen}
               id={accordionId}>
                    {props.children}
          </EuiAccordion>
     );
}

Accordion.propTypes = {
     /**
      * @uxpinignoreprop
      */
     children: PropTypes.node,

     /**
      * A unique identifier
      */
     id: PropTypes.string,

     className: PropTypes.string,

     /**
      * Class that will apply to the trigger for the accordion.
      */
     buttonClassName: PropTypes.string,

     /**
      * Class that will apply to the trigger content for the accordion.
      */
     buttonContentClassName: PropTypes.string,

     /**
      * Defines a string value that labels the current element. See aria-labelledby.
      */
     "aria-label": PropTypes.string,

     "data-test-subj": PropTypes.string,

     /**
      * The content of the clickable trigger
      */
     buttonContent: PropTypes.node,

     /**
      * Will appear right aligned against the button. Useful for separate actions like deletions.
      */
     extraAction: PropTypes.node,

     /**
      * Choose whether the loading message replaces the content. Customize the message by passing a node
      */
     isLoadingMessage: PropTypes.node,

     /**
      * Applied to the entire .euiAccordion wrapper. When using fieldset, it will enforce buttonElement = legend as well.
      */
     element: PropTypes.oneOf(["div", "fieldset"]),

     // buttonProps: CommonProps & HTMLAttributes<HTMLElement>

     /**
      * Applied to the main button receiving the onToggle event. Anything other than the default button does not support removing the arrow display (for accessibility of focus).
      */
     buttonElement: PropTypes.oneOf(["button", "div", "legend"]),

     /**
      * The padding around the exposed accordion content.
      */
     paddingSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none"]),

     /**
      * Placement of the arrow indicator, or 'none' to hide it.
      */
     arrowDisplay: PropTypes.oneOf(["left", "right", "none"]),

     /**
      * Control the opening of accordion via prop
      */
     forceState: PropTypes.oneOf(["closed", "open"]),
     /**
      * Extra props to pass to the EuiButtonIcon containing the arrow.
      */
     arrowProps: PropTypes.object, // Partial<Omit<EuiButtonIconProps, "iconType" | "onClick" | "aria-labelledby">>

     /**
      * The accordion will start in the open state.
      */
     initialIsOpen: PropTypes.bool,

     /**
      * Change extraAction and children into a loading spinner
      */
     isLoading: PropTypes.bool,
     
     /**
      * Optional callback method called on open and close with a single isOpen parameter
      * @uxpinignoreprop
      */
     onToggle: PropTypes.func,
};


export default Accordion;
