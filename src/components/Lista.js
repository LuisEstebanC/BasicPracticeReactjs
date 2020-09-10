import React,{Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';

const Lista =() =>{

    const [arrayLista, setArrayLista] = useState(['Luis','Juan','Pedro','Marcelo', ]);

  
     
    const handleInputChange =(event) =>{
        console.log(event.target.value)
        setArrayLista([
            ...arrayLista,
             [event.target.name] = [event.target.value]
        ])
     
    }
    const enviarDatos=(event)=>{
        console.log(event.target.name)  
        event.preventDefault();
        
       
     

    }

    return(
        <Fragment>
                <form onSubmit={enviarDatos}>
                    <label>Agregar nombre: </label>
                    <input 
                        type="text" 
                        name="addName"
                        placeholder="Maria"
                        onChange={handleInputChange}
                    ></input>
                    <Button type="submit" >Agregar</Button>
                </form>        
            {
                arrayLista.map((item, index) =>{               
                    return(
                        <ul key={index}>
                            <li>
                            <p key={index}>{item}</p>
                            </li>
                        </ul>
                        
                    )
                })
            }
        </Fragment>
    );   
}
export default Lista;