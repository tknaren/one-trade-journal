import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link collapsed">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/daily-homework" className="nav-link collapsed">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Daily Homework</span>
                    </Link>                    
                </li>

                <li className="nav-item">
                    <Link to="/journal" className="nav-link collapsed">
                        <i className="bi bi-journal-text"></i>
                        <span>Journal</span>
                    </Link>                    
                </li>

                <li className="nav-item">
                    <Link to="/trade-bill" className="nav-link collapsed">
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Trade Bill</span>
                    </Link>                                        
                </li>

                <li className="nav-item">
                    <Link to="/weekly-scan" className="nav-link collapsed">
                        <i className="bi bi-bar-chart"></i>
                        <span>Weekly Scan</span>
                    </Link>         
                </li>

                </ul>

            </aside>

        );
    }
}
 
export default SideBar;
  