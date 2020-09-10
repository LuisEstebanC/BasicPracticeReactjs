import React, { Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';

const Contador = ( )=>{

    const [numero, setNumero]= useState(0);

    const cambio =()=>{
        return (numero + 3);
    }

    const sumar = () =>{
        setNumero(cambio)
    }

    return(
        <Fragment>
            <label>El contador es {numero}</label>
            <div>
                <label>Cuidado aumentara el contador en 3</label>
                <Button onClick={sumar}>Aumentar</Button>
            </div>
            <div>
                <h1>el contador esta: { numero > 20 ? 'Alto' : 'Bajo'}</h1> 
               
            </div>

        </Fragment>
    );
}

export default Contador;