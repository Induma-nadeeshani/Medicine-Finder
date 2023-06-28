import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AddDrug() {
  return (

    <div>
    <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
  
  <div className='row'>
    <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
    <div className='col-md-6'>
  
      <div className='row mt-5'>
    <div className='col-md-8'>
      <h2 className='mb-5'>Add Drugs</h2>

      <Form>
        <Form.Group className="mt-3 mb-4" controlId="drugname">
        <Form.Control type="text" placeholder="Drug Name" name='drugname' required />
      </Form.Group>

      <Form.Group className="mb-4" controlId="brandname">
        <Form.Control type="text" placeholder="Brand Name" name='brandname' required/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="price">
        <Form.Control type="text" placeholder="Price" name='price' required/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="description">
        <Form.Control type="textarea" rows="4" placeholder="Description" name='description'/>
      </Form.Group>
      </Form>
      <Button variant="secondary">
            Clear
          </Button>
      <Button variant="success">
            Add
          </Button>
      </div>  
      </div>  
    </div>



    <div className='col-md-4'>
    <Image src="/images/doc.png" alt='Doc Image' className="img-fluid" />
    </div>
    </div>
      <div className='col-md-1'></div>
</div>
</div>

  )
}
