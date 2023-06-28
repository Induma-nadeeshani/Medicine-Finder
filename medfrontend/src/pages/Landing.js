import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


export default function Landing() {

  const [user,setUser]=useState({
    username:"",
    email:"",

})

const{username,email}=user

const onInputChange=(e) =>{

  setUser({...user,[e.target.name]:e.target.value})
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
            <p className='text-left' style={{color:'3B3355', fontSize: '95px', fontFamily: 'monospace', textAlign: 'left' }}>MEDICINE <br/> FINDER</p>
            <p className='text-left mt-3' style={{color:'white', fontSize: '30px', fontFamily: 'monospace', textAlign: 'left' }}>
            “Where the art of medicine is loved, <br/>
            there is also love for humanity”          
            </p>
            <p style={{color:'white', fontSize: '30px', fontFamily: 'monospace', textAlign: 'right' }}>- Hippocrates -</p>
            <Link to={'/addcustomer'} className='btn btn-primary mt-5 mr-10 '  >Get Started</Link>
          </div>
          <div className='col-md-4'>
          <Image src="/images/doc.png" alt='Doc Image' className="img-fluid" />
          <div>       
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
