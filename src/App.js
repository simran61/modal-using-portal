import "./modal.css";
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>View Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal's Heading</h2>
        <p>Here comes the content of your modal.</p>
      </Modal>
    </div>
  );
};

export default App;
