import './TechnologyCard.css';

function TechnologyCard({ id, title, description, status, notes, onStatusChange, onNotesClick }) {
  
  const handleClick = () => {
    let newStatus = "";

    if (status === "not-started") newStatus = "in-progress";
    else if (status === "in-progress") newStatus = "completed";
    else newStatus = "not-started";

    onStatusChange(id, newStatus);
  };

  return (
    <div 
      className={`technology-card status-${status}`}
    >
      <div onClick={handleClick}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="status-label">{status}</span>
      </div>

      <button className="notes-btn" onClick={() => onNotesClick(id)}>
        ✏️ Заметки
      </button>
    </div>
  );
}

export default TechnologyCard;