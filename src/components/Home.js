import React, { useState } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Counter from "./Counter";

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

  return (
    <div>
      <div className="black-box">
        <h2>
          To Do List Manager ( <Counter /> )
        </h2>
      </div>
      <Form onSave={saveTask} />
      <TasksList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
