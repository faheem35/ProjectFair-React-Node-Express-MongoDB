// // import React, { useEffect, useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import landingImg from '../assets/landingImg.png'
// // import ProjectCard from "../components/ProjectCard"
// // import { Card } from 'react-bootstrap'
// // import { getHomeProjectAPI } from '../services/allAPI'
// // const Home = () => {

// //   const [allHomeProjects,setAllHomeProjects]=useState([])

// //   const navigate = useNavigate()

// //   useEffect(()=>{
// //     getAllHomeProjects()
// //   },)

// //   const getAllHomeProjects = async ()=>{
// //     try{
// //       const result = await getHomeProjectAPI()
// //       if(result.status == 200){
// //         setAllHomeProjects(result.data)
// //       }

// //     }catch(err){
// //       console.log(err);
      
// //     }
// //   }

// //   const handleProjects=()=>{
// //    if(sessionStorage.getItem("token")){
// //     navigate("/projects")
// //    }else{
// //     alert("Please login!!!")
// //    }
// //   }

// //   return (
// //     <>
// //       <div className='min-vh-100 d-flex justify-content-center align-items-center rounded shadow w-100 ' >
// //         <div className='container'>
// //           <div className='row align-items-center'>
// //             <div className='col-lg-6'>
// //               <h1 style={{ fontSize: '80px' }}> <i class="fa-brands fa-docker "></i> 
// //                ProjectVerse</h1>
// //               <p style={{ textAlign: 'justify' }}>One Step Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
// //               {
// //                 sessionStorage.getItem("token")?
// //                 <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
// //                 :
// //                 <Link to={'/login'} className='btn btn-warning'>Start to explore</Link>
// //               }

// //             </div>
// //             <div className='col-lg-6'>
// //               <img className='img-fluid' src={landingImg} alt="landing" />
// //             </div>

// //           </div>


// //         </div>




// //       </div>

// //       <div className='mt-5 text-center'>
// //         <h1 className='mb-5'>Explore our projects</h1>
// //         <marquee >
// //           <div className='d-flex'>
// //             {
// //               allHomeProjects?.map(project=>(
// //                 <div className='me-5'>
// //               <ProjectCard displayData={project}/>
// //             </div>
// //               ))
// //             }
// //           </div>
// //         </marquee>
// //         <button onClick={handleProjects} className='btn btn-link mt-5'>Click here to view More Projects...</button>
// //       </div>

// //       <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>

// //         <h1>Out Testimonials</h1>
// //         <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>

// //           <Card style={{ width: '18rem' }}>

// //             <Card.Body>
// //               <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
// //                 <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="" />
// //                 Max Miller
// //               </Card.Title>

// //               <Card.Text>
// //                 <div className='d-flex justify-content-center'>
// //                   <i class="fa-solid fa-star text-warning"></i>
// //                   <i class="fa-solid fa-star text-warning"></i>
// //                   <i class="fa-solid fa-star text-warning"></i>
// //                   <i class="fa-solid fa-star text-warning"></i>
// //                 </div>

// //                 <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.</p>

// //               </Card.Text>


// //             </Card.Body>
// //           </Card>

// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Home




// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import landingImg from '../assets/landingImg.png';
// import ProjectCard from "../components/ProjectCard";
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import { getHomeProjectAPI } from '../services/allAPI';

// const Home = () => {
//   const [allHomeProjects, setAllHomeProjects] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllHomeProjects();
//   }, []);

//   const getAllHomeProjects = async () => {
//     try {
//       const result = await getHomeProjectAPI();
//       if (result.status === 200) {
//         setAllHomeProjects(result.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleProjects = () => {
//     if (sessionStorage.getItem("token")) {
//       navigate("/projects");
//     } else {
//       alert("Please login!!!");
//     }
//   };

