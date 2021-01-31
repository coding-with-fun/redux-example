import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, sellCake } from "../actions/cakeActions";

export class Cake extends Component {
    render() {
        return (
            <div>
                <h1>Number of Cake = {this.props.numOfCakes}</h1>
                <button onClick={this.props.buyCake}>Buy Cake</button>
                <button onClick={this.props.sellCake}>Sell Cake</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        sellCake: () => dispatch(sellCake()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
