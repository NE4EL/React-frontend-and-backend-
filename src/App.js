import { useState } from 'react';
import TechnologyManager from './components/TechnologyManager';
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState([]);

  return (
    <div className="app">
      <header>
        <h1>Трекер технологий</h1>
      </header>

      <main>
        <TechnologyManager 
          technologies={technologies} 
          setTechnologies={setTechnologies} 
        />
      </main>
    </div>
  );
}

export default App;