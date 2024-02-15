import { useLocation } from "react-router-dom";
const Logout = () => {
    let location = useLocation()
    console.log(location)
    return (
      <>
        <h1>Logout page</h1>
        <h2>{location.state.name} logged out!!</h2>
      </>
    );
  };
  
  export default Logout;
  