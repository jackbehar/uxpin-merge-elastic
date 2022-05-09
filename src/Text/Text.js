import React from "react";
import PropTypes from "prop-types";
import { EuiText } from '@elastic/eui';

function Text(props) {
  return (
    <EuiText {...props} />
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(["xs", "s", "m", "relative"]),
  color: PropTypes.oneOf(["default", "accent", "success", "warning", "danger", "ghost", "subdued"]),
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  grow: PropTypes.bool,
};

export default Text;
