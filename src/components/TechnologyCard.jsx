import './TechnologyCard.css';

function TechnologyCard({ tech, onStatusChange }) {
  const nextStatus =
    tech.status === "not-started"
      ? "in-progress"
      : tech.status === "in-progress"
      ? "completed"
      : "not-started";

  return (
    <div className={`technology-card status-${tech.status}`}>
      <h3>{tech.title}</h3>
      <p>{tech.description}</p>

      <button onClick={() => onStatusChange(tech.id, nextStatus)}>
        Статус: {tech.status} → {nextStatus}
      </button>
    </div>
  );
}

export default TechnologyCard;