import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nosotros from './components/Nosotros';
import ComprarPlantas from './components/ComprarPlantas';
import Home from './components/Home';
import Eventos from './components/Eventos';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import WhatsAppButton from './components/WhatsAppButton'; // Asegúrate de importar el componente

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  const whatsappUrl = "https://api.whatsapp.com/send?phone=51903010882&text=Hola%20vengo%20de%20la%20web%20Jard%C3%ADn%20de%20Naru%F0%9F%8C%B5%F0%9F%8C%B9%F0%9F%8C%BB%2C%20quisiera%20mayor%20informaci%C3%B3n%20!";

  return (
    <Router>
      <div className="body">
        <WhatsAppButton whatsappUrl={whatsappUrl} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </div>
      <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/comprar_plantas" element={<ComprarPlantas />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
