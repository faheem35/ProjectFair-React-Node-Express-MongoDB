import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

//registerAPI called by auth compoenent when user clicks on register button
export const registerAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}


//loginAPI called by auth compoenent when user clicks on login button
export const loginAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


//addProjectAPI called by Add compoenent when user clicks on Add-project button
export const addProjectAPI=async(reqBody,reqHeader)=>{
          return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

//getHomeProjectAPI called by Home compoenent when page loaded in browser (useEffect())
export const getHomeProjectAPI=async()=>{
          return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

//allProjectAPI called by projects compoenent when page loaded in browser (useEffect())
export const allProjectAPI=async(searchKey,reqHeader)=>{
          return await commonAPI("GET",`${SERVER_URL}/all-project?search=${searchKey}`,{},reqHeader)
}

//userProjectAPI called by view compoenent when page loaded in browser (useEffect())
export const userProjectAPI=async(reqHeader)=>{
          return await commonAPI("GET",`${SERVER_URL}/user-project`,{},reqHeader)
}

//updateProjectAPI called by Edit compoenent when user clicked on update button (/projects/6799e19dd12049f0300fc494/edit)
export const updateProjectAPI=async(id,reqBody,reqHeader)=>{
          return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

//userProjectRemoveAPI called by View compoenent when user clicked on delete button (/projects/6799e19dd12049f0300fc494/remove)
export const userProjectRemoveAPI=async(id,reqHeader)=>{
          return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

//updateUserAPI called by profile compoenent when user clicked on update button 
export const updateUserAPI=async(reqBody,reqHeader)=>{
          return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}