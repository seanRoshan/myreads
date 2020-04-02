import React from 'react';
import Link from "@material-ui/core/Link";

import './footer.component.scss';

const FooterComponent = () => {
    return (
        <div>
            <footer className="main-footer">
                <span className="copy-right">
                    copyright © 2020 all rights reserved by
                    <Link href="https://www.seanroshan.com" target="_blank" className="copy-right-link">Sean Roshan</Link>
                </span>
            </footer>
        </div>
    );
};

export default FooterComponent;
