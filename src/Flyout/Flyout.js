import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  useGeneratedHtmlId,
} from '@elastic/eui';
import Button from '../Button/Button';
import Title from '../Title/Title';

function Flyout(props) {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const simpleFlyoutTitleId = useGeneratedHtmlId({
    prefix: props.id,
  });

  let flyout;

  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={() => setIsFlyoutVisible(false)}
        aria-labelledby={simpleFlyoutTitleId}
      >
        <EuiFlyoutHeader hasBorder>
          <Title size="m">
            <h2 id={simpleFlyoutTitleId}>{props.titleText}</h2>
          </Title>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          {props.children}
        </EuiFlyoutBody>
      </EuiFlyout>
    );
  }

  return (
    <div>
      <Button onClick={() => setIsFlyoutVisible(true)}>
        {props.buttonText}
      </Button>
      {flyout}
    </div>
  );
}

Flyout.propTypes = {
  children: PropTypes.node, 
  titleText: PropTypes.string,
  buttonText: PropTypes.string,
  id: PropTypes.string,
  as: PropTypes.elementType,
  size: PropTypes.string | PropTypes.number,
  maxWidth: PropTypes.string | PropTypes.number | PropTypes.bool,
  paddingSize: PropTypes.oneOf(["s", "m", "l", "none"]),
  ownFocus: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  closeButtonAriaLabel: PropTypes.string,
  closeButtonProps: PropTypes.object,
  maskProps: PropTypes.object,
  type: PropTypes.oneOf(["push", "overlay"]),
  outsideClickCloses: PropTypes.bool,
  side: PropTypes.oneOf(["left", "right"]),
  role: PropTypes.string,
  pushMinBreakpoint: PropTypes.number | PropTypes.object,
  style: PropTypes.object,
  focusTrapsProps: PropTypes.object,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
};



export default Flyout;
