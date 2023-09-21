import React, { useState }  from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Employees from "./Employee";
import { Link ,useParams,useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";

function EmployeeList()
 {
  
    const navigate =useNavigate();
   
   // const [data,setData]=useState(Employees);
    // const handledelete=(id)=>{
    //  const UpdatedData=data.filter((key)=>key.id!==id);
    //  setData(UpdatedData);
     
    // };
    const handledelete=(id)=>{
      //index of id
      const index=Employees.map((employee)=>{
       return employee.id;   //returns all the id
        
      }).indexOf(id);  //returns the index of specific id

      console.log(index);
      // At position index, remove 1 items and is applied on original array
      Employees.splice(index,1);  
       navigate("/employeelist")
    };

    return (
      <>
      <Nav />
      <Table striped bordered hover id="employeeTable">
        <thead>
          <tr>
            <th>id</th>
            <th>RollNo</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          Employees && Employees.length>0?
         Employees.map((key, value) => (
          <tbody  >
            <tr key={key.id} >
               <td> {key.id} </td>
              <td> {key.name} </td>
              <td> {key.roll}</td>

              <td>
              <tr>
                  <td>
                  <Link to={`/editemployee/${key.id}`}>
                    <Button variant="secondary" >Edit</Button>
                    </Link>
                    </td>
                  <td>
                    <Button variant="danger" onClick={()=>handledelete(key.id)}>Delete</Button>
                  </td>
                </tr>
              </td>
            </tr>
          </tbody>
        )
        ):"Employee not found"
        };
      </Table>
      </>
    );
  }


export default EmployeeList;
