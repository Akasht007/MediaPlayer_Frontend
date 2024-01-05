import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//upload videos

export const uploadAllVideo = async(reqBody)=>{
  return  await commonAPI('POST',`${serverURL}/videos`,reqBody)

}

//get all videos from json server

export const getAllVideos = async()=>{
    return await commonAPI('GET' , `${serverURL}/videos`,"")
}

//api to delete a vid


export const deleteAVideo = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add data to watch history

export const addToHistory = async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}



// api to get all history from json server

export const getAllHistory = async()=>{
  return await commonAPI('GET' , `${serverURL}/history`,"")
}

//api to add categories 

export const addToCategory= async(body)=>{
  return await commonAPI('POST',`${serverURL}/categories`,body)
}
