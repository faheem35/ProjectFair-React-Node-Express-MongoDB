import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadProjectImg from '../assets/uploadProjectImg.png'
import SERVER_URL from '../services/serverURL';
import { updateProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../contexts/ContextApi';

const Edit = ({project}) => {
  const {editProjectResponse, setEditProjectResponse}=useContext(editProjectResponseContext)

   const[preview,setPreview]=useState("")
    const [imageFileStatus,setImageFileStatus]=useState(false)
    const [projectDetails,setprojectDetails]= useState({
      id:project._id, title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""
    })
    console.log(projectDetails);

  const [show, setShow] = useState(false);

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
  
    const handleClose = () =>{
      setShow(false);
      setprojectDetails({ id:project._id, title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""})
    }
    const handleShow = () => {
      setShow(true);
      setprojectDetails({ id:project._id, title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""})
    }
    
    const handleUpdateProject=async()=>{
      const {id,title,languages,overview,github,website,projectImg}=projectDetails
      if(title&&languages&& overview&& github&& website){
       //api call -put- (id,updatedetails)
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("github",github)
        reqBody.append("website",website)
        preview ? reqBody.append("projectImg",projectImg) :  reqBody.append("projectImg",project.projectImg)
        const token = sessionStorage.getItem('token')
        if(token){
          //api call
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          try{
            const result = await updateProjectAPI(id,reqBody,reqHeader)
            if(result.status == 200){
              alert("project updated successfully!!!")
              handleClose()
              setEditProjectResponse(result)
            }

          }catch(err){
            console.log(err);
            
          }
        }

      }else{
        alert("please fill the form completely!!!")
      }

    }
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
                             <input  onChange={e=>setprojectDetails({...projectDetails,projectImg:e.target.files[0]})} type="file" style={{display:'none'}}/>
                             <img height={'200px'} className='img-fluid' src={preview?preview: `${SERVER_URL}/uploads/${project.projectImg}`} alt="" />
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
             <Button onClick={handleUpdateProject} variant="primary">Update</Button>
           </Modal.Footer>
         </Modal>
   
   </>
  )
}

export default Edit