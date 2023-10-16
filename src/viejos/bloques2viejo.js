import { preguntas, arreglo } from "../preguntas/preguntas2"
import { useState } from "react"



function Filas(props){ 
    //console.log(props)
    const [invertir] = useState(arreglo)
        
    function Renglon(props){ 
     
    let opcion = invertir.includes(parseInt(props.indice))
    //console.log(opcion)

         return(
                <tr key={props.indice}>
                    <td className="num">{props.indice}</td> 
                    <td className="pregunta">{props.pregunta}</td>
                    <td className="opcion"><input key={"S-"+props.indice} type="radio" name={props.indice} value={opcion ? 4 : 0}></input></td>
                    <td className="opcion"><input key={"CS-"+props.indice} type="radio" name={props.indice} value={opcion ? 3 : 1}></input></td>
                    <td className="opcion"><input key={"AV-"+props.indice} type="radio" name={props.indice} value="2" defaultChecked></input></td>
                    <td className="opcion"><input key={"CN-"+props.indice} type="radio" name={props.indice} value={opcion ? 1 : 3}></input></td>
                    <td className="opcion"><input key={"N-"+props.indice} type="radio" name={props.indice} value={opcion ? 0 : 4}></input></td>
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

export default function Bloques2(){
    // console.log(preguntas)
    const [valores] = useState(preguntas)    
    //console.log(valores)

    return(       
       <>
        {
        Object.values(valores).map((bloque, i) => 

            <>
            <p className="tema" key={i}>{bloque.tema}</p>
            <Filas items={bloque.items}/>
            </>
        )        
        }         
        </>
    )
}

