import React from "react";
import "./Modal.css";

const Modal = ({ title, description, text, image, closeModal }) => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <div style={{ alignSelf: "center" }}>
            <h4>{title}</h4>
          </div>
          <div style={{ alignSelf: "center" }}>
            <p>{text}</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <button className="btn btn-hipster close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
