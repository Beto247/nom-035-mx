import { preguntasIniciales } from "../preguntas/preguntas1";
import { useState } from "react";


function Filas(props){
    
    const {items, change} = props
    // console.log(props)
    // console.log(items[0])
    let indice = items[0]
    let pregunta = items[1]

    
    
    return(
        
        <tr key={Math.floor(Math.random() * 1000)}>
            <td className="num" key={Math.floor(Math.random() * 1000)}>{indice}</td> 
            <td className="pregunta" key={Math.floor(Math.random() * 1000)}>{pregunta}</td>
            <td className="opcion"><input key={Math.floor(Math.random() * 1000)} type="radio" name={indice} value={true} onChange={change}></input></td>
            <td className="opcion"><input key={Math.floor(Math.random() * 1000)} type="radio" name={indice} value={false} onChange={change}></input></td>
        </tr> 
          
    )     
}

function Bloque(props){
    console.log(props)
    const {tema, items} = props.valores

    // let tema = props.valores.tema
    // let items = props.valores.items
    
    // console.log(tema)
    // console.log(items)
    //let secciones = Object.entries(items)
    //console.log(secciones)    
    
    return(       
        <>
        {tema && <p className="tema" key={Math.floor(Math.random() * 1000)}>{tema}</p>}
        <table key={Math.floor(Math.random() * 1000)}>
            <tbody key={Math.floor(Math.random() * 1000)}>
            {Object.entries(items).map((item) => <Filas items={item} change={props.change}/>)}
            </tbody>
        </table>  
        </>
     )
}

export default function Bloques1(props){
    const bloques = Object.values(preguntasIniciales)
    const secciones = Object.keys(preguntasIniciales)
    const [i, setI] =useState(0)
        
    // console.log("seccion"+ secciones)
    // console.log("bloque"+ bloques)
    console.log(props)
    
    const botonSiguiente = () => {            
            
            setI(i + 1)
            //console.log(i)
    }

    let bloque = bloques[i]
    let seccion = secciones[i]
    //console.log(i)
    return(
              
        <div className="seccion">{seccion}
        {i< 3  ?   (<>
                    <Bloque valores={bloque} change={props.change} />
                    <button type="button" onClick={botonSiguiente}>siguiente</button>
                    </>)
                :   (<>
                    <p>Da click en continuar</p>
                    <button type="submit">continuar</button>
                    </>)}
        </div>
        
    )
}