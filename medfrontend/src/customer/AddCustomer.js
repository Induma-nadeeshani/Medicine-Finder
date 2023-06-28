import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';


export default function AddCustomer() {
  let navigate=useNavigate()
    const [customer,setCustomer]=useState({
        password:"",
        email:"",
        role:"CUSTOMER"
    })
    
    const{email,password,role}=customer
    
    const onInputChange=(e) =>{
    
      setCustomer({...customer,[e.target.name]:e.target.value})
    };
    
    const onSubmit= async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8080/customer",customer);
      navigate("/");
    }

  //   function openMaps() {
  //     var latitude;
  //     var longitude;

  //     React.useEffect(() =>{
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         latitude = position.coords.latitude;
  //         longitude = position.coords.longitude;
  //         console.log(latitude);
  //       })
  //     }, [])

  //     //window.alert(txtActLocFrom.value);

  //     window.open('https://www.google.com/maps/search/?api=1&query=' +latitude+ ',' +longitude);
  
  // }
  

  //   function addcustomer(){
  //     var response = "0";
  //     //var response = httpRequest("/customer", "POST", customer);
  //           if (response == "0") {
  //               Swal.fire({
  //                   position: 'center',
  //                   icon: 'success',
  //                   title: 'Your work has been Done \n Signed Up Successfully..!',
  //                   text: '\n',
  //                   button: false,
  //                   timer: 1200
  //               });
  //   }
  // }



  return (
    <div>
          <div className="container-fluid" style={{ backgroundColor:'#74B3AF'}}>
        
        <div className='row'>
          <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
          <div className='col-md-6'>
        
            <div className='row mt-5'>
          <div className='col-md-8'>
            <h2 className='mb-5'>Sign Up</h2>

          <Form>
      <Form.Group className="mb-4" controlId="email">
        <Form.Control type="email" placeholder="Email" name='email' value={email} 
        onChange={(e=>onInputChange(e))}/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="pw">
        <Form.Control type="password" placeholder="Password"  name='password' value={password} 
        onChange={(e=>onInputChange(e))}/>
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="pwconf">
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
    
      <Form.Text className="text-muted">
          If you want to sign up as an Agency click <Link to='/addagency'>Here</Link>
        </Form.Text>
            <br/>
        <button className='btn btn-success mt-5' >Sign Up</button>
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
