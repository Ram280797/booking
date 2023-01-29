import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ListTheaterData } from './api/Theater';
function ListTheater() {
  const [theaters, setTheaters] =useState([])
  useEffect (( ) => {
    getTheater();


  },[])

  async function getTheater(){
    try {
     let res= await ListTheaterData();
     setTheaters(res.data);
    } catch (error) {
      alert("Something went wrong");
    }

  }
  return (
    <div class="container-fluid">
  
    <h1 class="h3 mb-2 text-gray-800">Theaters</h1>
       <Link to = "/portal/create-theaters" className="btn btn-primary mb-2">Create Theaters</Link>  

    
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Edit the theater</h6>
        </div>
        <div class="card-body">
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ARRS Multiplex</h5>
        <img src="https://image3.mouthshut.com/images/imagesp/925741627s.jpg" class="card-img-top" alt="..." />
        <p class="card-text">MTicket,Parking Facility, Food Court,iMax</p>
        <a href="#" class="btn btn-primary mb-2">Click to Edit add more </a> <br/>
        <Link to = "/portal/create-movies/1" className="btn btn-primary mb-2">Create Movies </Link>  <br/>
        <Link to = "/portal/seats" className="btn btn-primary">seats </Link>  
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">PVR Cinema</h5>
        <img src="https://content3.jdmagicbox.com/comp/salem/dc/0427px427.x427.1234516953w1s4b5.dc/catalogue/arrs-cinemas-meyyanur-salem-cinema-halls-swr9bxftbr.jpg" class="card-img-top" alt="..." />
        <p class="card-text">Parking Facility, Food Court,iMax</p>
        <a href="#" class="btn btn-primary mb-2">Click to Edit add more</a><br/>
        <Link to = "/portal/create-movies/1" className="btn btn-primary mb-2">Create Movies </Link>  <br/>
        <Link to = "/portal/seats" className="btn btn-primary mb-2">seats </Link>  
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Jazz Cinema</h5>
        <img src="https://images.jdmagicbox.com/comp/salem/dc/0427px427.x427.1234869508r4k3v5.dc/catalogue/big-cinemas-suramangalam-salem-cinema-halls-4dbcd3r.png?clr=#663300" class="card-img-top" alt="..." />
        <p class="card-text">Parking Facility, Food Court</p>
        <a href="#" class="btn btn-primary mb-2">Click to Edit add more</a><br/>
        <Link to = "/portal/create-movies/1" className="btn btn-primary mb-2">Create Movies </Link>  <br/>
        <Link to = "/portal/seats" className="btn btn-primary mb-2">seats </Link>  
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sathyam Cinema</h5>
        <img src="https://content3.jdmagicbox.com/comp/ghaziabad/k5/9999px120.x120.100623194312.u1k5/catalogue/big-cinemas-big-cinemas-ansal-sector-1-main-link-road-ghaziabad-cinema-halls-vqwrx65.png" class="card-img-top" alt="..." />
        <p class="card-text">MTicket,Parking Facility, Food Court</p>
        <a href="#" class="btn btn-primary mb-2">Click to Edit add more</a><br/>
        <Link to = "/portal/create-movies/1" className="btn btn-primary mb-2">Create Movies </Link>  <br/>
        <Link to = "/portal/seats" className="btn btn-primary mb-2">seats </Link>  
      </div>
    </div>
  </div>
</div>
{
theaters.map((res) => {
  return <div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{res.name}</h5>
      <img src={res.url} class="card-img-top" alt="..." />
      <p class="card-text">MTicket,Parking Facility, Food Court</p>
      <a href="#" class="btn btn-primary mb-2">Click to Edit add more</a><br/>
      <Link to = "/portal/create-movies/1" className="btn btn-primary mb-2">Create Movies </Link>  <br/>
      <Link to = "/portal/seats" className="btn btn-primary mb-2">seats </Link>  
    </div>
  </div>
</div>
})

}


            </div>
        </div>
    </div>


  )
}

export default ListTheater