//   return (
//     <>
//       {/* Landing Section */}
//       <div className='min-vh-100 d-flex justify-content-center align-items-center w-100'>
//         <Container>
//           <Row className='align-items-center'>
//             <Col lg={6} className='text-center text-lg-start'>
//               <h1 style={{ fontSize: '3.5rem' }}>
//                 <i className="fa-brands fa-docker"></i> ProjectVerse
//               </h1>
//               <p className='mt-3' style={{ textAlign: 'justify' }}>
//                 One Step Destination for all Software Development Projects. Where users can add and manage their projects as well as access all projects available on our website... What are you waiting for!!!
//               </p>
//               {sessionStorage.getItem("token") ? (
//                 <Link to='/dashboard' className='btn btn-warning mt-3'>MANAGE YOUR PROJECTS</Link>
//               ) : (
//                 <Link to='/login' className='btn btn-warning mt-3'>Start to explore</Link>
//               )}
//             </Col>
//             <Col lg={6} className='text-center mt-5 mt-lg-0'>
//               <img src={landingImg} className='img-fluid' alt="landing" />
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Explore Projects Section */}
//       <Container-fluid className='mt-5 text-center'>
//         <h1 className='mb-5 text-center'>Explore our projects</h1>
//         <div className="overflow-auto">
//           <marquee >
//           <div className='d-flex'>
//             {allHomeProjects?.map((project, index) => (
//               <div key={index} className='me-4'>
//                 <ProjectCard displayData={project} />
//               </div>
//             ))}
//           </div>
//           </marquee>
//         </div>
//         <div className="d-flex justify-content-center">
//   <Button variant='link' className='mt-5' onClick={handleProjects}>
//     Click here to view More Projects...
//   </Button>
// </div>

//       </Container-fluid>

//       {/* Testimonials Section */}
//       <Container className='d-flex flex-column align-items-center mt-5'>
//         <h1>Our Testimonials</h1>
//         <Row className='justify-content-center mt-4 w-100'>
//           {/* testi 1 */}
//           <Col xs={12} sm={6} md={4} lg={3}>
//             <Card className='text-center shadow-sm'>
//               <Card.Body>
//                 <Card.Title>
//                   <img
//                     width="60px"
//                     height="60px"
//                     className="rounded-circle img-fluid mb-2"
//                     src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
//                     alt="User"
//                   />
//                   <div>Max Miller</div>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className='d-flex justify-content-center mb-2'>
//                     {[...Array(4)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star text-warning me-1"></i>
//                     ))}
//                   </div>
//                   <p style={{ textAlign: 'justify' }}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.
//                   </p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
// {/* testi 2 */}
//           <Col xs={12} sm={6} md={4} lg={3}>
//             <Card className='text-center shadow-sm'>
//               <Card.Body>
//                 <Card.Title>
//                   <img
//                     width="60px"
//                     height="60px"
//                     className="rounded-circle img-fluid mb-2"
//                     src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
//                     alt="User"
//                   />
//                   <div>Alex</div>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className='d-flex justify-content-center mb-2'>
//                     {[...Array(3)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star text-warning me-1"></i>
//                     ))}
//                   </div>
//                   <p style={{ textAlign: 'justify' }}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.
//                   </p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
// {/* testi 3 */}
//           <Col xs={12} sm={6} md={4} lg={3}>
//             <Card className='text-center shadow-sm'>
//               <Card.Body>
//                 <Card.Title>
//                   <img
//                     width="60px"
//                     height="60px"
//                     className="rounded-circle img-fluid mb-2"
//                     src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
//                     alt="User"
//                   />
//                   <div>Shariq</div>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className='d-flex justify-content-center mb-2'>
//                     {[...Array(4)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star text-warning me-1"></i>
//                     ))}
//                   </div>
//                   <p style={{ textAlign: 'justify' }}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.
//                   </p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
// {/* testi 4 */}
//           <Col xs={12} sm={6} md={4} lg={3}>
//             <Card className='text-center shadow-sm'>
//               <Card.Body>
//                 <Card.Title>
//                   <img
//                     width="60px"
//                     height="60px"
//                     className="rounded-circle img-fluid mb-2"
//                     src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
//                     alt="User"
//                   />
//                   <div>Hamid</div>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className='d-flex justify-content-center mb-2'>
//                     {[...Array(5)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star text-warning me-1"></i>
//                     ))}
//                   </div>
//                   <p style={{ textAlign: 'justify' }}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur culpa officia.
//                   </p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>

          
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import landingImg from '../assets/landingImg.png';
import ProjectCard from "../components/ProjectCard";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { getHomeProjectAPI } from '../services/allAPI';

