import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../admin-panel/css/main.css'

export default function Admin() {
  return (
    <>
    <section className="material-half-bg">
      <div className="cover"></div>
    </section>
    <section className="login-content">
      <div className="logo">
        <h1>Log In to Admin Panel</h1>
      </div>
      <div className="login-box ">
        <form className="login-form" action="index.html">
          <h3 className="login-head">
            {/* <i className="bi bi-person me-2"></i> */}
            <FontAwesomeIcon icon={faUser} className='me-3 fa-sm' style={{width:20}}/>
            SIGN IN</h3>
          <div className="mb-3">
            <label className="form-label">USERNAME</label>
            <input className="form-control" type="text" placeholder="Email" autofocus/>
          </div>
          <div className="mb-3">
            <label className="form-label">PASSWORD</label>
            <input className="form-control" type="password" placeholder="Password"/>
          </div>
          <div className="mb-3">
            <div className="utility">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox"/><span className="label-text">Stay Signed in</span>
                </label>
              </div>
              <p className="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
            </div>
          </div>
          <div className="mb-3 btn-container d-grid">
            <button className="btn btn-primary btn-block"><i className="bi bi-box-arrow-in-right me-2 fs-5"></i>SIGN IN</button>
          </div>
        </form>
        <form className="forget-form" action="index.html">
          <h3 className="login-head"><i className="bi bi-person-lock me-2"></i>Forgot Password ?</h3>
          <div className="mb-3">
            <label className="form-label">EMAIL</label>
            <input className="form-control" type="text" placeholder="Email"/>
          </div>
          <div className="mb-3 btn-container d-grid">
            <button className="btn btn-primary btn-block"><i className="bi bi-unlock me-2 fs-5"></i>RESET</button>
          </div>
          <div className="mb-3 mt-3">
            <p className="semibold-text mb-0"><a href="#" data-toggle="flip"><i className="bi bi-chevron-left me-1"></i> Back to Login</a></p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
