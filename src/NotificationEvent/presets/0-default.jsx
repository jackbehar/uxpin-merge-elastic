import React from 'react';
import NotificationEvent from '../NotificationEvent';
import Panel from '../../Panel/Panel';

export default (
        <NotificationEvent 
            uxpId="notification"
            id="reportNotificationEvent"
            title="[Error Monitoring Report] is generated"
            primaryAction="Download"
            messages={['The reported was generated at 17:12:16 GMT+4']}
            type="Alert"
            iconType= "logoMaps"
            iconAriaLabel="Maps"
            time="1 min ago" />
)