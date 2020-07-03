import React, { Component } from 'react';

class Form extends Component {
    state = {
        nombre: '',
        apellido: '',
    };

    gestionarCambio= (event) => {
        const { name, value } = event.target;
      
        this.setState({
            [name]: value,
        });
      }

      enviarFormulario = () => {
        this.props.enviarFormulario(this.state)
        this.setState({
            nombre: '',
            apellido: '',
        });
      }

      render() {
        const { nombre, apellido } = this.state;
      
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" value={nombre} onChange={this.gestionarCambio} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" className="form-control"  value={apellido} onChange={this.gestionarCambio} />
                </div>
                <div className="form-group">
                    <input type="button" value="Enviar" onClick={this.enviarFormulario} />
                </div>
                </form>
        );
    } 
}
      
export default Form;