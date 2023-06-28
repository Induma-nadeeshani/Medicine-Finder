import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function Error() {
  return (
    <div>
           <div className="container-fluid" style={{ backgroundColor: '#74B3AF' }}>
        
        <div className='row'>
          <div className='col-md-1' style={{backgroundColor:'56C7C8'}}></div>
          <div className='col-md-6'>
          <Image src="/images/err.png" alt='Doc Image' className="img-fluid" />
          <p className='text-left' style={{color:'3B3355', fontSize: '80px', fontFamily: 'monospace', textAlign: 'left' }}>404 ERROR</p>
          <p className='text-left' style={{color:'white', fontSize: '25px', fontFamily: 'monospace', textAlign: 'left' }}>
            The Page you are trying to find does not exist!!!          
            </p>
            <Link to={'/'} className='btn btn-primary mr-10 '  >Go Back</Link>
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
