import React, { Component } from 'react';

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

                <section className="section dashboard">
                    <div className="row">

                        {/* The page content goes here */}

                    </div>
                </section>

            </main>	  
           
        );
    }
}
 
export default Main;

