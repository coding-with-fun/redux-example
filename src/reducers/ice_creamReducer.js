const initialState = {
    numOfIceCreams: 10,
};

const ice_creamReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_ICE_CREAM":
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload.number,
            };
        case "SELL_ICE_CREAM":
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload.number,
            };
        default:
            return state;
    }
};

export default ice_creamReducer;
