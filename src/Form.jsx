import { useState } from 'react';

function Form({onAddColor}){
  const [nombre, setNombre]= useState("");
  const [color, setColor]= useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nombre && color){
      onAddColor({nombre,color});
      setNombre("");
      setColor("");
    }
  }

    const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();
    if (sinEspacios.length > 2) {
    return true;
    } else {
    return false;
    }
    };

    const validarColor = (color) => {
    if (color.length > 6 ) {
    return true;
    } else {
    return false;
    }   
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        e.handleSubmit();
        const NombreValido = validarNombre(nombre);
        const ColorValido = validarColor(color);
        if(!NombreValido || !ColorValido){
        alert("Por favor chequea que la informacion sea correcta")
        }else{
            alert('Bienvenido: ${nombre}')
        }
    }

    return(
    <form onSubmit={onSubmitForm}>
      <input type="text" placeholder= "ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <input type="text" placeholder= "ingrese su color favorito" value={color} onChange={(e)=>setColor(e.target.value)} />
      <button type= "submit">Agregar Color</button>
    </form>
   
  )

}

export default Form;