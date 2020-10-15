import React, { useState } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Counter from "./Counter";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const defaultTask = [
  {
    title: "Take dog for a walk",
    difficulty: 1,
    complete: false,
    assigned: "Christian"
  },
  {
    title: "Create new Fitbit watch face",
    difficulty: 5,
    complete: true,
    assigned: "Maddie"
  }
];

export default function Tasks(props) {
  const [tasks, setTasks] = useState(defaultTask);

  function saveTask(task) {
    setTasks(tasks.concat(task));
  }

  function deleteTask(indexToRemove) {
    setTasks(tasks.filter((task, idx) => idx !== indexToRemove));
  }

  function toggleComplete(index) {
    let arr = [];
    for(let i = 0; i < tasks.length; i++) {
      arr[i] = tasks[i];
      if (i === index) {
        arr[index].complete = !arr[index].complete;
      }
      else {
        arr[i] = tasks[i];
      }
    }
    console.log(arr);
    setTasks(arr);
  }

  return (
    <div>
      <div className="black-box">
        <h2>
          Welcome
        </h2>
      </div>
      <Container>
        <Row>
          <Col md={4}>
      <Form onSave={saveTask} />
      </Col>
      <Col md={2}>
      </Col>
      <Col md={6}>
      <TasksList tasks={tasks} onDelete={deleteTask} onChange={toggleComplete} />
      </Col>
      </Row>
      </Container>
    </div>
  );
}
