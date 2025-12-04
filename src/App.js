import { useState } from "react";
import TechnologyCard from './components/TechnologyCard';
import "./App.css";

function App() {
  // Список технологий
  const [technologies, setTechnologies] = useState([
    { 
      id: 1, 
      title: 'React Components', 
      description: 'Изучение базовых компонентов', 
      status: 'not-started' 
    },
    { 
      id: 2, 
      title: 'JSX Syntax', 
      description: 'Освоение синтаксиса JSX', 
      status: 'not-started' 
    },
    { 
      id: 3, 
      title: 'useState Hook', 
      description: 'Научиться работать с состоянием в React', 
      status: 'not-started' 
    }
  ]);

  // Функция обновления статуса
  const changeTechnologyStatus = (id, newStatus) => {
    setTechnologies(prev =>
      prev.map(tech =>
        tech.id === id ? { ...tech, status: newStatus } : tech
      )
    );
  };

  return (
    <div className="App">
      <h1>Моя дорожная карта по React</h1>

      <div className="cards-container">
        {technologies.map(tech => (
          <TechnologyCard
            key={tech.id}
            id={tech.id}
            title={tech.title}
            description={tech.description}
            status={tech.status}
            onStatusChange={changeTechnologyStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;