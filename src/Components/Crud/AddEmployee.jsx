import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Employees from "./Employee";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";

function AddEmployee() {
  const navigate=useNavigate();
  const [details, setDetails] = useState({ name: "", roll: "" });

  const changeDetail = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    console.log("detailss", details);
  };
  const submitEmployee = (e) => {
    e.preventDefault();
    const ids = uuid();
    const uniqueid = ids.slice(0, 8);
    const {name,roll}=details;
    Employees.push({id:uniqueid,name,roll});
    navigate("/employeelist");
    
  };

  return (
    <>
    <Nav/>
    <div className="p-5 m-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>RollNo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter rollno"
            name="name"
            onChange={changeDetail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="roll"
            onChange={changeDetail}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => submitEmployee(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default AddEmployee;
