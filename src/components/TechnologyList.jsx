function TechnologyList({ technologies, setTechnologies, onEdit }) {
  const toggleStatus = (id) => {
    setTechnologies(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'not-started' ? 'in-progress' : t.status === 'in-progress' ? 'completed' : 'not-started' } : t));
  };

  return (
    <div>
      {technologies.map(t => (
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <button onClick={() => toggleStatus(t.id)}>
            {t.status === 'completed' ? '✅ Завершено' : t.status === 'in-progress' ? '🔄 В процессе' : '⏳ Не начато'}
          </button>
          <button onClick={() => onEdit(t)}>Редактировать</button>
        </div>
      ))}
    </div>
  );
}

export default TechnologyList;