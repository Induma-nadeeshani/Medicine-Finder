import React from 'react'
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { GeoSearchControl,OpenStreetMapProvider, MapBoxProvider } from 'leaflet-geosearch';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


export default function CusDash() {
  return (
    <div>
        <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
        
        <div className='row' >
          <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
          <div className='col-md-6'>
          <div className='row mt-4 mb-1'>
          <h2 style={{color:'3B3355', textAlign: 'left'}}>Please Enter your location and the Medicine you wish to find.</h2>
          </div>
          <div className='row mt-5'>
          <div className='col-md-1'> </div>
          <div className='col-md-6'>
          <Form>
          <Form.Group className="mb-3 mt-4 " controlId="med">
            <Form.Control type="text" placeholder="Medicine" />
            </Form.Group>

      <p style={{color:'white', textAlign: 'left' ,marginTop:'39px', fontSize:'25px'}}> Select Location</p>
      </Form>
      <div id="map" className='row mt-4'>
      <MapContainer style={{width:"50vw",height:"50vh"}} center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>   
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
    </div>
  )
}
