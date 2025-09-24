import React from 'react'
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
       AMTECH </a>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#uttranchal"> Uttaranchal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#almora">Almora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kasar">Kasardevi</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#paradise">Paradise</a>
            </li>  */}
          
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Home</a> */}
              <Link className="nav-item text-white nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">About</a> */}
                         <Link className="nav-item text-white nav-link" to='/portfolio'>Portfolio</Link>

            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}