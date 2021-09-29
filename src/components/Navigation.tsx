import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './ui/Dropdown';

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand h2 flex-1">MOON</a>

            <div className="justify-content-center w-100 d-flex">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink
                            to="/library"
                            className="nav-link"
                            activeClassName="active"
                            title="Library"
                        >
                            Library
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink
                            to="/settings"
                            className="nav-link"
                            activeClassName="active"
                            title="Settings"
                        >
                            Settings
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink
                            to="/design"
                            className="nav-link"
                            activeClassName="active"
                            title="Design"
                        >
                            Design
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center">
                <div className="text-nowrap">Moon Labs</div>
                <Dropdown label="Moon User" />
            </div>
        </nav>
    );
}
