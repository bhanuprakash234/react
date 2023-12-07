<<<<<<< HEAD

import { Route, Routes } from "react-router";
import "./App.css";

import CustomerDashboard from "./components/customer/customerdashboard";
import VendorDashboard from "./components/vendor/dashboard";
import ExecutiveDashboard from "./components/executive/dashboard";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Logout from "./components/auth/logout";
import ArrayDemoComponent from "./class components/arry_demo";
import InputDemoComponent from "./class components/input_demo";
import PostComponent from "./class components/posts";
import CommentsComponent from "./class components/comments";
import ReduxProduct from "./components/redux/products";


function App(){
 
 
 
  return(
    
      <div className="App">
       <Routes>
          <Route path="/" element={<ReduxProduct />}></Route>
          {/* <Route path="/posts/comments/:id" element={<CommentsComponent />}></Route> */}
          <Route path="/customer/dashboard" element={<CustomerDashboard />}></Route>
          <Route path="/vendor/dashboard" element={<VendorDashboard />}></Route>
          <Route path="/executive/dashboard" element={<ExecutiveDashboard />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/signup" element={<Signup />}></Route>
          <Route path="/auth/logout" element={<Logout />}></Route>
        </Routes>
    
     </div>

  
  );
}
export default App;
=======
import logo from './logo.svg';
import './App.css';
import ShapeExample from './image';
import MainNavbar from './components/mainNavbar';
import Login from './components/auth/login';
import EmployeeDashboard from './components/employee/employeeDashboard';
import ManagerDashboard from './components/manager/managerDashboard';
import SignUp from './components/auth/signup';
import Logout from './components/auth/logout';
import FirstPage from './components/firstpage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app-body" >
      
      <Routes>
          <Route path="/" element={<FirstPage />}></Route>
         
          <Route path="/employee/dashboard" element={<EmployeeDashboard />}></Route>
          <Route path="/manager/dashboard" element={<ManagerDashboard />}></Route>
         
          <Route path="/auth/login" element={<FirstPage />}></Route>
          <Route path="/auth/signup" element={<SignUp />}></Route>
          <Route path="/auth/logout" element={<Logout />}></Route>
        </Routes>
    </div>
  );
}

export default App;
>>>>>>> origin/master
