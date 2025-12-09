import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TechnologyList() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('technologies');
    if (saved) setTechnologies(JSON.parse(saved));
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Все технологии</h1>

        <Link className="btn" to="/add-technology">
          + Добавить технологию
        </Link>
      </div>

      <div className="tech-list">
        {technologies.map(tech => (
          <div key={tech.id} className="tech-card">
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
            <p className={`status status-${tech.status}`}>{tech.status}</p>

            <Link to={`/technology/${tech.id}`} className="btn-link">
              Подробнее →
            </Link>
          </div>
        ))}
      </div>

      {technologies.length === 0 && (
        <p>Нет технологий. Добавьте первую!</p>
      )}
    </div>
  );
}

export default TechnologyList;