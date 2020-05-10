import UserActionsTypes from "./user.types"


export const googleSignInStart = () => ({
    type: UserActionsTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
    type: UserActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const SignInSuccsess = user => ({
    type: UserActionsTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailuare = error => ({
    type: UserActionsTypes.SIGN_IN_FAILURE,
    payload: error
})

