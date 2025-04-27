// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div style={{height:'300px'}} className='mt-5 container w-100 '>
//       <div className='d-flex justify-content-between '>
      
//         {/* intro */}
//         <div>
//         <h5>
//         <i class="fa-brands fa-docker me-3"></i>
//         ProjectVerse
//         </h5>
//         <p>Designed and built with all the love in the world <br /> by the ProjectVerse with the help of our contributors.</p>
//         <p>Code licensed MIT, docs CC BY 3.0.</p>
//         <p>Currently v5.3.3.</p>
        
//         </div>
//         {/* links */}
//         <div className='d-flex flex-column'>
//           <h5>Links</h5>
//           <Link to={'/'} style={{textDecoration:'none' , color:'white'}} >Home Page</Link>
//           <Link to={'/login'} style={{textDecoration:'none' , color:'white'}} >Login Page</Link>
//           <Link to={'/register'} style={{textDecoration:'none' , color:'white'}} >Register Page</Link>
//         </div>
//         {/* guides */}
//         <div className='d-flex flex-column'>
//           <h5>Guides</h5>
//           <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
//           <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
//           <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>

//         </div>
//         {/* contact */}
//         <div className='d-flex flex-column'>
//         <h5>Contacts</h5>
//         <div className='d-flex'>
//           <input type="text" className='form-control me-3' placeholder='Enter Your Email Here...'/>
//           <button className='btn btn-warning'><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//         <div className='d-flex justify-content-between mt-3'>
//           <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
//           <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
//           <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
//           <a href="" style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone" target='_blank'></i></a>
//           <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
//         </div>
//         </div>
//         </div>
//       <p className='text-center mt-3'>Copyright ©ProjectVerse Inc. All rights reserved.</p>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='mt-5 py-5  '>
      <Container>
        <Row className='d-flex justify-content-between'>
          
          {/* Intro Section */}
          <Col xs={12} md={4} lg={4} className='mb-3'>
            <h4>
              <i className="fa-brands fa-docker me-1"></i>
              ProjectVerse
            </h4>
            <p>Designed and built with all the love in the world <br /> by the ProjectVerse with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </Col>

          {/* Links Section */}
          <Col xs={12} md={4} lg={2} className='mb-3'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link><br />
            <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login Page</Link><br />
            <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>Register Page</Link>
          </Col>

          {/* Guides Section */}
          <Col xs={12} md={4} lg={2} className='mb-3'>
            <h5>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">React</a><br />
            <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">React Bootstrap</a><br />
            <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">React Router</a>
          </Col>

          {/* Contact Section */}
          <Col xs={12} md={4} lg={3} className='mb-3'>
            <h5>Contacts</h5>
            <InputGroup>
              <FormControl
                placeholder="Enter Your Email Here..."
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <Button variant="warning" id="button-addon2">
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </InputGroup>
            <div className='d-flex justify-content-between mt-3'>
              <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" style={{textDecoration:'none', color:'white'}}>
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>

        </Row>
        <p className='text-center mt-3'>Copyright ©ProjectVerse Inc. All rights reserved.</p>
      </Container>
    </div>
  )
}

export default Footer
