import { useState } from "react";

import Button from "./Button";
import CustomInput from "./Input";

import { styled } from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={handleInputChange}
        />

        <CustomInput
          label='Password'
          type="password"
          invalid={passwordNotValid}
          onChange={handleInputChange}
        />
      </ControlContainer>
      <div className="actions">
        <Button type="button">Create a new account</Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
};

export default AuthInputs;
