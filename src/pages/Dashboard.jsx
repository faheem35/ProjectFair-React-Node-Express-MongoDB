import React from 'react'
import HeaderBlock from '../components/HeaderBlock'
import View from '../components/View'
import Profile from '../components/Profile'

const Dashboard = () => {
  return (
   <>
      <HeaderBlock insideDashboard={true}/>  {/*conditional rendering  */}
     <div style={{paddingTop:'100px'}} className='container-fluid'>
      <div className='row mt-3'>
        <div className="col-lg-8">
          <h1>Welcome <span className='text-warning'>User,</span></h1>
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