import TechnologyCard from "./TechnologyCard";

function TechnologyList({ technologies, setTechnologies, loadTechnologyResources }) {
  if (!technologies || technologies.length === 0) {
    return (
      <div className="empty-state">
        <p>Технологий пока нет.</p>
      </div>
    );
  }

  // Функция изменения статуса отдельной технологии
  const handleStatusChange = (techId, newStatus) => {
    setTechnologies((prev) =>
      prev.map((t) => (t.id === techId ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          onStatusChange={handleStatusChange}
          loadTechnologyResources={loadTechnologyResources}
        />
      ))}
    </div>
  );
}

export default TechnologyList;