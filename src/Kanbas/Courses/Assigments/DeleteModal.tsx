import {Button, Modal} from "react-bootstrap";
import React from "react";

function DeleteModal(props: any) {
    const { show, onHide, onDeleteAssignment } = props;
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Assignment Prompt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this assignment?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => {onDeleteAssignment(); onHide();}}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>

            </Modal.Footer>
        </Modal>
    );
}
export default DeleteModal;