import React from 'react';
import PropTypes from 'prop-types';
import { EuiToast } from '@elastic/eui';
import { iconList} from '../Icon/iconList/iconList';

function Toast(props) {
    return (
        <EuiToast 
            {...props} 
            aria-label={props.ariaLabel}
            data-test-subj={props.dataTestSubj}
        >
            {props.children}
        </EuiToast>);
}

Toast.propTypes = {
    title: PropTypes.string,

    children: PropTypes.node,

    className: PropTypes.string,

    ariaLabel: PropTypes.string,

    dataTestSubj: PropTypes.string,

    color: PropTypes.oneOf(["primary", "success", "warning", "danger"]),

    iconType: PropTypes.oneOf(iconList),

    onClose: PropTypes. func,

}

Toast.defaultProps = {
    onClose: () => undefined
}

export default Toast;