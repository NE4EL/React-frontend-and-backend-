import { useState } from "react";

function TechnologyResources({ tech, onLoadResources }) {
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await onLoadResources(tech.id);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Если resources нет, используем пустой массив
  const resources = tech.resources || [];

  return (
    <div className="tech-resources">
      <h4>Ресурсы:</h4>
      <ul>
        {resources.length > 0 ? (
          resources.map((r, i) => (
            <li key={i}>
              <a href={r} target="_blank" rel="noopener noreferrer">
                {r}
              </a>
            </li>
          ))
        ) : (
          <li>Ресурсов пока нет</li>
        )}
      </ul>
      <button onClick={load} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить дополнительные ресурсы"}
      </button>
    </div>
  );
}

export default TechnologyResources;