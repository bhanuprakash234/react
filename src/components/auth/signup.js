import axios from "axios";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

<<<<<<< HEAD
function Signup(){
    const [name,setName] = useState('');
    const [contact,setContact] = useState('');
    const [hno,setHno] = useState(''); 
    const [street,setStreet] = useState(''); 
    const [city,setCity] = useState(''); 
    const [pin,setPin] = useState(''); 
    const [state,setState] = useState('');    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [customer,setCustomer] = useState('');

    const [msg,setMsg] = useState('');
    const navigate = useNavigate();

    const doSignUp=()=>{
        let customerObj = {
            "name":name,
            "contact":contact,
            "email":username,
            "address":{
                "hno":hno,
                "street":street,
                "city":city,
                "pinCode":pin,
                "state":state
            },
            "user":{
               "username":username,
               "password":password
            }
        }
        //console.log(JSON.stringify(customerObj))
        axios.post('http://localhost:8082/customer/address/add',customerObj)
        .then(response=>{
            setCustomer(response.data)
=======
function SignUp(){
    const [name,setName] = useState('');
      
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [manager,setManager] = useState('');
    const [email,setEmail] = useState('');
    

    const [msg,setMsg] = useState('');
    const navigate = useNavigate();
    const doSignUp=()=>{
        let managerObj = {
            "name":name,
            
            "user":{
               "username":username,
               "password":password,
               "email":email
            }
        }
        //console.log(JSON.stringify(customerObj))
        axios.post('http://localhost:5050/manager/add',managerObj)
        .then(response=>{
            setManager(response.data)
>>>>>>> origin/master
            navigate('/auth/login?msg="signup success"')
        })
        .catch(function(error){
            setMsg("Issue in processing in signup")
        });

    }
    return(
<<<<<<< HEAD
        <div>
=======
        <div className="bg-dark-subtle " >
>>>>>>> origin/master
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
        </Container>
      </Navbar>
<<<<<<< HEAD
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Sign Up</h3>
=======
      <br /><br /><br />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 style={{textAlign:"center"}}>Sign Up</h3>
>>>>>>> origin/master
              </div>
              <div className="card-body">
                {msg !== "" ? (
                  <div className="alert alert-danger" role="alert">
                    {msg}
                  </div>
                ) : (
                  ""
                )}
                <div className="row " style={{ textAlign: "right" }}>
                    
                  {/* Read Name */}
                  <div className="col-md-6">
                    <label>Enter Name:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
<<<<<<< HEAD

                  {/* Read Contact */}
                  <div className="col-md-6">
                    <label>Enter Contact No:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  
                  {/* Read Hno */}
                  <div className="col-md-6">
                    <label>Enter House No:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setHno(e.target.value)}
                    />
                  </div>

                    {/* Read street */}
                  <div className="col-md-6">
                    <label>Enter Street Name:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>

                    {/* Read city */}
                  <div className="col-md-6">
                    <label>Enter City Name:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                    {/* Read pin */}
                  <div className="col-md-6">
                    <label>Enter Pin Code:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                  {/* Read state */}
                  <div className="col-md-6">
                    <label>Enter State:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <hr />
                  <div className="col-md-6">
                    <label>Enter Email/Username:</label>
=======
                  

                  
                  <div className="col-md-6">
                    <label>Enter Email:</label>
>>>>>>> origin/master
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      className="form-control"
<<<<<<< HEAD
=======
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Enter Username:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="username"
                      className="form-control"
>>>>>>> origin/master
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row" style={{ textAlign: "right" }}>
                  <div className="col-md-6">
                    <label>Enter Password:</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div className="card-footer" style={{ textAlign: "right" }}>
                <button className="btn btn-primary" onClick={() => doSignUp()}>
=======
              <div className="card-footer" style={{ textAlign: "center" }}>
                <button className="btn btn-primary" onClick={() => doSignUp()} >
>>>>>>> origin/master
                  SignUp
                </button>
              </div>
            </div>
            <div style={{ textAlign: "left" }} className="mt-4">
              <span>
                Have an Account?
                <button
<<<<<<< HEAD
                  className="button_link"
=======
                  className="btn btn-link"
>>>>>>> origin/master
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </button>
              </span>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
<<<<<<< HEAD
        </div>

    );
}
export default Signup;
=======
      <br /><br /><br /><br /><br />
      
        </div>
    );
}
export default SignUp;
>>>>>>> origin/master
