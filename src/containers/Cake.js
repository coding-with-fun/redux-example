import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, sellCake } from "../actions/cakeActions";

export class Cake extends Component {
    render() {
        return (
            <div>
                <h1>Number of Cake = {this.props.numOfCakes}</h1>
                <button onClick={() => this.props.dispatch(buyCake(3))}>
                    Buy Cake
                </button>
                <button onClick={() => this.props.dispatch(sellCake())}>
                    Sell Cake
                </button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    };
})(Cake);
