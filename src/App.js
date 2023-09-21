import logo from './logo.svg';
import './App.css';

import {Route,Routes} from'react-router-dom'
import HomePage from './Components/Crud/HomePage';
import EmployeeList from './Components/Crud/EmployeeList';
import AddEmployee from './Components/Crud/AddEmployee';
import EditEmployee from './Components/Crud/EditEmployee';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
       <Route path="/employeelist" element={<EmployeeList/>}></Route>
      <Route path="/addemployee" element={<AddEmployee/>}></Route>
      <Route path="/editemployee/:id" element={<EditEmployee/>}></Route>
    </Routes>
  );
}

export default App;
