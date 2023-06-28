import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        alldrugs();
    })

    const alldrugs = async () => {
        const result=await axios.get("http://localhost:8080/drug/drugs")
        setDrugs(result.data);

    }
  return (
    <div>
        <div className = "container">
        <table className="table table-striped table-responsive table-success border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Generic Name</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {drugs.map((drug,index)=>(
        <tr>
      <th scope="row" key={index+1}>1</th>
      <td>{drug.genericname}</td>
      <td>{drug.brandname}</td>
      <td>{drug.description}</td>
      <td>
        <button className='btn btn-primary mx-2'>Edit</button>
        <button className='btn btn-success mx-2'>Save</button>
        <button className='btn btn-danger mx-2'>Delete</button>
      </td>
    </tr>

    ))}
    
  </tbody>
</table>
        </div>
        
    </div>
  )
}
