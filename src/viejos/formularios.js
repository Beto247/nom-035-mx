import Header from "../componentes/header"
import Bloques1 from "./bloques1"
import Bloques2 from "./bloques2"
import { useState } from "react"



export function Formulario1(){
    const [form, setForm] = useState({})

    function handleChange(e){
        setForm({...form,[e.target.name]: e.target.value})
        console.log(form)
    }
    return(
        <>
        <form>
            <Header msj="CUESTIONARIO PARA IDENTIFICAR A LOS TRABAJADORES QUE FUERON SUJETOS A ACONTECIMIENTOS TRAUMÁTICOS SEVEROS" />  
            <table>
            <thead>
                <tr>
                <th className="num">ITEM</th>
                <th className="pregunta">Pregunta</th>
                <th className="opcion">Sí</th>
                <th className="opcion">No</th>
                </tr>
            </thead>                            
            </table>
            <Bloques1 change={handleChange}/> 
        </form>
        </>
    )
}

export function Formulario2(){
    return(
        <>
        <form>
            <Header msj="CUESTIONARIO PARA IDENTIFICAR LOS FACTORES DE RIESGO PSICOSOCIAL Y EVALUAR EL ENTORNO ORGANIZACIONAL EN LOS CENTROS DE TRABAJO"/>
            <table>
                <thead>
                    <tr>
                    <th className="num">ITEM</th>
                    <th className="pregunta">Pregunta</th>
                    <th className="opcion">Siempre</th>
                    <th className="opcion">Casi Siempre</th>
                    <th className="opcion">A Veces</th>
                    <th className="opcion">Casi Nunca</th>
                    <th className="opcion">Nunca</th>
                    </tr>
                </thead>                            
            </table>  
            <Bloques2/>  
        </form>
        </>
    )
}

