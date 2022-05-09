import * as React from "react";

import Breadcrumbs from "../Breadcrumbs";

const breadcrumbs = [
    {
        text: 'Animals',
        href: '#',
        'data-test-subj': 'breadcrumbsAnimals',
    },
    {
        text: 'Reptiles',
    },
    {
        text: 'Boa constrictor',
        href: '#',
    },
    {
        text: 'Edit',
        href: '#',
    },
];

export default (

    <Breadcrumbs
        uxpId="breadcrumbs-1"
        truncate={true}
        breadcrumbs={breadcrumbs}
    />
);
