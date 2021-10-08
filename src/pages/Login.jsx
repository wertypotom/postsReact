import React from "react";
import Input from "./../components/UI/Input/Input";
import Button from "./../components/UI/Button/Button";
import { AuthContext } from "../context/Context";

function Login() {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={submit}>
        <Input type="text" placeholder="enter login" />
        <Input type="password" placeholder="enter password" />
        <Button>Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
