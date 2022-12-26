import { useState } from "react";
import ModalOpen from "./ModalOpen";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>편집</button>
      <br />
      <button onClick={showModal}>삭제</button>
      {modalOpen && <ModalOpen setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Modal;
