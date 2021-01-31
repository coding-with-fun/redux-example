export const buyCake = (number) => {
    return {
        type: "BUY_CAKE",
        payload: {
            number: number || 1,
        },
    };
};

export const sellCake = (number) => {
    return {
        type: "SELL_CAKE",
        payload: {
            number: number || 1,
        },
    };
};
