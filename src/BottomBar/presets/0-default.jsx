import * as React from "react";
import FlexGroup from "../../FlexGroup/FlexGroup";
import FlexItem from "../../FlexItem/FlexItem";
import Button from "../../Button/Button";

export default (
    <FlexGroup uxpId="flex-group1" justifyContent="spaceBetween">
        <FlexItem uxpId="flex-item1" grow={false}>
            <FlexGroup uxpId="flex-group2" gutterSize="s">
                <FlexItem uxpId="flex-item2" grow={false}>
                    <Button uxpId="button1" color="ghost" size="s" iconType="help">
                    Help
                    </Button>
                </FlexItem>
                <FlexItem uxpId="flex-item3" grow={false}>
                    <Button uxpId="button2" color="ghost" size="s" iconType="user">
                    Add user
                    </Button>
                </FlexItem>
            </FlexGroup>
        </FlexItem>
        <FlexItem uxpId="flex-item4" grow={false}>
            <FlexGroup uxpId="flex-group3" gutterSize="s">
                <FlexItem uxpId="flex-item5"grow={false}>
                    <Button uxpId="button3" color="ghost" size="s" iconType="cross">
                    Discard
                    </Button>
                </FlexItem>
                <FlexItem uxpId="flex-item6" grow={false}>
                    <Button uxpId="button4" color="primary" fill size="s" iconType="check">
                    Save
                    </Button>
                </FlexItem>
            </FlexGroup>
        </FlexItem>
    </FlexGroup>
);
