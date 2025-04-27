import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: "1", title: "Task 1", description: "Description 1", assignedTo: "User1" },
      { id: "2", title: "Task 2", description: "Description 2", assignedTo: "User2" },
    ],
    inProgress: [
      { id: "3", title: "Task 3", description: "Description 3", assignedTo: "User3" },
    ],
    done: [],
  });

  const handleMove = (task, fromColumn, toColumn) => {
    const updatedTasks = { ...tasks };
    updatedTasks[fromColumn] = updatedTasks[fromColumn].filter(t => t.id !== task.id);
    updatedTasks[toColumn] = [...updatedTasks[toColumn], task];
    setTasks(updatedTasks);
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) return;

    const task = tasks[sourceColumn].find(t => t.id === result.draggableId);
    handleMove(task, sourceColumn, destinationColumn);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Row>
          {["todo", "inProgress", "done"].map((status) => (
            <Col key={status} xs={12} md={4}>
              <h3>{status === "todo" ? "To Do" : status === "inProgress" ? "In Progress" : "Done"}</h3>
              <Droppable droppableId={status}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {tasks[status].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <TaskCard task={task} onMove={() => handleMove(task, status, getNextColumn(status))} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Col>
          ))}
        </Row>
      </DragDropContext>
    </Container>
  );
};

const getNextColumn = (column) => {
  const columns = ["todo", "inProgress", "done"];
  const currentIndex = columns.indexOf(column);
  return columns[(currentIndex + 1) % columns.length];
};

export default TaskBoard;
