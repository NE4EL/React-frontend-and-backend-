
import { useState, useEffect } from "react";

function useTechnologiesApi() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      setError(null);

      // имитация задержки
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock данные
      const mockTechnologies = [
        {
          id: 1,
          title: "React",
          description: "Библиотека для создания пользовательских интерфейсов",
          category: "frontend",
          difficulty: "beginner",
          resources: ["https://react.dev", "https://ru.reactjs.org"],
        },
        {
          id: 2,
          title: "Node.js",
          description: "Среда выполнения JavaScript на сервере",
          category: "backend",
          difficulty: "intermediate",
          resources: ["https://nodejs.org", "https://nodejs.org/ru/docs/"],
        },
        {
          id: 3,
          title: "TypeScript",
          description: "Типизированное надмножество JavaScript",
          category: "language",
          difficulty: "intermediate",
          resources: ["https://www.typescriptlang.org"],
        },
      ];

      setTechnologies(mockTechnologies);
    } catch (err) {
      setError("Не удалось загрузить технологии");
      console.error("Ошибка загрузки:", err);
    } finally {
      setLoading(false);
    }
  };


  const addTechnology = async (techData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newTech = {
        id: Date.now(),
        ...techData,
        createdAt: new Date().toISOString(),
      };

      setTechnologies((prev) => [...prev, newTech]);
      return newTech;
    } catch (err) {
      throw new Error("Не удалось добавить технологию");
    }
  };


  const loadTechnologyResources = async (techId) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      const newResources = [
        "https://youtube.com/playlist?react-course",
        "https://medium.com/react-article",
        "https://dev.to/react-guide",
      ];

      setTechnologies((prev) =>
        prev.map((t) =>
          t.id === techId ? { ...t, resources: [...t.resources, ...newResources] } : t
        )
      );

      return newResources;
    } catch (err) {
      throw new Error("Не удалось загрузить ресурсы");
    }
  };


  useEffect(() => {
    fetchTechnologies();
  }, []);


  return {
  technologies,
  setTechnologies,  
  loading,
  error,
  refetch: fetchTechnologies,
  addTechnology,
  loadTechnologyResources,
};
}

export default useTechnologiesApi;