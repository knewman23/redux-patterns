import React from 'react'
import { Helmet } from 'react-helmet';

export default function SiteHeader({ title, subtitle }: any) {

    if (subtitle) {
        title = title + " - " + subtitle;
    }

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}
