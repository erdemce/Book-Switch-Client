import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

export default function UploadPhotoForm(props) {
    return (
        <Modal>
        <Modal.Header closeButton>
            <Modal.Title>Choose a photo to upload</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(event)=>{
          props.onHide();
          props.handlePhoto(event)
        }}> enctype="multipart/form-data">
            <input type="file" name="photo" accept="image/png, image/jpg"/>
            <Button type="submit">Upload Photo</Button> 
        </Form>
        </Modal> 
    )
}
