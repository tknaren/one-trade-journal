import React, { Component } from 'react';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import Main from './main/main';
import Footer from './footer/footer';

class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header></Header>
                <SideBar></SideBar>
                <Main></Main>
                <Footer></Footer>
            </div>
        );
    }
}
 
export default Layout;