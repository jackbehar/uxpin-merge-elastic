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
     children: PropTypes.node,
     id: PropTypes.string,
     element: PropTypes.oneOf(["div", "fieldset"]),
     buttonClassName: PropTypes.string,
     // buttonProps: CommonProps & HTMLAttributes<HTMLElement>
     buttonContentClassName: PropTypes.string,
     buttonContent: PropTypes.node,
     buttonElement: PropTypes.oneOf(["button", "div", "legend"]),
     arrowProps: PropTypes.object, // Partial<Omit<EuiButtonIconProps, "iconType" | "onClick" | "aria-labelledby">>
     extraAction: PropTypes.node,
     initialIsOpen: PropTypes.bool,
     paddingSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none"]),
     arrowDisplay: PropTypes.oneOf(["left", "right", "none"]),
     forceState: PropTypes.oneOf(["closed", "open"]),
     isLoading: PropTypes.bool,
     isLoadingMessage: PropTypes.node,
     className: PropTypes.string,
     "aria-label": PropTypes.string,
     "data-test-subj": PropTypes.string,
     onToggle: PropTypes.func,
};


export default Accordion;
