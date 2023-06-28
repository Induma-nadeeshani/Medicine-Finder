import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { Image } from 'react-bootstrap';


export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const onInputChange=(e) =>{

  //   setAgency({...agency,[e.target.name]:e.target.value})
  // };
  // const onSubmit=(e)=>{
  //   e.preventDefault()
  // }
  
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#74B3AF' }}>
  <a className="navbar-brand ml-4" href="#" style={{color:'white' ,marginRight:'30px' }}>           
  <Image src="/images/med.png" alt='Logo' style={{ width: 50, height: 50, marginLeft:'30px',marginRight:'10px' }} className="img-fluid" />
 Med Finder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mb-4 mt-4" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" style={{marginRight:'20px', marginLeft:'30px' }} href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{marginRight:'20px' }} href="/customer">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{marginRight:'20px' }} href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{marginRight:'20px' }} href="#">About Us</a>
      </li>
    </ul>

    <Button className='pull-right btn btn-primary ml-5' style={{ width: 80,marginLeft:'750px'}} onClick={handleShow}>Login</Button>

  </div>
</nav>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mt-3 mb-4" controlId="username">
        <Form.Control type="text" placeholder="Username" name='username' />
      </Form.Group>

      <Form.Group className="mb-4" controlId="password">
        <Form.Control type="password" placeholder="password" name='password'/>
      </Form.Group>
      </Form>

      <Form.Text className="text-muted">
          If you are not registered yet click <Link to='/addcustomer'>Here</Link> to register
        </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>




  )
}
