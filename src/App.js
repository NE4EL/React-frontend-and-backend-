import useTechnologies from "./hooks/useTechnologies";
import ProgressBar from "./components/ProgressBar";
import TechnologyCard from "./components/TechnologyCard";
import QuickActions from "./components/QuickActions";
import "./App.css";

function App() {
  const {
    technologies,
    updateStatus,
    updateNotes,
    markAllCompleted,
    resetAll,
    progress
  } = useTechnologies();

  return (
    <div className="app">

      <h1>Трекер изучения технологий</h1>

      <ProgressBar progress={progress} label="Общий прогресс" />

      <QuickActions
        onMarkAllCompleted={markAllCompleted}
        onResetAll={resetAll}
        technologies={technologies}
      />

      <div className="tech-list">
        {technologies.map(tech => (
          <TechnologyCard
            key={tech.id}
            technology={tech}
            onStatusChange={updateStatus}
            onNotesChange={updateNotes}
          />
        ))}
      </div>

    </div>
  );
}

export default App;