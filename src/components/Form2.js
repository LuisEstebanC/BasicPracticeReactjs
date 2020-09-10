import React,{Fragment} from 'react';
import {useForm} from 'react-hook-form';


const Form2 =()=>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


    return(
        <Fragment>
            <h1>Formulario #2</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    ref={
                        register({
                            required:{value:true, message:'Titulo obligatorio'}
                        })
                    }
                />
                <span>
                {errors?.titulo?.message}
                </span>
                 <input
                    name="apellido"
                    ref={
                        register({
                            required:{value:true, message:'apellido obligatorio'}
                        })
                    }
                />
                {errors?.apellido?.message}
                <span>

                </span>
                <button>Enviar</button>
            </form>
        </Fragment>    
    )
}

export default Form2;