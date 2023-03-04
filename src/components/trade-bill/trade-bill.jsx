import React, { Component } from 'react';

class TradeBill extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trade Bill</h5>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Trade Identification
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">




                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Trade Apgar
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="card col-lg-3">
                                                    <div className="card-body">
                                                    <h5 className="card-title">Parameters</h5>

                                                    <ul className="list-group">
                                                        <li className="list-group-item list-group-item-primary">Weekly MACD</li>
                                                        <li className="list-group-item ">Weekly Impulse</li>
                                                        <li className="list-group-item list-group-item-primary">Daily Impulse</li>
                                                        <li className="list-group-item ">Price vs 50 EMA</li>
                                                        <li className="list-group-item list-group-item-primary">Daily Force Index</li>
                                                    </ul>

                                                    </div>
                                                </div>

                                                <div className="card col-lg-5">
                                                    <div className="card-body">
                                                    <h5 className="card-title">Values</h5>

                                                    <ul class="list-group list-group-horizontal" id="list-tab1" role="tablist1">
                                                    <li class="list-group-item list-group-item-danger list-group-item-action" data-bs-toggle="list">Winter/Autumn</li>
                                                    <li class="list-group-item list-group-item-warning list-group-item-action" data-bs-toggle="list">Summer</li>
                                                    <li class="list-group-item list-group-item-success list-group-item-action" data-bs-toggle="list">Spring</li>
                                                    </ul>
                                                    <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item list-group-item-danger list-group-item-action">Red</li>
                                                    <li class="list-group-item list-group-item-warning list-group-item-action">Green</li>
                                                    <li class="list-group-item list-group-item-success list-group-item-action">Blue (Af Red)</li>
                                                    </ul>
                                                    <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item list-group-item-danger list-group-item-action">Green</li>
                                                    <li class="list-group-item list-group-item-warning list-group-item-action">Blue</li>
                                                    <li class="list-group-item list-group-item-success list-group-item-action">Red</li>
                                                    </ul>
                                                    <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item list-group-item-danger list-group-item-action">Above</li>
                                                    <li class="list-group-item list-group-item-warning list-group-item-action">Near</li>
                                                    <li class="list-group-item list-group-item-success list-group-item-action">Below</li>
                                                    </ul>
                                                    <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item list-group-item-danger list-group-item-action">Above zero</li>
                                                    <li class="list-group-item list-group-item-warning list-group-item-action">Center</li>
                                                    <li class="list-group-item list-group-item-success list-group-item-action">Below Zero</li>
                                                    </ul>

                                                    </div>
                                                </div> 

                                                <div className="card col-lg-1">
                                                    <div className="card-body">
                                                    <h5 className="card-title">Score</h5>

                                                    <ul className="list-group">
                                                        <li className="list-group-item">2</li>
                                                        <li className="list-group-item">1</li>
                                                        <li className="list-group-item">2</li>
                                                        <li className="list-group-item">1</li>
                                                        <li className="list-group-item">1</li>
                                                    </ul>

                                                    </div>
                                                </div>
                                                <div className="card col-lg-2">
                                                    <div className="card text-bg-success">
                                                    <div className="card-header"><h5 className="card-title">Total Score</h5></div>
                                                    <div className="card-body">
                                                        <h1 className="card-title" style={{fontSize:100}}>9</h1>
                                                    </div>
                                                    </div>                                                
                                                </div>
                                            </div>
                                        </div>                                     

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Risk Management
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Channels
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div> 
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    After the Entry
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>                                                        
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
 
export default TradeBill;