import logo from './logo.svg';
import './App.css';
import BelasArtes from './componente/BelasArtes';
import BomJogo from './componente/BomJoco';
import Pessoa from './componente/Pessoa';
import rogerio from'./img/rogerio.jpg';
import List from './componente/List';
import Evento from './componente/Evento';
import Form from './componente/Form';
import Condicional from './componente/Condicional';
import SeuNome from './componente/SeuNome';
import { useState } from 'react';
import Saudacao from './componente/Saudacao';


function App() {
  const [nome,setNome] = useState ()
   

  return (
    <div className="App">
   <h1>rederização condicional</h1>
      <Condicional/>
      <h1>state de litas</h1>
         <SeuNome setNome ={setNome}/>
      <Saudacao nome={nome}/>
      <BomJogo/>
    </div>
  );
}

export default App;
