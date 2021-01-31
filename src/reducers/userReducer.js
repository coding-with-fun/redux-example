const initialState = {
    loading: false,
    users: [],
    error: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return {
                ...state,
                loading: true,
            };

        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload.users,
                loading: false,
            };

        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };

        default:
            return state;
    }
};

export default userReducer;
