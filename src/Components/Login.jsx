import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Login = () => {

    const[userInput,setUserInput]=useState({

      "fname":"",
      "lname":"",
      "email":"",
      "dob":"",
      "cm":"",
      "sg":"",
      "spl":"",
      "password":""
    });

    const handleform = (event) =>{
      
      event.preventDefault()
    }

    const handlechange = (e) =>{
      setUserInput({
        ...userInput,
        [e.target.name] : e.target.value,
      })
      console.log(userInput)
    }



  return (
    <div className='container'>
    <h1 style={{textAlign:'center'}}>User Registration Form</h1>
    <Form onClick={()=>handleform} >
      <Row className='mt-3'>
        <Col id='fname' value = {userInput.fname} onChange={handlechange}>
          <Form.Label >Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col id='lname' value = {userInput.lname} onChange={handlechange}>
          <Form.Label >Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Form.Group as={Col} controlId="formGridEmail" id='email' value ={userInput.email} onChange={handlechange}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" id='password' value={userInput.password} onChange={handlechange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Row className='mt-3'>
        <Col id='dob' value={userInput.dob} onChange={handlechange}>
          <Form.Label>D.O.B</Form.Label>
          <Form.Control placeholder="D.O.B" />
        </Col>
        <Col id='cm' value={userInput.cm} onChange={handlechange}>
          <Form.Label>Course Name</Form.Label>
          <Form.Control placeholder="Course Name" />
        </Col>
      </Row>

      <Row className='mt-3'>
      <Col id='sg' value={userInput.sg} onChange={handlechange}>
       <Form.Label>Select Gender</Form.Label>
       <Form.Select aria-label="Default select example">
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </Form.Select>
    
       </Col>
       <Col id='spl' value={userInput.spl} onChange={handlechange}>
       <Form.Label>Select Preferred Languages</Form.Label>
       <Form.Select aria-label="Default select example">
      <option>Select Preferred Languages</option>
      <option value="1">HTML</option>
      <option value="2">JavaScript</option>
      <option value="3">React</option>
    </Form.Select>
       </Col>
      </Row>
      <Button type='submit' className="mt-3" variant="outline-success">Submit</Button>
      
    </Form>
    </div>
  )
}

export default Login