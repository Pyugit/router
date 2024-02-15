import { useLocation } from "react-router-dom";
const Login = () => {
    let location = useLocation()
    console.log(location)
    return (
      <>
        <h1>Login page</h1>
        <h2>{location.state.kl}</h2>
      </>
    );
  };
  
  export default Login;
  