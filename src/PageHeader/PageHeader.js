import { EuiPageHeader } from '@elastic/eui';
import PropTypes from "prop-types";
import React from 'react';
import { iconList } from '../Icon/iconList/iconList';
import Button from '../Button/Button';

function PageHeader(props) {
    return <EuiPageHeader {...props} aria-label={props.ariaLabel} data-test-subj={props.dataTestSubj}rightSideItems={[
        <Button  fill>Add something</Button>,
        <Button >Do something</Button>,
    ]} ></EuiPageHeader>
}

PageHeader.propTypes = {
    className: PropTypes.string,

    dataTestSubj: PropTypes.string,

    /**
     * Set to false if you don't want the children to stack at small screen sizes. 
     * Set to reverse to display the right side content first for the sake of hierarchy (like global time)
     */
    responsive: PropTypes.bool,

    ariaLabel: PropTypes.string,
    /**
     * Adds a bottom border to separate it from the content after
     */
    bottomBorder: PropTypes.bool,
    /**
     * Adjust the padding. When using this setting it's best to be consistent throughout all similar usages
     */
    paddingSize: PropTypes.oneOf(['none', 's', 'm', 'l']),

    /**
     * Vertical alignment of the left and right side content; Default is middle for custom content, but top for when pageTitle or tabs are included
     */
    alignItems: PropTypes.oneOf(["center", "top", "bottom", "stretch"]),

    /**
     * Pass custom an array of content to this side usually up to 3 buttons. 
     * The first button should be primary, usually with fill and will be visually displayed as the last item, but first in the tab order
     */
    rightSideItems: PropTypes.arrayOf(PropTypes.node),

    /**
     * Position is dependent on existing with a pageTitle or tabs Automatically get wrapped in a single paragraph tag inside an EuiText block
     */
    description: PropTypes.node,

    /**
     * Optional icon to place to the left of the title
     */
    iconType: PropTypes.oneOf(iconList),

    /**
     * Optional array breadcrumbs that render before the pageTitle
     */
    breadcrumbs: PropTypes.arrayOf(PropTypes.node),
    
    /**
     * In-app navigation presented as large borderless tabs. Accepts an array of Tab[]
     */
    tabs: PropTypes.arrayOf(PropTypes.object),

    /**
     * Sets the max-width of the page, set to true to use the default size of 1000px (1200 for Amsterdam), set to false to not restrict the width, 
     * set to a number for a custom width in px, set to a string for a custom width in custom measurement.
     */
    restrictWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
}

export default PageHeader;