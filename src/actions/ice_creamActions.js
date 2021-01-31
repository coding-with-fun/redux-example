export const buyIceCream = (number) => {
    return {
        type: "BUY_ICE_CREAM",
        payload: {
            number: number || 1,
        },
    };
};

export const sellIceCream = (number) => {
    return {
        type: "SELL_ICE_CREAM",
        payload: {
            number: number || 1,
        },
    };
};
