import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { EuiAccordion, useGeneratedHtmlId } from '@elastic/eui';

function Accordion(props) {
     const accordionId = useGeneratedHtmlId({ prefix: props.id });

     const [isAccordionOpen, setIsAccordionOpen] = useState(isToggled);
     
     // issue: as this return true/ false it will not open/ close every click action due to forceState needing to be passed a value of Open/ Closed
     // This implementation needs to be redone
     const handleToggle = useCallback(() => setIsAccordionOpen(prevIsAccordionOpen => !prevIsAccordionOpen), [isAccordionOpen, props.forceState]);
     console.log(props.forceState, isAccordionOpen)

     React.useEffect(() => setIsAccordionOpen(props.forceState), [props]);

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
