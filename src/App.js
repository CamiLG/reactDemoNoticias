import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {  
    noticias:[

    ]
  }
  consultarNoticias = async (categoria= 'general') => {
    const url= `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=0d7266a49dd7438592a52b03b374e236
    `
    const respuesta= await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles
    });
    
  }
  componentDidMount(){
    this.consultarNoticias();
      }
  render() { 
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className=" container red center">
        <Formulario 
        consultarNoticias={this.consultarNoticias}
        />
        </div>
        <div className="container white contenedor-noticias">
        
          <Noticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}
 
export default App;