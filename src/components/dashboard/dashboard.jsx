import React, { Component } from 'react';
import { Button } from 'primereact/button';   

class Dashboard extends Component {
    state = { 
        count: 0,
        tags: ['one','two','three']
     } 

    // constructor(){
    //     super();
    //     console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 
        return (
            <div>
                <p>Dashboard</p>
                <span className='badge badge-primary m-2'>{ this.formatCount() }</span>
                {/* Simply pass the reference of the method to the click event  */}
                <button onClick = {this.handleIncrement} className='btn btn-primary'>Increment</button>
                <div>
                    { this.renderTags() }
                </div>

                <Button label="Check" size="sm" />
            </div>    
        );
    }

    handleIncrement = () => {
        console.log('please log ', this);
    }
    
    renderTags(){
        if (this.state.count === 0) return <p>No Tags!</p>

        return <ul>{ this.state.tags.map (tag => <li key={tag}> { tag } </li>)}</ul>
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}
 

export default Dashboard;