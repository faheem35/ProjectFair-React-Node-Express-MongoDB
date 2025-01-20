import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadProjectImg from '../assets/uploadProjectImg.png'

const Edit = () => {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
   <> 
   <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>


   
         <Modal centered size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
           <Modal.Header closeButton>
             <Modal.Title>Update Project Details!!!</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <div className='row align-items-center'>
               <div className='col-lg-4'>
   
                 <label >   {/*label is an form element */}
                   <input type="file" style={{display:'none'}}/>
                   <img height={'200px'} className='img-fluid' src={uploadProjectImg} alt="" />
                 </label>
                 <div className='text-warning fw-bolder my-2'>
                   *Upload Only the following file types (jpeg, jpg, png) here!!!</div>
               </div>
               <div className='col-lg-8'>
   
                 <div className='mb-2'>
                   <input type="text" placeholder='Project Title' className='form-control' />
                   </div>
   
                   <div className='mb-2'><input type="text" placeholder='Languages used in project' className='form-control' /></div>
   
                   <div className='mb-2'><input type="text" placeholder='Project overview' className='form-control' /></div>
   
                   <div className='mb-2'><input type="text" placeholder='project Github link' className='form-control' /></div>
   
                   <div className='mb-2'><input type="text" placeholder='project Website link' className='form-control' /></div>
                 
               </div>
   
             </div>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Cancel
             </Button>
             <Button variant="primary">Update</Button>
           </Modal.Footer>
         </Modal>
   
   </>
  )
}

export default Edit