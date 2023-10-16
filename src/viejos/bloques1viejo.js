import { preguntasIniciales } from "../preguntas/preguntas1";
import { useState } from "react";


function Filas(props){

    function Renglon(props){
        //console.log(props.indice)
        //console.log(props.pregunta)
        return(
            <tr key={props.indice}>
                <td className="num">{props.indice}</td> 
                <td className="pregunta">{props.pregunta}</td>
                <td className="opcion"><input key={"S-"+props.indice} type="radio" name={props.indice} value={true}></input></td>
                <td className="opcion"><input key={"CS-"+props.indice} type="radio" name={props.indice} value={false} defaultChecked></input></td>
             </tr>
             )
    }

    return(
        <table>
            <tbody>
            {Object.entries(props.items).map(item => <Renglon indice={item[0]} pregunta={item[1]}/>)}
            </tbody>
        </table>
    )     
}

export default function Bloques1(){
    const [valores] = useState(preguntasIniciales)
    console.log(Object.values(valores))
    let secciones = Object.keys(valores)
    //console.log(secciones)    
    
    return(       
        <>
         {
         Object.values(valores).map((bloque, i) => 
            
             <>
             <div className="seccion">{secciones[i]}
             {bloque.tema !== "" && <p className="tema" key={i}>{bloque.tema}</p>}
             <Filas items={bloque.items}/>
             </div>
             {i=== 3    ? (<button type="submit">enviar</button>) 
                        : (<button type="button">siguiente</button>)}
             </>
         )        
         }         
         </>
     )
}

