import React, { Component } from 'react';

class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link collapsed" href="index.html">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="index.html">
                    <i className="bi bi-menu-button-wide"></i>
                    <span>Daily Homework</span>
                    </a>                    
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="index.html">
                    <i className="bi bi-journal-text"></i>
                    <span>Journal</span>
                    </a>                    
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="index.html">
                    <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Trade Bill</span>
                    </a>                                        
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="index.html">
                    <i className="bi bi-bar-chart"></i>
                    <span>Weekly Scan</span>
                    </a>                                                            
                </li>

                </ul>

            </aside>

        );
    }
}
 
export default SideBar;
  