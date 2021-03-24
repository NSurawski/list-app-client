import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ListForm = ({ list, handleSubmit, handleChange }) => {
  const [showCreateModal, setShowCreateModal] = useState(true)
  const [backToIndex, setBackToIndex] = useState(false)

  const handleCloseCreateModal = (event) => {
    setShowCreateModal(false)
    setBackToIndex(true)
  }

  if (backToIndex) {
    return (
      <Redirect to={'/index-user'} />
    )
  }

  return (
    <Modal
      show={showCreateModal}
      onHide={handleCloseCreateModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create A List Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>List Item</Form.Label>
            <Form.Control
              type="text"
              name="producer"
              placeholder="List Item"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleCloseCreateModal}>
              Close
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ListForm
