function TechnologyNotes({ notes, techId, onNotesChange }) {
  return (
    <div className="notes-section">
      <h4>Мои заметки:</h4>
      
      <textarea
        value={notes}
        onChange={(e) => onNotesChange(techId, e.target.value)}
        placeholder="Записывайте важные мысли..."
        rows="4"
      />

      <div className="notes-info">
        {notes.length > 0 
          ? `Сохранено (${notes.length} символов)`
          : "Нет заметок"}
      </div>
    </div>
  );
}

export default TechnologyNotes;