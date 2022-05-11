import * as React from "react";

import Accordion from "../Accordion";
import Panel from "../../Panel/Panel";

export default (
    <Accordion
        uxpId="accordion1"
        id="simpleAccordion1"
        buttonContent="Clickable title"
        arrowDisplay="right"
        >
            <Panel color="subdued">
                Any content inside of EuiAccordion will appear here.
            </Panel>
    </Accordion>
);
