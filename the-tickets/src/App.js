import React from 'react';
import Home from './pages/home/Home';
import './styles/styles.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </div>
  );
}

export default App;
