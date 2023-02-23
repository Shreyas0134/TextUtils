import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">{props.hm}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abt}</Link>
            </li>

          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.text}</label>
          </div>
        </div>
      </div>

    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  hm: PropTypes.string,
  abt: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  text: PropTypes.string,
}

NavBar.defaultProps = {
  title: 'Your title here',
  hm: 'Home',
  abt: 'About',
  mode: 'light',
  toggleMode: () => {},
  text: 'Enable Dark Mode',
}