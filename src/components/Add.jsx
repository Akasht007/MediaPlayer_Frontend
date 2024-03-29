import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [videos , setVideos] = useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    console.log(videos);

    const embedVideoLink =(e)=>{
      const {value} = e.target 
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideos({...videos, embedLink:link})
    }

    const handleUpload = async ()=>{
      const {id , caption, url , embedLink} = videos
      if(!id || !caption || !url || !embedLink){
        toast.warning("please fill all the field")
      }
      else{
        const response = await uploadAllVideo(videos)
        console.log(response);

        if(response.status>=200 && response.status<300){setUploadVideoStatus(response.data)
           toast.success(`${response.data.caption} is succesfully uploaded`)
          //close the modal
          handleClose()
        }
        else{
          console.log(response);
          toast.error('something went wrong')
        }
      }
  }

  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-arrow-up"></i></button>

    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following Details</p>


         <form className='border border-secondary rounded p-3'>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder="Enter video Id" onChange={(e)=>setVideos({...videos,id:e.target.value})} />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder="Enter video Caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})} />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder="Enter video image url " onChange={(e)=>setVideos({...videos,url:e.target.value})} />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder="Enter Youtube  video Link" onChange={(e) => embedVideoLink(e)} />
         </Form.Group>



         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />


    </>
  )
}

export default Add


//https://www.youtube.com/watch?v=IqwIOlhfCak

// https://www.youtube.com/embed/IqwIOlhfCak