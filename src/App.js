import React from "react";
import TechnologyCard from "./components/TechnologyCard";
import "./App.css";

function App() {
  const technologies = [
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
    { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' }
  ];

  return (
    <div className="container">
      <h1>Technology Tracker</h1>

      {technologies.map(tech => (
        <TechnologyCard
          key={tech.id}
          title={tech.title}
          description={tech.description}
          status={tech.status}
        />
      ))}
    </div>
  );
}

export default App;