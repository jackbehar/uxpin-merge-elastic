import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  EuiBottomBar,
} from '@elastic/eui';
import Button from '../Button/Button';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/layout/bottom-bar
 */
function BottomBar(props) {
   const [showBar, setShowBar] = useState(false);

   const button = (
     <Button color="primary" onClick={() => setShowBar((show) => !show)}>
       {props.buttonText}
     </Button>
   );
 
   let bottomBar;
   if (showBar) {
     bottomBar = (
       <EuiBottomBar>
         {props.children}
       </EuiBottomBar>
     );
   }
 
   return (
     <div>
       {button}
       {bottomBar}
     </div>
   );
}

BottomBar.propTypes = {
   children: PropTypes.node,
   buttonText: PropTypes.string,
   usePortal: PropTypes.bool,
   affordForDisplacement: PropTypes.bool,
   position: PropTypes.oneOf(["fixed", "static", "sticky"]),
   paddingSize: PropTypes.oneOf(["s", "m", "l", "none"]),
   bodyClassName: PropTypes.string,
   landmarkHead: PropTypes.string,
   top: PropTypes.string | PropTypes.number,
   right: PropTypes.string | PropTypes.number,
   bottom: PropTypes.string | PropTypes.number,
   left: PropTypes.string | PropTypes.number,
   ref: PropTypes.element,
   className: PropTypes.string,
   "aria-label": PropTypes.string,
   "data-test-subj": PropTypes.string,
};

export default BottomBar;
