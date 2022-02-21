
import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {

  //Definir la categoria y noticias

  const [ categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])
  useEffect(()=>{
    const consultarAPI = async ()=>{
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=66afa538433a456fb957251b13817cd1`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles);
      
    }
    consultarAPI();

  },[categoria])

  return (
    <Fragment>
      <Header title="Buscador de Noticias"/>

    <div className="container white">

      <Formulario
        guardarCategoria={guardarCategoria}
      />
    </div>
    <ListadoNoticias
      noticias={noticias}
    />
    </Fragment>
  );
}

export default App;
