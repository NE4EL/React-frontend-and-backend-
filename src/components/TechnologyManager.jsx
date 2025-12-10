import { useState } from 'react';
import TechnologyForm from './TechnologyForm';
import TechnologyList from './TechnologyList';
import RoadmapImporter from './RoadmapImporter';
import DataImporter from './DataImporter';
import DataExporter from './DataExporter';

function TechnologyManager({ technologies, setTechnologies }) {
  const [showForm, setShowForm] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const handleSave = (techData) => {
    if (editingTech) {
      setTechnologies(prev => prev.map(t => t.id === editingTech.id ? { ...t, ...techData } : t));
    } else {
      const newTech = { id: Date.now(), status: 'not-started', ...techData };
      setTechnologies(prev => [...prev, newTech]);
    }
    setShowForm(false);
    setEditingTech(null);
  };

  const handleEdit = (tech) => { setEditingTech(tech); setShowForm(true); };
  const handleCancel = () => { setShowForm(false); setEditingTech(null); };

  return (
    <div>
      <div className="manager-header">
        <button onClick={() => setShowForm(true)}>+ Добавить технологию</button>
      </div>

      <RoadmapImporter setTechnologies={setTechnologies} />
      <DataImporter onImport={(newTechs) => setTechnologies(prev => [...prev, ...newTechs])} />
      <DataExporter technologies={technologies} />

      {showForm && (
        <TechnologyForm
          initialData={editingTech || {}}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <TechnologyList 
        technologies={technologies} 
        setTechnologies={setTechnologies} 
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default TechnologyManager;