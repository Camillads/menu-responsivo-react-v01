import React from 'react';

import './SideDrawer.css';

const slideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">PRODUCTS</a></li>
                <li><a href="/">USERS</a></li>
            </ul>
        </nav>
    );
}

export default slideDrawer;