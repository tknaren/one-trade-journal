import React, { Component } from 'react';
import Profile from './profile/profile';
import Notification from './notification/notification';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header id="header" className="header fixed-top d-flex align-items-center">
          
              <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src="assets/img/logo.png" alt=""></img>
                  <span className="d-none d-lg-block">Trade Genie</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
              </div>
          
              <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                  <input type="text" name="query" placeholder="Search" title="Enter search keyword"></input>
                  <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
              </div>
          
              <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <Notification></Notification>
                    {/* Notifications component comes here */}

                    <Profile></Profile>
                    {/* profile component comes here */}
          
                </ul>
              </nav>
          
            </header>            
        );
    }
}
 
export default Header;