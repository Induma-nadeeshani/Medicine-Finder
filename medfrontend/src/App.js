import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import {BrowserRouter as Switch , Routes, Route} from "react-router-dom";
import AddCustomer from './customer/AddCustomer';
import AddAgency from './agency/AddAgency';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Error from './pages/Error';
import CusDash from './customer/CusDash';
import AgencyDash from './agency/AgencyDash';
import AddDrug from './admin/AddDrug';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import AddLoc from './agency/AddLoc';


function App() {

  return (
    <div className="App">
      <Switch>
       
        <Navbar/>  

          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/addcustomer" element={<AddCustomer/>}/>
            <Route exact path="/addagency" element={<AddAgency/>}/>
            <Route exact path="/customer" element={<CusDash />}/>
            <Route exact path="/agency" element={<AgencyDash />}/>
            <Route exact path="/adddrug" element={<AddDrug/>}/>
            <Route exact path="/addlocation" element={<AddLoc />}/>
            <Route exact path="/home" element={<Home />}/>
            <Route exact path="*" element={<Error/>}/>
          </Routes>
      </Switch>
     
    </div>
  );
}

export default App;
