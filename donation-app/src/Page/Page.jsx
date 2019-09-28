import React, {Component} from 'react';
import "./Page.css";

import DonationBox from "./DonationBox/DonationBox";

export default class Page extends Component {
    render() {
        return (
            <div className="da-page">
                <h1>Donate</h1>
                <p>Donations are a very vital part of our existence. Thank you for helping us out!</p>
                <DonationBox/>
            </div>
        );
    }
}