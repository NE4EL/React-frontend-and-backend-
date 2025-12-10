import { useState, useEffect } from 'react';

function TechnologyForm({ onSave, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    category: initialData.category || 'frontend',
    difficulty: initialData.difficulty || 'beginner',
    deadline: initialData.deadline || '',
    resources: initialData.resources || ['']
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Название обязательно';
    else if (formData.title.trim().length < 2) newErrors.title = 'Минимум 2 символа';
    else if (formData.title.trim().length > 50) newErrors.title = 'Максимум 50 символов';

    if (!formData.description.trim()) newErrors.description = 'Описание обязательно';
    else if (formData.description.trim().length < 10) newErrors.description = 'Минимум 10 символов';

    if (formData.deadline) {
      const deadlineDate = new Date(formData.deadline);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (deadlineDate < today) newErrors.deadline = 'Дедлайн не может быть в прошлом';
    }

    formData.resources.forEach((res, i) => {
      if (res && !isValidUrl(res)) newErrors[`resource_${i}`] = 'Некорректный URL';
    });

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResourceChange = (index, value) => {
    const newResources = [...formData.resources];
    newResources[index] = value;
    setFormData(prev => ({ ...prev, resources: newResources }));
  };

  const addResourceField = () => {
    setFormData(prev => ({ ...prev, resources: [...prev.resources, ''] }));
  };

  const removeResourceField = (index) => {
    if (formData.resources.length > 1) {
      const newResources = formData.resources.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, resources: newResources }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const cleanedData = {
      ...formData,
      resources: formData.resources.filter(r => r.trim() !== '')
    };
    onSave(cleanedData);
  };

  return (
    <form onSubmit={handleSubmit} className="technology-form" noValidate>
      <h2>{initialData.title ? 'Редактирование технологии' : 'Добавление технологии'}</h2>

      <div className="form-group">
        <label htmlFor="title">Название *</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Описание *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Категория</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile</option>
          <option value="devops">DevOps</option>
          <option value="database">Базы данных</option>
          <option value="tools">Инструменты</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="difficulty">Сложность</label>
        <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="beginner">Начинающий</option>
          <option value="intermediate">Средний</option>
          <option value="advanced">Продвинутый</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="deadline">Планируемая дата</label>
        <input
          id="deadline"
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          className={errors.deadline ? 'error' : ''}
        />
        {errors.deadline && <span className="error-message">{errors.deadline}</span>}
      </div>

      <div className="form-group">
        <label>Ресурсы</label>
        {formData.resources.map((res, i) => (
          <div key={i} className="resource-field">
            <input
              type="url"
              value={res}
              onChange={(e) => handleResourceChange(i, e.target.value)}
              className={errors[`resource_${i}`] ? 'error' : ''}
            />
            {formData.resources.length > 1 && (
              <button type="button" onClick={() => removeResourceField(i)}>×</button>
            )}
            {errors[`resource_${i}`] && (
              <span className="error-message">{errors[`resource_${i}`]}</span>
            )}
          </div>
        ))}
        <button type="button" onClick={addResourceField}>+ Добавить ресурс</button>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </div>
    </form>
  );
}

export default TechnologyForm;