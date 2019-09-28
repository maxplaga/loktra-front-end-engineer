import React, {Component} from 'react';

export default class DonationBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNeeded: 1000,
            totalReached: 0,
            donationsCount: 43,
            amountToDonate: 50,
            value: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            value: this.state.amountToDonate,
            totalReached: 300,
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        this.setState({
            totalReached: this.state.totalReached + this.state.value,
        });
        event.preventDefault();
    };

    render() {
        const totalLeft = this.state.totalNeeded - this.state.totalReached;
        return (
            <div>
                <h3>Donation</h3>

                <div className="card">
                    <p>Amount donated so far: ${this.state.totalReached}</p>
                    <p>Needed amount left: ${totalLeft}</p>
                    <p>Add to the <b>{this.state.donationsCount}</b>   other donations that kind people like yourself already contributed.</p>

                        <form id="da-form-donation" onSubmit={this.handleSubmit}>
                            <label>
                                $
                                <input type="number" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <button type="button" className="da-success" onClick={this.handleSubmit}>Give Now</button>
                        </form>
                </div>
                <button type="button">Save for later</button>
                <button type="button">Tell your friends</button>
            </div>
        );
    }
}