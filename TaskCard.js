import React from "react";
import { Card, Button } from "react-bootstrap";

const TaskCard = ({ task, onMove }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Footer>Assigned: {task.assignedTo}</Card.Footer>
        <Button variant="primary" onClick={() => onMove(task)}>
          Move to Next Stage
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
