import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Ticket booking <sup></sup></div>
            </a>

         
            <hr class="sidebar-divider my-0"/>

       
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span></a>
            </li>

            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                <Link to={"/portal/list-theater"} class="nav-link collapsed"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Theaters</span>
                </Link>
               
            </li>

         

        </ul>
  )
}

export default Sidebar