const Home = () => {
  const [allHomeProjects, setAllHomeProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllHomeProjects();
  }, []);

  const getAllHomeProjects = async () => {
    try {
      const result = await getHomeProjectAPI();
      if (result.status === 200) {
        setAllHomeProjects(result.data);
        console.log(result.data);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleProjects = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/projects");
    } else {
      alert("Please login!!!");
    }
  };

  return (
    <>
      {/* Landing Section */}
      <div className="min-vh-100 d-flex justify-content-center align-items-center w-100 ">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-3">
                <i className="fa-brands fa-docker"></i> ProjectVerse
              </h1>
              <p className="mt-3" style={{ textAlign: 'justify' }}>
              Your ultimate hub for all software development projects — add, manage, and <br />explore a wide range of projects in one place. Start your journey today!
              </p>
              {sessionStorage.getItem("token") ? (
                <Link to="/dashboard" className="btn btn-warning mt-3">MANAGE YOUR PROJECTS</Link>
              ) : (
                <Link to="/login" className="btn btn-warning mt-3">Start to explore</Link>
              )}
            </Col>
            <Col lg={6} className="text-center mt-5 mt-lg-0">
              <img src={landingImg} className="img-fluid" alt="landing" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Explore Projects Section */}
      <Container fluid className="mt-5 text-center">
        <h1 className="mb-5 text-center">Explore our projects</h1>
        <div className="overflow-auto">
          <marquee>
            <div className="d-flex">
              {allHomeProjects?.map((project, index) => (
                <div key={index} className="me-4">
                  <ProjectCard displayData={project} />
                </div>
              ))}
            </div>
          </marquee>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="link" className="mt-5" onClick={handleProjects}>
            Click here to view More Projects...
          </Button>
        </div>
      </Container>

      {/* Testimonials Section */}
      <Container className="d-flex flex-column align-items-center mt-5">
        <h1>Our Testimonials</h1>
        <Row className="justify-content-center mt-4 w-100">
          {/* Testimonial 1 */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center shadow-sm" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title>
                  <img
                    width="60px"
                    height="60px"
                    className="rounded-circle img-fluid mb-2"
                    src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png"
                    alt="User"
                  />
                  <div>Max Miller</div>
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-center mb-2" >
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                  The application made it so easy to explore all the exciting projects at the fair. A fantastic user-friendly experience!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 2 */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center shadow-sm" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title>
                  <img
                    width="60px"
                    height="60px"
                    className="rounded-circle img-fluid mb-2"
                    src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                    alt="User"
                  />
                  <div>Alex</div>
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-center mb-2" >
                    {[...Array(3)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                  I had a great time using the ProjectVerse! It was a smooth and interactive experience.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 3 */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center shadow-sm" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title>
                  <img
                    width="60px"
                    height="60px"
                    className="rounded-circle img-fluid mb-2"
                    src="https://static.vecteezy.com/system/resources/previews/035/066/209/non_2x/user-avatar-male-illustration-design-free-png.png"
                    alt="User"
                  />
                  <div>Shariq</div>
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-center mb-2">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                  As a visitor, the app was a lifesaver! I could quickly find the projects I was most interested in.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 4 */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center shadow-sm" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title>
                  <img
                    width="60px"
                    height="60px"
                    className="rounded-circle img-fluid mb-2"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"
                    alt="User"
                  />
                  <div>Hamid</div>
                </Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                  I loved how easy it was to upload my project to the app. The exposure I got was invaluable
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
