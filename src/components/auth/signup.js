import axios from "axios";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

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
            navigate('/auth/login?msg="signup success"')
        })
        .catch(function(error){
            setMsg("Issue in processing in signup")
        });

    }
    return(
        <div className="bg-dark-subtle " >
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
        </Container>
      </Navbar>
      <br /><br /><br />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 style={{textAlign:"center"}}>Sign Up</h3>
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
                  

                  
                  <div className="col-md-6">
                    <label>Enter Email:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      className="form-control"
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
              <div className="card-footer" style={{ textAlign: "center" }}>
                <button className="btn btn-primary" onClick={() => doSignUp()} >
                  SignUp
                </button>
              </div>
            </div>
            <div style={{ textAlign: "left" }} className="mt-4">
              <span>
                Have an Account?
                <button
                  className="btn btn-link"
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
      <br /><br /><br /><br /><br />
      
        </div>
    );
}
export default SignUp;