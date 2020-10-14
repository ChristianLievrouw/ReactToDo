import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TaskForm(props) {
  const { onSave } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const { title } = e.target;
    const { assigned } = e.target;
    const { difficulty } = e.target;

    const task = {
      title: title.value,
      assigned: assigned.value,
      difficulty: difficulty.value
    };
    console.log(task);
    onSave(task);
  }

  return (
    <Form onSubmit={handleSubmit} className="to-do-form">
      <h5>Add To Do Item</h5>
      <Form.Group controlId="ToDoItem">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control name="title" type="input" placeholder="Item Details" />
      </Form.Group>
      <Form.Group controlId="assignedTo">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control
          name="assigned"
          type="input"
          placeholder="Assignee Name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Control
          name="difficulty"
          type="range"
          className="form-control-range"
          min="1"
          max="5"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
  );
}
