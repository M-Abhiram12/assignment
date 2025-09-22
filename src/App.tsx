import React, { useState } from "react";
import InputField from "./components/InputFeild"; // make sure path is correct

interface Errors {
  username: string;
  password: string;
}

const Inputs: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({ username: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: Errors = { username: "", password: "" };

    if (!username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert(`Username: ${username}\nPassword: ${password}`);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lettersOnly = e.target.value.replace(/[^A-Za-z]/g, "");
    setUsername(lettersOnly);
  };

  return (
    <>
    <h1 className="Inputfield">InputField</h1>
    <div className="main-div">
      <h3 className="loginbutton">Login</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          invalid={!!errors.username}
          errorMessage={errors.username}
          variant="outlined"
          size="md"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          invalid={!!errors.password}
          errorMessage={errors.password}
          variant="outlined"
          size="md"
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Inputs;
