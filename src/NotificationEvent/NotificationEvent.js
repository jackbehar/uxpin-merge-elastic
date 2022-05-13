import React from 'react';
import PropTypes from 'prop-types';
import { EuiNotificationEvent, EuiContextMenuItem } from '@elastic/eui';
import Panel from '../Panel/Panel';
import { iconList } from '../Icon/iconList/iconList';

function NotificationEvent(props) {
    const [isRead, setIsRead] = React.useState(false);

    const onRead = (id, isRead) => {
        setIsRead(!isRead);
    };

    const onOpenContextMenu = (id) => {
        return [
        <EuiContextMenuItem
            key="contextMenuItemA"
            onClick={() => onRead(id, isRead)}
        >
            {isRead ? 'Mark as unread' : 'Mark as read'}
        </EuiContextMenuItem>,
    
        <EuiContextMenuItem key="contextMenuItemB" onClick={() => {}}>
            View messages like this
        </EuiContextMenuItem>,
    
        <EuiContextMenuItem key="contextMenuItemC" onClick={() => {}}>
            Don’t notify me about this
        </EuiContextMenuItem>,
        ];
    };

    return (
    <Panel paddingSize="none" hasShadow={true} style={{ maxWidth: '540px' }}>
        <EuiNotificationEvent 
            {...props} 
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}
            aria-labelledy={props.ariaLabelledby}
            isRead={isRead | props.isRead}
            onRead={onRead}
            onOpenContextMenu={onOpenContextMenu}
            onClickPrimaryAction={() => {}}
            onClickTitle={() => {}} />
    </Panel>
    );
}

NotificationEvent.propTypes = {
    /**
     * A unique identifier
     */
    id: PropTypes.string,

    /**
     * The title of the event.
     */
    title: PropTypes.string,


    className: PropTypes.string,
    
    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    ariaLabelledby: PropTypes.string,
    /**
     * Indicates when the event was received.
     */
    time: PropTypes.node,

    /**
     * Disables the button and changes the icon to a loading spinner
     */
    isLoading: PropTypes.bool,

    /**
     * Shows an indicator of the read state of the event. Leave as undefined to hide the indicator.
     */
    isRead: PropTypes.bool,

    /**
     * Returns the id and isRead state. Applies an onClick handler to the read indicator.
     */
    onRead: PropTypes.func,

    /**
     * The icon used to visually represent this data type. Accepts any EuiIcon IconType.
     */
    iconType: PropTypes.oneOf(iconList),

    /**
     * Type of event (e.g. "Alert", "Cloud", etc..). Shows inside a badge.
     */
    type: PropTypes.string,

    /**
     * Type of severity (e.g. "Critical", "Warning", etc..). Shows as a text after the type following the format "Alert: Critical".
     */
    severity: PropTypes.string,

    /**
     * Accepts either our palette colors (primary, success ..etc) or a hex value #FFFFFF, #000.
     */
    badgeColor: PropTypes.string,

    /**
     * Specify an aria-label for the icon. If no aria-label is passed we assume the icon is purely decorative.
     */
    iconAriaLabel: PropTypes.string,

    /**
     * The label of the primary action
     */
    primaryAction: PropTypes.string,
    
    /**
     * Notification messages as an array of strings. More than one message wraps in an accordion.
     */
    messages: PropTypes.arrayOf(PropTypes.string),

    /**
     * Size of the icon only. This will not affect the overall size of the button
     */
    iconSize: PropTypes.oneOf(["s", "m", "l", "xl", "original", "xxl"]),

    /**
     * Sets the display style for matching other EuiButton types. 
     * base is equivalent to a typical EuiButton fill is equivalent to a filled EuiButton empty (default) is equivalent to an EuiButtonEmpty
     */
    display: PropTypes.oneOf(["base", "fill", "empty"]),

    /**
     * The heading level of the title.
     */
    headingLevel: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6"]),

    /**
     * Returns the id and applies an onClick handler to the title.
     */
    onClickTitle: PropTypes.func,
    
    /**
     * Returns the id and applies an onClick handler to the primaryAction.
     */
    onClickPrimaryAction: PropTypes.func,

    /**
     * Provided the id of the event must return an array of EuiContextMenuItem elements.
     */
    onOpenContextMenu: PropTypes.func,

}

export default NotificationEvent;