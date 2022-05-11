import * as React from "react";

import FlexGroup from "../FlexGroup";
import FlexItem from "../../FlexItem/FlexItem";
import Panel from "../../Panel/Panel";

export default (
    <FlexGroup uxpId="flex-group1" justifyContent="spaceEvenly">
        <FlexItem uxpId="flex-item1" grow={true}>
            <Panel uxpId="panel1">FlexItem content1</Panel>
        </FlexItem>
        <FlexItem uxpId="flex-item2" grow={false}>
            <Panel uxpId="panel2">FlexItem content1</Panel>
        </FlexItem>
    </FlexGroup>
);

