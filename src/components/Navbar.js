import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* <Link className="navbar-brand mx-2" to="/">{props.title}</Link> */}
            <a className="navbar-brand mx-2" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                {/* <Link className="nav-link" to="/">Home</Link> */}
                <a className="nav-link mx-2" href="#">Home</a>
                </li>
                <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                <a className="btn btn-outline-success me-5" href='#'>Search</a>
            </form>

            <form className='d-flex'>
                <button type="button" className={`btn btn-${props.c1} btn-sm me-1`} onClick={props.color1}>Blue</button>
                <button type="button" className={`btn btn-${props.c2} btn-sm me-1`} onClick={props.color2}>Red</button>
                <button type="button" className={`btn btn-${props.c3} btn-sm me-3`} onClick={props.color3}>Green</button>
            </form>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <button type="button" className={`btn btn-${props.mode==="light"?"dark":"light"} btn-sm me-3`} onClick={props.toggleMode}>{props.mode==="dark"?"Light":"Dark"} Mode</button>
            </div>
            </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title : 'TEXTUTILS',
    aboutText : 'About'
}