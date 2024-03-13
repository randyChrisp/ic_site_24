import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
};

export default Modal;
