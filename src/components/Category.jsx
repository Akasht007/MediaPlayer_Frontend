import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal  from 'react-bootstrap/Modal';
import Form  from 'react-bootstrap/Form';
import { useState } from 'react';


function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
    <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
        </div>
        

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-2"></i>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className='border border-secondary rounded p-3'>
            

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              
             <Form.Control type="text" placeholder="Enter Category Name"/>

            </Form.Group>

          </form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>

        
        </>
  )
}

export default Category