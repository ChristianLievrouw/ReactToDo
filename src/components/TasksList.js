import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

export default function (props) {
  console.log(props);

  const { tasks, onDelete, onChange } = props;

  return (
    <>
      {tasks.map((task, idx) => (
        <Toast key={idx} className="toast" onClose={() => onDelete(idx)}>
          <Toast.Header>
            <strong className="mr-auto">
              <Badge pill variant={taskItemVariant(task)} onClick={() => onChange(idx)}>
                {task.complete ? "Complete" : "Pending"}
              </Badge>{" "}
              {task.assigned}
            </strong>
            <small>Difficulty: {task.difficulty}</small>
          </Toast.Header>
          <Toast.Body>{task.title}</Toast.Body>
        </Toast>
      ))}
    </>
  );
}

function taskItemVariant(task) {
  if (task.complete) {
    return "success";
  }
  return "danger";
}
