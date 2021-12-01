import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
