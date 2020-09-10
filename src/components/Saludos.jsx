import React, { Fragment } from 'react';

const Saludos = (props) => {
    console.log(props)
    return (  
        <Fragment>
            <h1>Bienvenido Gladiador {props.persona}, tienes una edad de {props.edad}</h1>
        </Fragment>
    );
}
 
export default Saludos;