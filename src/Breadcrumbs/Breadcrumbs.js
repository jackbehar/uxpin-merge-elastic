import React from "react";
import PropTypes from "prop-types";
import { EuiBreadcrumbs } from '@elastic/eui';

/**
 * @uxpindocurl https://elastic.github.io/eui/#/navigation/breadcrumbs
 */
function Breadcrumbs(props) {
  return (
    <EuiBreadcrumbs {...props} />
  );
}

Breadcrumbs.propTypes = {
  //   breadcrumbs: PropTypes.array
  /**
     * The array of individual #EuiBreadcrumb items
     */
  breadcrumbs: PropTypes.array,


  //   /**
  //      * Hides extra (above the max) breadcrumbs under a collapsed item as the window gets smaller.
  //      * Pass a custom #EuiBreadcrumbResponsiveMaxCount object to change the number of breadcrumbs to show at the particular breakpoints.
  //      *
  //      * Pass `false` to turn this behavior off.
  //      *
  //      * Default: `{ xs: 1, s: 2, m: 4 }`
  //      */
  responsive: PropTypes.bool,

  //   /**
  //      * Forces all breadcrumbs to single line and
  //      * truncates each breadcrumb to a particular width,
  //      * except for the last item
  //      */
  truncate: PropTypes.bool,

  //   /**
  //      * Collapses the inner items past the maximum set here
  //      * into a single ellipses item.
  //      * Omitting or passing a `0` value will show all breadcrumbs.
  //      */
  max: PropTypes.number,


  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
};

export default Breadcrumbs;
