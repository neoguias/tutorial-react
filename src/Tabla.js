import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';

class Tabla extends Component {
  render() {

    const { datosPersonas, eliminarPersona } = this.props;

    return (
      <table className="table">
        <HeadTabla/>
        <BodyTabla datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
      </table>
    )
  }
}

export default Tabla;