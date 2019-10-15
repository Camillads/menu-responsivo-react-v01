import React from 'react';

import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../../images/logo.svg';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><a href="/"> <img src={logo}></img> </a></div>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><a href="/">PRODUCTS</a></li>
                        <li><a href="/">USERS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default toolbar;