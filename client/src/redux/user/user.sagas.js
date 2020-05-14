import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import {
    signInSuccsess,
    signInFailuare,
    signOutFailure,
    signOutSucsses,
    signUpSucsses,
    signUpFailuare,
} from './user.action';


export function* getSnapShotFromUserAuth(userAuth, additinoalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additinoalData);
        const userSnapShot = yield userRef.get();
        yield put(
            signInSuccsess({ id: userSnapShot.id, ...userSnapShot.data() })
        )
    } catch (error) {
        yield put(signInFailuare(error))
    }
}



export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailuare(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailuare(error))
    }
}

export function* isUserAuthanticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailuare(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSucsses())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSucsses({ user, additinoalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailuare(error))
    }

}

export function* signInAfterSignUp({ payload: { user, additinoalData } }) {
    yield getSnapShotFromUserAuth(user, additinoalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthanticated)
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSucsses() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCSSES, signInAfterSignUp)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSucsses),
    ]);
}