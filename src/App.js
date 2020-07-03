import React from 'react';
import Tabla from './Tabla';
import Form from './Form'

class App extends React.Component {

  state = {
    personas: [],
  } 

  eliminarPersona = (indice) => {

    const { personas } = this.state;

    this.setState({
      personas: personas.filter((personas, i) => {
        return i !== indice;
      }),
    });
  }

  enviarFormulario = (persona) => {
    this.setState({ personas: [...this.state.personas, persona] })
  }

  render() {

    const { personas } = this.state;

    return (
      <div className="container">
        <h1>Tutorial de React de Neoguias!</h1>
        <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona} />
        <Form enviarFormulario={this.enviarFormulario} />
      </div>
    );
  }
}
export default App;
