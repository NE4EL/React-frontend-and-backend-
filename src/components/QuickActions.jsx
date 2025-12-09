import { useState } from 'react';
import Modal from './Modal';

function QuickActions({ onMarkAllCompleted, onResetAll, technologies }) {
  const [showModal, setShowModal] = useState(false);

  const handleExport = () => {
    const data = JSON.stringify(technologies, null, 2);
    console.log("Экспортированный JSON:", data);
    setShowModal(true);
  };

  return (
    <div className="quick-actions">
      <h3>Быстрые действия</h3>
      
      <button onClick={onMarkAllCompleted}>✓ Сделать все выполненными</button>
      <button onClick={onResetAll}>↺ Сбросить статусы</button>
      <button onClick={handleExport}>📤 Экспорт</button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Экспорт данных"
      >
        <p>Данные экспортированы! Проверь консоль.</p>
      </Modal>
    </div>
  );
}

export default QuickActions;