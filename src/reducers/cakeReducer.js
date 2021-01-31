const initialState = {
    numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload.number,
            };

        case "SELL_CAKE":
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload.number,
            };

        default:
            return state;
    }
};

export default cakeReducer;
