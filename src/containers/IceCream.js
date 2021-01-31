import React from "react";
import { connect } from "react-redux";
import { buyIceCream, sellIceCream } from "../actions/ice_creamActions";

const IceCream = (props) => {
    return (
        <div>
            <h1>Number of IceCreams = {props.numOfIceCreams}</h1>
            <button onClick={() => props.dispatch(buyIceCream())}>
                Buy Ice Cream
            </button>
            <button onClick={() => props.dispatch(sellIceCream(3))}>
                Sell Ice Cream
            </button>
        </div>
    );
};

export default connect((state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams,
    };
})(IceCream);
