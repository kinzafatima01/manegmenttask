import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Task Tracker</h1>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>To Do</h2>
            <div className="card">
              <div className="card-body">
                <p>Task A</p>
                <p><strong>Assigned:</strong> User1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2>In Progress</h2>
            <div className="card">
              <div className="card-body">
                <p>Task B</p>
                <p><strong>Assigned:</strong> User2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2>Done</h2>
            <div className="card">
              <div className="card-body">
                <p>Task C</p>
                <p><strong>Assigned:</strong> User3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
