import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    let navigate = useNavigate()
    let data = {
        name:'soham'
    }
    return (

      <>
        <h1>Dashboard page</h1>
        <button onClick={()=>{
            navigate('/logout',{state:data})
            //navigate(-1) also replace value to clear stack history,-1,1for moving forward or backward
        }}>logout</button>
      </>
    );
  };
  
  export default Dashboard;
  