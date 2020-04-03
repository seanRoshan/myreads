import React from 'react';

import './header.component.scss';

const HeaderComponent = (props) => {
    const {title} = props;
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
        </header>
    );
};

export default HeaderComponent;
