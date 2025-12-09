import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import TechnologyDetail from './pages/TechnologyDetail';
import AddTechnology from './pages/AddTechnology';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<TechnologyList />} />
          <Route path="/technology/:techId" element={<TechnologyDetail />} />
          <Route path="/add-technology" element={<AddTechnology />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;