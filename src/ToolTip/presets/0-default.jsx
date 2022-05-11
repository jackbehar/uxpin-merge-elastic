import * as React from "react";

import ToolTip from "../ToolTip";
import Button from "../../Button/Button";
import Text from "../../Text/Text";

export default (
    <ToolTip
        uxpId="tooltip1"
        position="top"
        content={
            <Text uxpId="text1">
                Works on any kind of element &mdash; buttons, inputs, you name it!
            </Text>
        }
        >
        <Button uxpId="button1" onClick={() => {}}>Hover me</Button>
    </ToolTip>

);
