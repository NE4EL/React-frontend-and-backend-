import './Modal.css';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-background" onClick={handleBgClick}>
      <div className="modal-window">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;