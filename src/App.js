import React from 'react';
import MapContainer from './MapContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur notre site !</h1>
        <p>Voici un exemple de page d'atterrissage avec une intégration Google Maps.</p>
      </header>
      
      <section className="App-content">
        <h2>Notre emplacement</h2>
        <MapContainer/>
      </section>
      
      <footer className="App-footer">
        <p>&copy; 2023 Abdou AG</p>
      </footer>
    </div>
  );
}

export default App;
