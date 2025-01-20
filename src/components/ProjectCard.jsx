import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


const ProjectCard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card onClick={handleShow} className="btn shadow">
      <Card.Img height={'200px'} variant="top" src="https://www.cflowapps.com/wp-content/uploads/2018/07/task-management-process.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>


    
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='row'>
            <div className="col-lg-6">
              <img className='img-fluid' src="https://i5.walmartimages.com/asr/a36594b4-842d-473c-9127-87bc6b25f484_1.854fef866dec4f0b4363c2aa911514fc.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" alt="" />
            </div>

            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6 className='fw-bolder'>Languages Used: <span className='text-danger'>HTML,CSS</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel porro itaque ab accusantium ex praesentium voluptatibus. Distinctio accusamus rem ea in eligendi facere officiis consequuntur quas, unde similique natus.</p>

            </div>

          </div>

          <div className='mt-2 float-start'>
            <a href="" className='btn btn-secondary' target='blank'> <i class="fa-brands fa-github"></i> </a>
            <a href="" className='btn btn-secondary ms-2' target='blank'> <i class="fa-solid fa-link"></i> </a>
          </div>
        </Modal.Body>
       
      </Modal>




    
    </>
  )
}

export default ProjectCard