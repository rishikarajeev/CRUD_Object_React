import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Employees from "./Employee";
import { v4 as uuid } from "uuid";
import Nav from "../Header/Nav";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [details, setDetails] = useState({ id: "", roll: "", name: "" });

  useEffect(() => {
    //retrieve employee details based on specific id got from useParams()
    const PreviousData = Employees.filter((data) => {
      return data.id === id;
    });
    console.log(PreviousData);
    setDetails(PreviousData[0]);
    console.log("details"+JSON.stringify(details));
  }, [id]);



  const index = Employees.map((employee) => {
    return employee.id;
  }).indexOf(id);

  const UpdateEmployee = (e) => {
    //we are updating the whole employee array by deleteing item based on index and inserting new by adding uuid
    e.preventDefault();
    Employees.splice(index, 1);  //deleted 1 item after getting index of specific item
    console.log("index",Employees);
    const ids = uuid();
    const uniqueid = ids.slice(0, 8);
    const { name, roll } = details;
   Employees.push({ id: uniqueid, name, roll });
    navigate("/employeelist");
  };

  const changeDetail = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <>
      <Nav />

      <div className="p-5 m-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicRollNo">
            <Form.Label>RollNo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter rollno"
              name="name"
              value={details.name}
              onChange={changeDetail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="roll"
              value={details.roll}
              onChange={changeDetail}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
             onClick={(e) => UpdateEmployee(e)}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditEmployee;
