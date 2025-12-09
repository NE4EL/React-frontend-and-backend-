import TechnologyResources from "./TechnologyResources";

function TechnologyCard({ tech, onStatusChange, loadTechnologyResources }) {
  return (
    <div className={`technology-card status-${tech.status}`}>
      <h3>{tech.title}</h3>
      <p>{tech.description}</p>
      <p>
        <strong>Категория:</strong> {tech.category} | <strong>Сложность:</strong> {tech.difficulty}
      </p>

      {/* Кнопки изменения статуса */}
      <div className="status-buttons">
        <button
          className={tech.status === "not-started" ? "active" : ""}
          onClick={() => onStatusChange(tech.id, "not-started")}
        >
          Не начато
        </button>
        <button
          className={tech.status === "in-progress" ? "active" : ""}
          onClick={() => onStatusChange(tech.id, "in-progress")}
        >
          В процессе
        </button>
        <button
          className={tech.status === "completed" ? "active" : ""}
          onClick={() => onStatusChange(tech.id, "completed")}
        >
          Завершено
        </button>
      </div>

      {/* Ресурсы */}
      <TechnologyResources tech={tech} onLoadResources={loadTechnologyResources} />
    </div>
  );
}

export default TechnologyCard;