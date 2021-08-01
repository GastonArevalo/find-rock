import React from 'react';
import './search-bar.css'
import logo from "../logo.svg"
class SearchBar extends React.Component {
    handleChange = e =>{
        console.log('Este es el input y el evento es:', e.target.value)
    }
    handleClick = e =>{
        e.preventDefault();
        console.log(e.target.name, 'Evento click')
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name, e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                    <div className="row mt-2">
                        <div className="col-md-2">
                            <img src={logo} alt="logo" className="logo-barra" />
                        </div>
                        <div className="col-md-4">
                            <form className="form-inline d-flex" name="formulario" onSubmit={this.handleSubmit}>

                                <div className="busqueda">
                                    <input type="text" id="buscar" placeholder="Buscar"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
            </React.Fragment>
        )
    }
}

export default SearchBar;