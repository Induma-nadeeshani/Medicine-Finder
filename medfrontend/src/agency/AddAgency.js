import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function AddAgency() {
  const [agency,setAgency]=useState({
    pharmname:"",
    aemail:"",
    contact:"",
    license:"",
    address:"",

})

const{pharmname,aemail,contact,license,address}=agency

const onInputChange=(e) =>{

  setAgency({...agency,[e.target.name]:e.target.value})
};

const onSubmit=(e)=>{
  e.preventDefault()
}

  return (
    <div>
         <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
        
        <div className='row'>
          <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
          <div className='col-md-6'>
        
            <div className='row mt-5'>
          <div className='col-md-8'>
            <h2 className='mb-5'>Agency Sign Up</h2>

            <Form onSubmit={(e)=>onSubmit(e)}>
        <Form.Group className="mb-4" controlId="pharmname">
        <Form.Control type="text" placeholder="Pharmacy Name" name='pharmname' value={pharmname} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="aemail">
        <Form.Control type="email" placeholder="Email" name='aemail' value={aemail}/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="contact">
        <Form.Control type="mobile" placeholder="Contact Number" name='contact' value={contact} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="license">
        <Form.Control type="text" placeholder="License Number" name='license' value={license} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Control type="textarea" placeholder="Address" name='address' value={address}/>
      </Form.Group>

      <button className='btn btn-success'>SignUp</button>
      </Form>

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
