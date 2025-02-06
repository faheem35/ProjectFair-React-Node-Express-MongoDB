import React, { useContext, useState } from 'react'
import authImg from "../assets/loginRegisterImg.png"
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import { tokenAuthContext } from '../contexts/AuthContextAPI'


const Auth = ({ insideRegister }) => {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const [isLogin,setIsLogin]=useState(false)

  const navigate=useNavigate()

  const [inputData, setInputData]=useState({
    username:'', email:'', password:''
  })
  console.log(inputData);

  const handleRegister=async(e)=>{
    e.preventDefault()
    console.log("inside handleRegister");
    
    if(inputData.username && inputData.email && inputData.password ){
      // alert("make api call")
      try{
        const result= await registerAPI(inputData)
        console.log(result);
        if(result.status===200){
          alert(`welcome ${result.data.username}, please login to explore our website!!!`)
          navigate('/login')
          setInputData({username:'', email:'', password:''})
        } else{
          if(result.response.status==406) //if it is success, the result is in data of axios. else its in response fiels of axios
          {
            alert(result.response.data)
            setInputData({username:'', email:'', password:''})
            navigate('/login')
          }

        }

      }catch(err){
        console.log(err);
      }

    }else{
      alert("please fill the form!!!")
    }
    
  }

  const handleLogin= async(e)=>{
    e.preventDefault()
    if(inputData.email && inputData.password)
      try{
    const result= await loginAPI(inputData)
    if(result.status == 200){
      sessionStorage.setItem("user", JSON.stringify(result.data.user))
      sessionStorage.setItem("token",result.data.token)
      setIsAuthorised(true)
      setIsLogin(true)
     setTimeout(()=>{
      setInputData({ username:'', email:'', password:''})
      navigate('/')
      setIsLogin(false)
     },2000)
    }else{
      alert("Invalis Email/Password")
    }
    }catch(err){
      console.log(err);
      
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
                    <Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>

                }

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control value={inputData.email}  onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
                </FloatingLabel>

                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                      <p>Already A User? Please Click here to <Link to={'/login'}> Login
                     
                      </Link></p>
                    </div>
                    :
                    <div className='mt-3'>
                      <button onClick={handleLogin} className='btn btn-primary mb-2 d-flex'>Login  {isLogin && <Spinner animation="border" variant="light" />}
                      </button>
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