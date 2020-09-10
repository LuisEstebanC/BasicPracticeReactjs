import React,{Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';


const Form3 = () =>{

    const {register, errors, handleSubmit} = useForm();

    const [entrada, setEntradas] = useState([])

    const onSubmit=(data, e)=>{
        console.log(data)
        setEntradas([
            ...entrada,
            data
        ])
        e.target.reset();
    }

    return(
        <Fragment>
            <h1>Formulario #3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="nombre"
                    type="text"
                    placeholder="Igrese Nombre"
                    ref={
                        register({
                            required:{value:true, message:'Campo obligatorio'},
                            minLength:{value:2, message:'Debe tener al menos dos letras'}  
                        })
                    }
                />
                {   
                    errors.nombre &&
                    <span>
                        {errors.nombre.message}
                    </span>
                }
                <input
                    name="apellido"
                    type="text"
                    placeholder="Igrese apellido"
                    ref={
                        register({
                            required:{value:true, message:'Campo obligatorio'},
                            minLength:{value:2, message:'Debe tener al menos dos letras'}  
                        })
                    }
                    />
                      {   
                    errors.apellido &&
                    <span>
                        {errors.apellido.message}
                    </span>
                }    
                <Button  color="primary" type="submit">Guardar</Button>
            </form>
            <ul>
                {
                    entrada.map((item, index) =>
                     <li key={index}>{item.nombre} -{item.apellido}</li>
                    )
                }
            </ul>
        </Fragment>
        
    )
}

export default Form3;