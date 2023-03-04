import React, { Component } from 'react';
import {Routes, Route } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import Dashboard from '../../dashboard/dashboard';
import Journal from '../../journal/journal';
import TradeBill from '../../trade-bill/trade-bill';
import WeeklyScan from '../../weekly-scan/weekly-scan';
import DailyHomework from '../../daily-homework/daily-homework';

class Main extends Component {
    state = {  
        pageTitle : "Selected Page",
    } 
    render() { 
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>{this.state.pageTitle}</h1>
                    <nav>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">{this.state.pageTitle}</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        {/* The page content goes here */}
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route path="/journal" element={<Journal/>} />
                            <Route path="/daily-homework" element={<DailyHomework/>} />
                            <Route path="/trade-bill" element={<TradeBill/>} />
                            <Route path="/weekly-scan" element={<WeeklyScan/>} />
                            <Route path="/" element={<Dashboard/>} />
                        </Routes>
                    </div>
                </section>

            </main>	  
           
        );
    }
}
 
export default Main;

