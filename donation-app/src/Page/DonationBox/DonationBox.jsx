import React, {Component} from 'react';

export default class DonationBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }


    render() {

        return (
            <div>
                <h3>Donation</h3>

                <div className="card">
                    <p>Join the {}</p>

                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    <button type="button" className="da-success">Give Now</button>
                </div>
                <button type="button">Save for later</button>
                <button type="button">Tell your friends</button>
            </div>
        );
    }
}