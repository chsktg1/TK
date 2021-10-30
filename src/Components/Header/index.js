import React, { Component } from 'react'

import {Link,withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

import Hat from '../assets/LoginPage/Hat.svg'

class Header extends Component {
    
    LogMeOut=()=>{
        Cookies.remove('jwt_token')
        const {history}=this.props
        history.replace('/login')
    }
    
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>
      <img src={Hat} alt=''/>
      
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse MakeIt" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link" to='/'>Home</Link>
      <Link className="nav-item nav-link" to='/cart'>Cart</Link>
      <button className='btn btn-primary' onClick={this.LogMeOut}>Logout</button>
    </div>
  </div>
</nav>
            </>
        )
    }
}

export default withRouter(Header)