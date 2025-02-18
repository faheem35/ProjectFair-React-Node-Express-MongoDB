import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/landingImg.png'
import ProjectCard from "../components/ProjectCard"
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'
const Home = () => {

  const [allHomeProjects,setAllHomeProjects]=useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    getAllHomeProjects()
  },)

  const getAllHomeProjects = async ()=>{
    try{
      const result = await getHomeProjectAPI()
      if(result.status == 200){
        setAllHomeProjects(result.data)
      }

    }catch(err){
      console.log(err);
      
    }
  }

  const handleProjects=()=>{
   if(sessionStorage.getItem("token")){
    navigate("/projects")
   }else{
    alert("Please login!!!")
   }
  }

  return (
    <>
      <div className='min-vh-100 d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 style={{ fontSize: '80px' }}> <i class="fa-brands fa-docker"></i> ProjectVerse</h1>
              <p style={{ textAlign: 'justify' }}>One Step Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
              {
                sessionStorage.getItem("token")?
                <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                :
                <Link to={'/login'} className='btn btn-warning'>Start to explore</Link>
              }

            </div>
            <div className='col-lg-6'>
              <img className='img-fluid' src={landingImg} alt="landing" />
            </div>

          </div>


        </div>




      </div>

      <div className='mt-5 text-center'>
        <h1 className='mb-5'>Explore our projects</h1>
        <marquee >
          <div className='d-flex'>
            {
              allHomeProjects?.map(project=>(
                <div className='me-5'>
              <ProjectCard displayData={project}/>
            </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProjects} className='btn btn-link mt-5'>Click here to view More Projects...</button>
      </div>

      <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>

        <h1>Out Testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>

          <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="" />
                Max Miller
              </Card.Title>

              <Card.Text>
                <div className='d-flex justify-content-center'>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>

                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.</p>

              </Card.Text>


            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  )
}

export default Home