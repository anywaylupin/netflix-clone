import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Account } from "../components/index.js";
import * as ROUTES from "../routes/route.js";

export default function SignUpContainer() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || email === "";
  const handleSignUp = (event) => {
    event.preventDefault();

    //firebase Promise
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(ROUTES.BROWSE);
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log({ errorCode, errorMessage });
      });
  };

  //check form input
  return (
    <>
      <Account>
        <Account.Title>Sign Up</Account.Title>
        {error && <Account.Error>{error}</Account.Error>}

        <Account.Form onSubmit={handleSignUp} method="POST">
          <Account.Input
            placeholder="First Name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
          <Account.Input
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Account.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Account.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Account.Submit>
        </Account.Form>
        <Account.Other>
          <Account.Text>
            Already had an account? <Link to={ROUTES.SIGN_IN}>Sign in now</Link>
            .
          </Account.Text>
          <Account.TermsOfUse>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </Account.TermsOfUse>
        </Account.Other>
      </Account>
    </>
  );
}
