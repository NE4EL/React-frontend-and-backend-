import React, { useState } from 'react';

function DataImporter({ onImport }) {
  const [error, setError] = useState('');

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.technologies || !Array.isArray(data.technologies)) {
          throw new Error('Неверный формат JSON: отсутствует массив technologies');
        }
        onImport(data.technologies);
        setError('');
      } catch (err) {
        setError(err.message);
      }
    };
    reader.onerror = () => {
      setError('Ошибка чтения файла');
    };
    reader.readAsText(file);
  };

  return (
    <div className="data-importer">
      <label className="btn-primary">
        📤 Импорт JSON
        <input
          type="file"
          accept=".json"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </label>
      {error && <div className="import-error">{error}</div>}
    </div>
  );
}

export default DataImporter;