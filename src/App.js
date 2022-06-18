import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './App.css'


function App() {
    return (<> <nav class="navbar navbar-expand-lg navbar-light bg-primary">

  
    <div className="container-fluid">
      <a className="navbar-brand" href="#">PCCOE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
      <div className="timings">
      <div className="list-group">
        
      <div className="list-group-item list-group-item-action list-group-item-danger">9am to 10am<a href="https://atharvabokade.github.io/request-slot-1/"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></a></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">10am to 11am<a href="https://atharvabokade.github.io/request-slot-2/"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></a></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">12pm to 1pm<a href="https://atharvabokade.github.io/request-slot-3/"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></a></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">2pm to 3pm<a href ="https://atharvabokade.github.io/request-slot-4/"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></a></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">4pm to 5pm<a href="https://atharvabokade.github.io/request-slot-5/"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></a></div>
      <a href='https://atharvabokade.github.io/pending/'><button type="button" id ="pending_btn" className="btn btn-warning btn-sm">Pending</button></a>
      <a href='https://atharvabokade.github.io/accepted/'><button type="button" id ="accepted_btn" className="btn btn-success btn-sm">Accepted</button></a>
      <a href='https://atharvabokade.github.io/rejected/'><button type="button" id ="rejected_btn" className="btn btn-danger btn-sm">Rejected</button></a>
      
    </div>
    </div>
    <div className="footer_custom">
        <h6 id="footer_text">This website is created for 
        official purpose only
        </h6>
      </div>
    </>
    );
  }
  
  export default App;
  