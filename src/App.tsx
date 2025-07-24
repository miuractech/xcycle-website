import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { GenericPage } from './components/pages/GenericPage';
import './App.css';
import { Cursor } from './components/Cursor';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Nested routes for all categories */}
        <Route path="/:category/:page" element={<GenericPage />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<GenericPage />} />
      </Routes>
      <Cursor />
    </Router>
  );
}

export default App;
