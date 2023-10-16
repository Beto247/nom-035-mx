import { preguntas, arreglo } from "../preguntas/preguntas2"
import { useState } from "react"



function Filas(props){ 
    //console.log(props)
    const [invertir ] = useState(arreglo)
        
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
            <>
            {Object.entries(props.items).map(item => <Renglon indice={item[0]} pregunta={item[1]}/>)}
            </>
    )
}

export default function Bloques2(){
    const [i, setI] =useState(0)
    const valores = Object.values(preguntas)
    //console.log(valores)
    let bloque = valores[i]
    const {tema, items} = bloque
    
    // console.log(bloque)
    // console.log(tema)
    // console.log(items)
    

    const botonSiguiente = () => {            
            
        setI(i + 1)
        //console.log(i)
    }

    return(       
       
        <div className="seccion">
            {i <= 12    ?   (<>
                            <p className="tema">{tema}</p>
                            <table>
                                <tbody>
                                <Filas items={items}/>
                                </tbody>
                            </table>
                            <button type="button" onClick={botonSiguiente}>siguiente</button>
                            </>)
                        :   (<>
                            <p>Haz finalizado el cuestionario</p>
                            <button type="submit">continuar</button>
                            </>) 
            }
        </div>
        
    )
}

