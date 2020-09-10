import React  from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import Form2 from './components/Form2';
import Form3 from './components/Form3'
import Saludos from './components/Saludos'




function App() {
 const name = 'Luis';
  return (
    <div className="container mt-5">  
      <Saludos persona={name} edad={23}/>
      <Saludos persona="Esteban"/>
      <Contador/>
      <Formulario/>
      <Form2/>
      <Lista/>
      <Form3/>
   
    </div>
  );
}

export default App;
