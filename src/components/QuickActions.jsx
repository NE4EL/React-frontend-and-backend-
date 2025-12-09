function QuickActions({ technologies, setTechnologies }) {
  const markAllCompleted = () => {
    setTechnologies(prev =>
      prev.map(t => ({ ...t, status: "completed" }))
    );
  };

  const resetAll = () => {
    setTechnologies(prev =>
      prev.map(t => ({ ...t, status: "not-started" }))
    );
  };

  return (
    <div className="quick-actions">
      <h3>Быстрые действия</h3>
      <div className="action-buttons">
        <button onClick={markAllCompleted}>Отметить все как выполненные</button>
        <button onClick={resetAll}>Сбросить все статусы</button>
      </div>
    </div>
  );
}

export default QuickActions;