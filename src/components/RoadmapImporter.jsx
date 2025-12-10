function RoadmapImporter({ setTechnologies }) {
  const handleExampleImport = () => {
    const newTechs = [
      { id: Date.now(), title: 'Vue.js', description: 'Фреймворк', status: 'not-started', resources: [], category: 'frontend', difficulty: 'beginner' }
    ];
    setTechnologies(prev => [...prev, ...newTechs]);
  };
  return <button onClick={handleExampleImport}>Импорт дорожной карты</button>;
}

export default RoadmapImporter;