import React from 'react'

const NavBar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={{ height: '2rem' }}
    >
      <div className="navbar-brand">
        <a className="navbar-item " href="#">
          <figure className="image is-fullwidth ">
            <img src="logo.png" className="is-rounded " />
          </figure>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <a className="navbar-link is-arrowless" href="/">
              <span className="is-size-5">Home</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
