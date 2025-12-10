import { useState, useEffect } from 'react';

function useTechnologiesApi() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockTechnologies = [
        { id: 1, title: 'React', description: 'UI библиотека', status: 'not-started', resources: ['https://react.dev'], category: 'frontend', difficulty: 'beginner' },
        { id: 2, title: 'Node.js', description: 'Серверная платформа', status: 'in-progress', resources: ['https://nodejs.org'], category: 'backend', difficulty: 'intermediate' }
      ];
      setTechnologies(mockTechnologies);
    } catch (err) {
      setError('Не удалось загрузить технологии');
    } finally {
      setLoading(false);
    }
  };

  const addTechnology = (techData) => {
    const newTech = { id: Date.now(), status: 'not-started', ...techData };
    setTechnologies(prev => [...prev, newTech]);
    return newTech;
  };

  useEffect(() => { fetchTechnologies(); }, []);

  return { technologies, setTechnologies, loading, error, fetchTechnologies, addTechnology };
}

export default useTechnologiesApi;