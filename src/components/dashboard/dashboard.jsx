import React, { Component } from 'react';
import { Button } from 'primereact/button';  
import StockRow from '../stock/stock-row'; 

function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className='container'>
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockRow ticker="USDEUR" />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;
