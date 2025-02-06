import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadProjectImg from '../assets/uploadProjectImg.png'
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../contexts/ContextApi';

const Add = () => {
  const {addProjectResponse, setAddProjectResponse}= useContext(addProjectResponseContext)
  const[preview,setPreview]=useState("")
  const [imageFileStatus,setImageFileStatus]=useState(false)
  const [projectDetails,setprojectDetails]= useState({
    title:"",languages:"",overview:"", github:"",website:"", projectImg:""
  })
  console.log(projectDetails);

  

  useEffect(()=>{
    if(projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpg" || projectDetails.projectImg.type=="image/jpeg" ){
      //valid image
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }else{
      //invalid image
      setImageFileStatus(false)
      setPreview("")
      setprojectDetails({...projectDetails,projectImg:""})
      
    }
  },[projectDetails.projectImg])
  

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPreview("")
    setImageFileStatus(false)
    setprojectDetails({title:"",languages:"",overview:"", github:"",website:"", projectImg:""})
  }
  const handleShow = () => setShow(true);

  const handleAddProject=async()=>{
    const { title,languages,overview, github,website, projectImg}=projectDetails
    if(title && languages && overview && github && website && projectImg){
      // alert("procced api call")
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImg",projectImg)
      const token = sessionStorage.getItem('token')
        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          //make api call
          try{
            const result = await addProjectAPI(reqBody,reqHeader)
            if(result.status == 200){
              alert("project added successfully!!!")
              setAddProjectResponse(result)
              handleClose()
            }else{
              alert(result.response.data)

            }

          }catch(err){
                console.log(err);
                
          }
        }
      

    }else{
      alert("please fill the form completely")
    }
  }

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'>+ New Project</button>


      <Modal centered size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-4'>

              <label >   {/*label is an form element */}
                <input  onChange={e=>setprojectDetails({...projectDetails,projectImg:e.target.files[0]})} type="file" style={{display:'none'}}/>
                <img height={'200px'} className='img-fluid' src={preview?preview: uploadProjectImg} alt="" />
              </label>
              {!imageFileStatus && 
              <div className='text-warning fw-bolder my-2'>
                *Upload Only the following file types (jpeg, jpg, png) here!!!</div>
                }
            </div>
            <div className='col-lg-8'>

              <div className='mb-2'>
                <input value={projectDetails.title} onChange={e=>setprojectDetails({...projectDetails,title:e.target.value})} type="text" placeholder='Project Title' className='form-control' />
                </div>

                <div className='mb-2'><input type="text" value={projectDetails.languages} onChange={e=>setprojectDetails({...projectDetails,languages:e.target.value})} placeholder='Languages used in project' className='form-control' /></div>

                <div className='mb-2'><input value={projectDetails.overview} onChange={e=>setprojectDetails({...projectDetails,overview:e.target.value})} type="text" placeholder='Project overview' className='form-control' /></div>

                <div className='mb-2'><input value={projectDetails.github} onChange={e=>setprojectDetails({...projectDetails,github:e.target.value})} type="text" placeholder='project Github link' className='form-control' /></div>

                <div className='mb-2'><input value={projectDetails.website} onChange={e=>setprojectDetails({...projectDetails,website:e.target.value})} type="text" placeholder='project Website link' className='form-control' /></div>
              
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add