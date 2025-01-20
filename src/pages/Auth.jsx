import React, { useState } from 'react'
import authImg from "../assets/loginRegisterImg.png"
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Auth = ({ insideRegister }) => {

  const [inputData, setInputData]=useState({
    username:'', email:'', password:''
  })
  console.log(inputData);

  const handleRegister=(e)=>{
    e.preventDefault()
    console.log("inside handleRegister");
    
    if(inputData.username && inputData.email && inputData.password ){
      alert("make api call")
    }else{
      alert("please fill the form!!!")
    }
    
  }
  
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>



      <div className='container w-75'>

        <div className='card shadow p-2'>

          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='img-fluid' src={authImg} alt="" />

            </div>

            <div className='col-lg-6'>
              <h1 className='mt-2'> <i class="fa-brands fa-docker"></i> Project Fair</h1>
              <h5 className='mt-2'>Sign {insideRegister ? 'up' : 'in'} to your Account</h5>

              <Form>
                {
                  insideRegister &&
                  <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3">
                    <Form.Control onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>

                }

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
                </FloatingLabel>

                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                      <p>Already A User? Please Click here to <Link to={'/login'}> Login</Link></p>
                    </div>
                    :
                    <div className='mt-3'>
                      <button className='btn btn-primary mb-2'>Login</button>
                      <p>New User? Please Click here to <Link to={'/register'}> Register</Link></p>
                    </div>

                }

              </Form>

            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Auth