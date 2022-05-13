import React from "react";
import PropTypes from "prop-types";
import { EuiStat } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/display/stat
 */
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
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.oneOf(["xs", "s", "m", "l", "xxxs", "xxs"]),
  titleElement: PropTypes.string,
  descriptionElement: PropTypes.string,
  className: PropTypes.string,
};

export default Stat;
