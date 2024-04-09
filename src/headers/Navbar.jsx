import React from 'react'
import { Route, Link } from 'react-router-dom'
import logo from "../img/logo.jpeg"
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid" style={{ backgroundColor: "white", fontSize: "20px", color: "black" }}>
                    <img src={logo} alt="" style={{ width: "90px", marginRight: "80px" }} />
                    {/* <Link to="/" class="navbar-brand"    >Home</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: "-10px", fontSize: "20px" }}>
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page"    >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/About" class="nav-link active" aria-current="page"    >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Contact" class="nav-link active"    >Contact</Link>
                            </li>
                            <li class="nav-item dropdown">

                            </li>
                            <li class="nav-item">
                                <Link to="/More" class="nav-link active" tabindex="-1" aria-disabled="true">More</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
