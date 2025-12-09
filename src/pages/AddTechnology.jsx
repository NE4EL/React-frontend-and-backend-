import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTechnology() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const save = () => {
    const saved = JSON.parse(localStorage.getItem('technologies')) || [];

    const newTech = {
      id: Date.now(),
      title,
      description,
      status: 'not-started',
      notes: ''
    };

    localStorage.setItem('technologies', JSON.stringify([...saved, newTech]));

    navigate('/technologies');
  };

  return (
    <div className="page">
      <h1>Добавить технологию</h1>

      <div className="form">
        <input 
          placeholder="Название"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button className="btn" onClick={save}>Сохранить</button>
      </div>
    </div>
  );
}

export default AddTechnology;