function DataExporter({ technologies }) {
  const handleExport = () => {
    const dataStr = JSON.stringify({ technologies }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'technologies.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  return <button onClick={handleExport}>Экспорт JSON</button>;
}

export default DataExporter;