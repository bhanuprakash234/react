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
