import { useState } from "react";

function RoadmapImporter({ setTechnologies }) {
  const [importing, setImporting] = useState(false);

  const handleImportRoadmap = async (roadmapUrl) => {
    try {
      setImporting(true);

      // Пример: fetch данных с API
      const response = await fetch(roadmapUrl);
      if (!response.ok) throw new Error("Не удалось загрузить дорожную карту");

      const roadmapData = await response.json();

      // Добавляем новые технологии в текущее состояние
      setTechnologies((prev) => [
        ...prev,
        ...roadmapData.technologies.map((t) => ({
          ...t,
          id: Date.now() + Math.random(), // уникальный id
        })),
      ]);

      alert(`Импортировано ${roadmapData.technologies.length} технологий`);
    } catch (err) {
      alert(`Ошибка импорта: ${err.message}`);
    } finally {
      setImporting(false);
    }
  };

  const handleExampleImport = () => {
    // Пример с локальными mock данными
    const mockData = {
      technologies: [
        {
          title: "Redux",
          description: "Состояние приложения через Redux",
          category: "frontend",
          difficulty: "intermediate",
          status: "not-started",
          notes: "",
        },
        {
          title: "Express.js",
          description: "Фреймворк для Node.js",
          category: "backend",
          difficulty: "beginner",
          status: "not-started",
          notes: "",
        },
      ],
    };

    // Добавляем mock данные напрямую
    setTechnologies((prev) => [
      ...prev,
      ...mockData.technologies.map((t) => ({
        ...t,
        id: Date.now() + Math.random(),
      })),
    ]);

    alert(`Импортировано ${mockData.technologies.length} технологий`);
  };

  return (
    <div className="roadmap-importer">
      <h3>Импорт дорожной карты</h3>
      <button onClick={handleExampleImport} disabled={importing}>
        {importing ? "Импорт..." : "Импорт пример дорожной карты"}
      </button>
    </div>
  );
}

export default RoadmapImporter;