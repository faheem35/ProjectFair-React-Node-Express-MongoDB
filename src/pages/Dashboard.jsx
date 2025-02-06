import React, { useEffect, useState } from 'react'
import HeaderBlock from '../components/HeaderBlock'
import View from '../components/View'
import Profile from '../components/Profile'

const Dashboard = () => {
  const [userName, setUserName]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUserName(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }
  },[])
  
  return (
   <>
      <HeaderBlock insideDashboard={true}/>  {/*conditional rendering  */}
     <div style={{paddingTop:'100px'}} className='container-fluid'>
      <div className='row mt-3'>
        <div className="col-lg-8">
          <h1>Welcome <span className='text-warning'>{userName},</span></h1>
          <View/>

        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>

      </div>
      
     </div>
   </>
  )
}

export default Dashboard