import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Ingreso</h3>

                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" className="form-control" placeholder="Ingrese Correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                <p className="forgot-password text-right">
                    Olvidó su <a href="#restorepassword">contraseña?</a>
                </p>
            </form>
        );
    }
}
