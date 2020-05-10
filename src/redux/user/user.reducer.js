import UserActionsTypes from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionsTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionsTypes.SIGN_IN_FAILURE:
        default:
            return {
                ...state,
                error: action.payload
            }
    }
}

export default userReducer;