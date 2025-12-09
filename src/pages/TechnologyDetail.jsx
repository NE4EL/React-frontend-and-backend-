import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TechnologyDetail() {
  const { techId } = useParams();
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('technologies');
    if (!saved) return;

    const list = JSON.parse(saved);
    const found = list.find(t => t.id === Number(techId));

    setTechnology(found);
  }, [techId]);

  if (!technology) {
    return (
      <div className="page">
        <h1>Технология не найдена</h1>
        <Link className="btn" to="/technologies">← Назад</Link>
      </div>
    );
  }

  const updateStatus = (status) => {
    const saved = JSON.parse(localStorage.getItem('technologies'));

    const updated = saved.map(t =>
      t.id === Number(techId) ? { ...t, status } : t
    );

    localStorage.setItem('technologies', JSON.stringify(updated));
    setTechnology(prev => ({ ...prev, status }));
  };

  return (
    <div className="page">
      <h1>{technology.title}</h1>

      <p>{technology.description}</p>

      <h3>Статус:</h3>
      <div className="status-buttons">
        <button onClick={() => updateStatus('not-started')}>Не начато</button>
        <button onClick={() => updateStatus('in-progress')}>В процессе</button>
        <button onClick={() => updateStatus('completed')}>Завершено</button>
      </div>

      {technology.notes && (
        <>
          <h3>Заметки</h3>
          <p>{technology.notes}</p>
        </>
      )}

      <Link to="/technologies" className="btn">← Назад</Link>
    </div>
  );
}

export default TechnologyDetail;