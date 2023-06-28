import React from 'react'
import { Modal
 } from 'bootstrap'
export default function AddDrug() {
  return (
    <div>
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Drug Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary">Close</button>
          <button variant="primary">Save changes</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}
