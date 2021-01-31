import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream, sellIceCream } from "../actions/ice_creamActions";

const IceCream = () => {
    const iceCream = useSelector((state) => state.iceCream);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number of IceCreams = {iceCream.numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
            <button onClick={() => dispatch(sellIceCream())}>Sell Ice Cream</button>
        </div>
    );
};

export default IceCream;
