function QuickActions({ technologies, setTechnologies }) {
  const completeAll = () => setTechnologies(prev => prev.map(t => ({ ...t, status: 'completed' })));
  return <button onClick={completeAll}>✅ Завершить все</button>;
}

export default QuickActions;