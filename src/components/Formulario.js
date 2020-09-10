import React,{Fragment, useState}from 'react';
import Button from '@material-ui/core/Button';


const Formulario =()=>{


    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    });

    const handleInputChange =(eventF) =>{
        //console.log(elNombre)
        setDatos({
            ...datos,
            [eventF.target.name]: eventF.target.value
        })
    }
    const enviarDatos=(event)=>{
        event.preventDefault();
        console.log(elNombre +" " + elApellido)

    }

    const elNombre = datos.nombre;
    const elApellido = datos.apellido;

    return(
        <Fragment>
            <h1>Formulario #1</h1>
            <form onSubmit={enviarDatos}>
                <div>
                    <input
                    placeholder="Ingrese nombre"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}
                    ></input>        
                </div>
                <div>
                    <input
                    placeholder="Ingrese apellido"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
                    ></input>         
                </div>
                <div>
                    <Button type="submit">Enviar</Button>
                </div>
            </form>
            <h3>{datos.nombre + " " + datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;