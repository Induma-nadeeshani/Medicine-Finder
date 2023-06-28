import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import L from 'leaflet';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import mapSearch from '../pages/SearchField';

import { GeoSearchControl,OpenStreetMapProvider, MapBoxProvider } from 'leaflet-geosearch';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function AddLoc() {

    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
        provider: provider,
      });

      // const map = new L.Map('map');
      // map.addControl(searchControl);

  return (
  <div>
    <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
  
  <div className='row'>
    <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
    <div className='col-md-6'>
  
      <div className='row mt-5'>
    <div className='col-md-8'>
      <h2 className='mb-5'>Add Locations</h2>

      <Form>
        <Form.Group className="mt-3 mb-4" controlId="branchname">
        <Form.Control type="text" placeholder="Branch Name" name='branchname' required />
      </Form.Group>

      <p style={{color:'white'}}>Enter Address </p>


      <Form.Group className="mb-4" controlId="location">
        <Form.Control type="textarea" rows="4" placeholder="Address" name='location'/>
      </Form.Group>

      </Form>
      <p style={{color:'white'}}>OR <br/>Select Location</p>

      </div>  
      <div id="map" className='row mt-4'>
      <MapContainer style={{width:"50vw",height:"50vh"}} center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    {/* <Marker position={[51.505, -0.09]}>
  <Popup>
      Your current Location
    </Popup>
  </Marker> */}
</MapContainer>

<div className='row mt-5'>

<div className='col-md-9'>
</div>

<div className='col-md-1 '>
<Button variant="secondary">
            Clear
          </Button>
      </div>
      <div className='col-md-1 '>
      <Button variant="success">
            Add
          </Button>
      </div>
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
