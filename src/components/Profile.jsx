import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import userUploadImage from '../assets/userUploadImage.jpg'

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='d-flex justify-content-evenly'>
        <h3 className='text-warning'>profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning'><i className='fa-solid fa-angle-down'></i></button>

      </div>



      <Collapse in={open}>
        <div id="example-collapse-text" className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
          <label className='text-center' >
            <input type="file" style={{ display: 'none' }} />
            <img height={'150px'} width={'150px'} className='img-fluid' src={userUploadImage} alt="" />
          </label>

          <div className='mb-2 w-100'>
            <input type="text" placeholder='USER GITHUB PROFILE LINK' className='form-control' />
          </div>
          <div className='mb-2 w-100'>
            <input type="text" placeholder='USER LINKEDIN PROFILE LINK' className='form-control' />
          </div>
          <div className='d-grid w-100 '>
            <button className='btn btn-warning'>Update Profile</button>

          </div>

        </div>
      </Collapse>

    </>

  )
}

export default Profile