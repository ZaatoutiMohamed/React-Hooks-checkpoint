import React, {useState} from 'react';
import {Modal,Button,InputGroup,FormControl,Form} from 'react-bootstrap';
import { Rating } from "@mui/material";

function MoDal({handleAdd}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState ('');
  const [posterURL , setPosterURL] = useState ('');
  const [description , setDescription] = useState ('');
  const [rate , setRate] = useState (0);

  return (
    /* Modal from react-bootstrap*/
    <>
      <Button 
        id = "buttonAdd"
        variant="primary" 
        onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">movie title</InputGroup.Text>
    <FormControl
      onChange ={(e)=>setTitle(e.target.value)}
      placeholder="movie title"
      aria-label="title"
      aria-describedby="basic-addon1"
    />
      
  </InputGroup>


  <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon2">Rate</InputGroup.Text>    

      <Rating name="simple-controlled" onChange={(e)=> setRate(e.target.value)} />
      
  </InputGroup>

  <Form.Label htmlFor="basic-url">Movie URL</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      URL
    </InputGroup.Text>
    <FormControl
    onChange ={(e)=>setPosterURL(e.target.value)}
    id="basic-url" 
    aria-describedby="basic-addon3" />
  </InputGroup>
  

  <InputGroup>
    <InputGroup.Text >description</InputGroup.Text>

    <FormControl as="textarea" aria-label="With textarea" onChange={(e)=> setDescription(e.target.value)} />
  </InputGroup>
</>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
            onClick={()=>{handleAdd({id : Math.random () , title , description, posterURL , rate}); handleClose()} }>Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 export default MoDal;