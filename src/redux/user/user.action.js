import UserActionsTypes from "./user.types"


export const googleSignInStart = () => ({
    type: UserActionsTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
    type: UserActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccsess = user => ({
    type: UserActionsTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailuare = error => ({
    type: UserActionsTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionsTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionsTypes.SIGN_OUT_START
})

export const signOutSucsses = () => ({
    type: UserActionsTypes.SIGN_OUT_SUCSSES
})

export const signOutFailure = error => ({
    type: UserActionsTypes.SIGN_OUT_FAILURE,
    payload: error
})

