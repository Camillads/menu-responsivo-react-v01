import React from 'react';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="navigation">
                <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default toolbar;