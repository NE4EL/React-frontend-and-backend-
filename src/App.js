import { useState, useEffect } from "react";
import TechnologyCard from "./components/TechnologyCard";
import TechnologyNotes from "./components/TechnologyNotes";
import "./App.css";

function App() {

  // Состояние технологий

  const [technologies, setTechnologies] = useState([]);

  // Поиск

  const [searchQuery, setSearchQuery] = useState("");

  // Открытая заметка

  const [activeNotesId, setActiveNotesId] = useState(null);

  // Загружаем из localStorage

  useEffect(() => {
    const saved = localStorage.getItem("techTrackerData");
    if (saved) {
      setTechnologies(JSON.parse(saved));
      console.log("Данные загружены из localStorage");
    } else {
      // Если данных нет создаём начальное состояние
      setTechnologies([
        { 
          id: 1,
          title: "React Components",
          description: "Изучение компонентов",
          status: "not-started",
          notes: ""
        },
        { 
          id: 2,
          title: "JSX Syntax",
          description: "Основы JSX",
          status: "not-started",
          notes: ""
        },
        { 
          id: 3,
          title: "useState Hook",
          description: "Работа с состоянием",
          status: "not-started",
          notes: ""
        }
      ]);
    }
  }, []);


  useEffect(() => {
    if (technologies.length > 0) {
      localStorage.setItem("techTrackerData", JSON.stringify(technologies));
      console.log("Сохранено в localStorage");
    }
  }, [technologies]);

  const changeTechnologyStatus = (id, newStatus) => {
    setTechnologies(prev =>
      prev.map(t =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  const updateTechnologyNotes = (id, newNotes) => {
    setTechnologies(prev =>
      prev.map(t =>
        t.id === id ? { ...t, notes: newNotes } : t
      )
    );
  };


  const filteredTechnologies = technologies.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">

      <h1>Трекер изучения React</h1>

      {/* Поиск */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Поиск технологий..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span>Найдено: {filteredTechnologies.length}</span>
      </div>

      <div className="cards-container">
        {filteredTechnologies.map(tech => (
          <div key={tech.id}>

            <TechnologyCard
              id={tech.id}
              title={tech.title}
              description={tech.description}
              status={tech.status}
              notes={tech.notes}
              onStatusChange={changeTechnologyStatus}
              onNotesClick={setActiveNotesId}
            />

            {activeNotesId === tech.id && (
              <TechnologyNotes
                techId={tech.id}
                notes={tech.notes}
                onNotesChange={updateTechnologyNotes}
              />
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;