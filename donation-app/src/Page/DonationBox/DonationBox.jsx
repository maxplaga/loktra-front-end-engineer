import React, {Component} from 'react';

export default class DonationBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNeeded: 1000,
            totalReached: 0,
            donationsCount: 43,
            amountToDonate: 0,
        };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            amountToDonate: 50,
            totalReached: 300,
        });
    }

    handleChange = (event) => {
        this.setState({amountToDonate: Number(event.target.value)});
    };

    handleSubmit = (event) => {
        const totalReached = this.state.totalReached + this.state.amountToDonate;
        this.setState({totalReached});
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
                    <p>Add to the <b>{this.state.donationsCount}</b> other donations that kind people like yourself already contributed.</p>

                        <form id="da-form-donation" onSubmit={this.handleSubmit}>
                            <label>
                                $
                                <input name="amount" type="number" value={this.state.amountToDonate} onChange={this.handleChange} />
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