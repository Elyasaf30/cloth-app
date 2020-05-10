import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignInSuccsess, SignInFailuare } from './user.action';


export function* getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put(
            SignInSuccsess({ id: userSnapShot.id, ...userSnapShot.data() })
        )
    } catch (error) {
        yield put(SignInFailuare(error))
    }
}



export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailuare(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailuare(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}