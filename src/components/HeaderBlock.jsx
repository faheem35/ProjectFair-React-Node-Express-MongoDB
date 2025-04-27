import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'


const HeaderBlock = ({insideDashboard}) => {

  const navigate =useNavigate()
  
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const logout =()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <Navbar className="border rounded position-fixed w-100">
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: 'white' }} className='fw-bolder'>
            <i class="fa-brands fa-docker me-1"></i>
         ProjectVerse
          </Navbar.Brand>
        </Link>
        {
          insideDashboard &&
          <div className='ms-auto'>
            <button onClick={logout} className='btn btn-link'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
          </div>
        }
      </Container>
    </Navbar>
  )
}

export default HeaderBlock