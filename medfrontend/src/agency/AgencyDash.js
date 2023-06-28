import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';

export default function AgencyDash() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [stores, setStores] = useState([]);

  useEffect(() => {
      allstores();
  })

  const allstores = async () => {
      const result=await axios.get("http://localhost:8080/store/stores")
      //const result=await axios.get("http://localhost:8080/store/byagency?")
      setStores(result.data);

  }

  // const onSubmit = async () =>

  function editDrugs(drugid){

    alert("HAHA")

  }

  function removeDrugs(drugid){

  }


  return (
    <div>
  <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
        
        <div className='row'>
          <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
             <div className='col-md-6'>
          <div className='row mt-5'>
        <div className='row'>
        <div className='row'>
          <div className='col-md-9'>
          </div>

        <div className='col-md-3'>

        <Button onClick={handleShow} className='btn btn-success' style={{ marginLeft:'52px' }}> Add Drugs</Button>
            </div>

        </div>  

        <div className='row mt-5'>
           
        <table className="table table-striped table-responsive table-success border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Generic Name</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {stores.map((store,index)=>(
        <tr>
      <th scope="row" key={index+1}>1</th>
      <td>{store.drugid.genericname}</td>
      <td>{store.drugid.brandname}</td>
      <td>{store.price}</td>
    </tr>

    ))}
    
  </tbody>
        </table>
        </div>  
            </div> 
            </div>  
          </div>

          <div className='col-md-4'>
          <Image src="/images/doc.png" alt='Doc Image' className="img-fluid" />
          </div>
          </div>


            <div className='col-md-1'></div>

    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Drugs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mt-3 mb-4" controlId="genericname">
        <Form.Select aria-label="Default select example">
      <option>Select Drug</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4" controlId="price">
        <Form.Control type="password" placeholder="Price" name='price'/>
      </Form.Group>

      </Form>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Clear
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

        
    </div>
  )
}
