import './TechnologyCard.css';

function TechnologyCard({ technology, onStatusChange, onNotesChange }) {
  const { id, title, description, status, notes } = technology;

  const nextStatus =
    status === "not-started" ? "in-progress" :
    status === "in-progress" ? "completed" :
    "not-started";

  return (
    <div className={`technology-card status-${status}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={() => onStatusChange(id, nextStatus)}>
        Статус: {status}
      </button>

      <textarea
        placeholder="Заметки..."
        value={notes}
        onChange={(e) => onNotesChange(id, e.target.value)}
      />
    </div>
  );
}

export default TechnologyCard;