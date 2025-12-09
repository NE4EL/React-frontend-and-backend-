import useLocalStorage from './useLocalStorage';

const initialTechnologies = [
  { id: 1, title: "React Components", description: "Компоненты", status: "not-started", notes: "", category: "frontend" },
  { id: 2, title: "JSX Syntax", description: "JSX основа", status: "not-started", notes: "", category: "frontend" },
  { id: 3, title: "Node.js Basics", description: "Серверный JS", status: "not-started", notes: "", category: "backend" }
];

function useTechnologies() {
  const [technologies, setTechnologies] = useLocalStorage('technologies', initialTechnologies);

  const updateStatus = (id, newStatus) => {
    setTechnologies(prev =>
      prev.map(t =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  const updateNotes = (id, newNotes) => {
    setTechnologies(prev =>
      prev.map(t =>
        t.id === id ? { ...t, notes: newNotes } : t
      )
    );
  };

  const markAllCompleted = () => {
    setTechnologies(prev =>
      prev.map(t => ({ ...t, status: "completed" }))
    );
  };

  const resetAll = () => {
    setTechnologies(prev =>
      prev.map(t => ({ ...t, status: "not-started" }))
    );
  };

  const progress = Math.round(
    (technologies.filter(t => t.status === "completed").length /
    technologies.length) * 100
  );

  return {
    technologies,
    updateStatus,
    updateNotes,
    markAllCompleted,
    resetAll,
    progress
  };
}

export default useTechnologies;