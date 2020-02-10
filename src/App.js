import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Frase from './components/Frase';


function App() {


  //Crear el state
  const [frase, obtenerFrase] = useState({});

  //consulta a una API
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // agregar el resultado de la API al state
    obtenerFrase(resultado.data[0]);
  }

  useEffect(() => {
    consultarAPI()
  },[obtenerFrase])

  console.log(frase);
  

  return (

    <div className="contenedor">
    <Frase
    frase={frase}
    />
    <button onClick={consultarAPI} >Generar nueva</button>
    </div>
  );
}

export default App;
