import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../firebase/context.js";
import { Account } from "../components/index.js";
import HeaderContainer from "../containers/header.js";
import FooterContainer from "../containers/footer.js";
import * as ROUTES from "../routes/route.js";

export default function SignUp() {
  const navigate = useNavigate();
  const { firebaseSignUp } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || email === "";
  const handleSignUp = (event) => {
    event.preventDefault();

    //firebase Promise
    firebaseSignUp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((info) =>
        info.user
          .updateProfile({
            displayName: firstName,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  //check form input

  return (
    <>
      <HeaderContainer>
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
              Already had an account?{" "}
              <Link to={ROUTES.SIGN_IN}>Sign in now</Link>.
            </Account.Text>
            <Account.TermsOfUse>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
            </Account.TermsOfUse>
          </Account.Other>
        </Account>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
