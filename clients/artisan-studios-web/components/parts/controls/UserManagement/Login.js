// import { useState, useContext, useEffect } from "react";
// 
// import Head from "next/head";
// import gql from "graphql-tag";
// import { useMutation } from "@apollo/react-hooks";
// import decode from "jwt-decode";
import NoSSR from "react-no-ssr";
// import { AuthContext } from "utils/context";
// 
// const Login = gql`
  // mutation Login($email: String!, $password: String!) {
    // login(email: $email, password: $password) {
      // token
      // user {
        // name
        // id
      // }
    // }
  // }
// `;
// 
// const LoginComp = () => {
  // const [login, { data }] = useMutation(Login);
  // const [input, setInput] = useState({});
  // const { setAuth } = useContext(AuthContext);
// 
  // let loggedIn;
// 
  // useEffect(() => {
    // if (data) {
      Move this out to a separate function that lives elsewhere (reuseable from multiple pages)
      localStorage.setItem("token", data.login.token);
      // const {
        // login: {
          // user: { id, name },
          // token,
        // },
      // } = data;
      // setAuth({ id, name, token });
    // }
  // });
// 
  Check if current token is valid
  // const currentToken = localStorage.getItem("token");
  // if (currentToken) {
    // const decodedToken = currentToken && decode(currentToken);
    // const expiresAt = decodedToken && decodedToken.exp;
    // const expired = expiresAt && expiresAt < new Date().getTime() / 1000;
    // if (expired) {
      // localStorage.removeItem("token");
      // loggedIn = false;
    // }
    // loggedIn = true;
  // }
// 
  // const handleInputChange = (e) =>
    // setInput({
      // ...input,
      // [e.currentTarget.name]: e.currentTarget.value,
    // });
// 
  // return (
    // <>
      {/* <Head> */}
        {/* <title>Login Page</title> */}
        {/* <meta charSet="utf-8" /> */}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      {/* </Head> */}
      {/* {loggedIn ? ( */}
        // <p>Logged In</p>
      // ) : (
        // <div
          // style={{
            // display: "flex",
            // flexDirection: "column",
          // }}
        // >
          {/* <h1>Log In Here</h1> */}
          {/* <label>Email</label> */}
          {/* <input */}
            // type="text"
            // name="email"
            // onChange={handleInputChange}
            ref={node => {
              input = node;
            }}
          // />
          {/* <label>Password</label> */}
          {/* <input type="password" name="password" onChange={handleInputChange} /> */}
          {/* <button */}
            // onClick={(e) => {
              console.log(input);
              // login({ variables: input });
              setInput({});
            // }}
          // >
            {/* Submit */}
          {/* </button> */}
        {/* </div> */}
      // )}
    {/* </> */}
  // );
// };
// 
// const Comp = () => (
  <NoSSR>
    // <LoginComp />
  </NoSSR>
// );
// 
// export default Comp;
// 