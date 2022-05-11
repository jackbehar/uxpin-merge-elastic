import React from "react";
import PropTypes from "prop-types";
import { EuiStat } from '@elastic/eui';

function Stat(props) {
  return (
    <EuiStat 
      {...props} 
      aria-Label={props.ariaLabel}
      data-test-subj={props.dataTestSubj}>
    </EuiStat>
  );
}

Stat.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  isLoading: PropTypes.bool,
  reverse: PropTypes.bool, 
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  ariaLabel: PropTypes.string,
  dataTestSubj: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),
  titleElement: PropTypes.string,
  descriptionElement: PropTypes.string,
  className: PropTypes.string,
};

export default Stat;
