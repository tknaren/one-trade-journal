import React, { Component } from 'react';
import { alphaVant } from '../../config/config';

class StockRow extends Component {

    // called during initialization
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    // to populate the data object, we need to call an lifecyle event 
    // this will get trigerred when the page is essentially loaded
    componentDidMount() {
        //query the API
        const url = `${alphaVant.base_url}?function=EMA&symbol=${this.props.ticker}&interval=daily&time_period=13&series_type=close&apikey=${alphaVant.api_token}`
        
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    data: data
                });                
            })
    }

    // whenever the state changes React is going to render the data
    render() {
        return (
            <tr>
                <td>{ this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
            </tr>
        );
    }
}

export default StockRow;
