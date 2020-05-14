import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignUpSignInContainer } from "./sign-in-and-sign-up.style.js";

const SignInAndSignUpPage = () => (
  <SignUpSignInContainer>
    <SignIn />
    <SignUp />
  </SignUpSignInContainer>
);

export default SignInAndSignUpPage;
