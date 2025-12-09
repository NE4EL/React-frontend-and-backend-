import { useState } from "react";
import useTechnologiesApi from "./hooks/useTechnologiesApi";
import TechnologyList from "./components/TechnologyList";
import TechnologySearch from "./components/TechnologySearch";
import QuickActions from "./components/QuickActions";
import RoadmapImporter from "./components/RoadmapImporter";
import "./App.css";

function App() {
  // Достаем технологии и методы из хука
  const {
    technologies,
    setTechnologies,
    loading,
    error,
    refetch,
    loadTechnologyResources,
  } = useTechnologiesApi();

  // Поисковый запрос
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию и описанию
  const filteredTechnologies = technologies.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Загрузка технологий...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Трекер изучения технологий</h1>
        <button onClick={refetch} className="refresh-btn">
          Обновить
        </button>
      </header>

      {error && (
        <div className="app-error">
          <p>{error}</p>
          <button onClick={refetch}>Попробовать снова</button>
        </div>
      )}

      <main className="app-main">
        {/* Поиск технологий */}
        <TechnologySearch onSearch={setSearchQuery} />

        {/* Импорт дорожной карты */}
        <RoadmapImporter setTechnologies={setTechnologies} />

        {/* Быстрые действия */}
        <QuickActions
          technologies={filteredTechnologies}
          setTechnologies={setTechnologies}
        />

        {/* Список технологий */}
        <TechnologyList
          technologies={filteredTechnologies}
          setTechnologies={setTechnologies}
          loadTechnologyResources={loadTechnologyResources}
        />
      </main>
    </div>
  );
}

export default App;