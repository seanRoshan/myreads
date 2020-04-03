import React from 'react';

export const HeaderComponent = (props) => {
    const {title} = props;
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
        </header>
    );
};
