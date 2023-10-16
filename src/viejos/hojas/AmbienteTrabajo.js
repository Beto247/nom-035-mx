import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles, acciones } from "../../objetos/nivelesAcciones";


export default function AmbienteTrabajo(){

    const { form2P } = useContext(PdfContext)
    const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
    const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones
    
    //console.log(form2P)
    
    //****Ambiente****//
    let ambiente = []
    let resultadoA = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] <= 5){resultadoA = resultadoA + parseInt(el[1])}})    
                                                         
        if(resultadoA < 5){            
                    ambiente = [...nivelNulo, accionesNulo]
        }
        else if(resultadoA < 9){
                    ambiente = [...nivelBajo, accionesBajo]            
        }
        else if(resultadoA < 11){
                    ambiente = [...nivelMedio, accionesMedio]            
        }
        else if(resultadoA < 14){
                    ambiente = [...nivelAlto, accionesAlto]            
        }
        else if(resultadoA >= 14){
                    ambiente = [...nivelMuyAlto, accionesAlto]            
        }
    //console.log(ambiente)

    //***Condiciones****//
    let condiciones = []
    let resultadoC = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] <= 5){resultadoC = resultadoC + parseInt(el[1])}})
                                                                       
        if(resultadoC < 5){            
                    condiciones = nivelNulo
        }
        else if(resultadoC < 9){
                    condiciones = nivelBajo          
        }
        else if(resultadoC < 11){
                    condiciones = nivelMedio           
        }
        else if(resultadoC < 14){
                    condiciones = nivelAlto           
        }
        else if(resultadoC >= 14){
                    condiciones = nivelMuyAlto            
        } 
    //console.log(condiciones)
    
    return(

        <div className="hoja">
        <h1 className="titulo">Ambiente de Trabajo</h1>
        <p className="parrafo">Para calificar esta categoria se toma en cuenta las <b>Condiciones en el Ambiente de Trabajo</b>, es decir, las <b>Condiciones Peligros e Inseguras</b>, las <b>Condiciones Deficientes e Insalubres</b> y los <b>Trabajos Peligrosos</b> presentes en tu Centro de Trabajo.</p>
        <p className="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
        <div className="box4">
            <div className="dimension"><p>Condiciones en el Ambiente de Trabajo</p></div>
            <div className={"nivel "+condiciones[0]}><p>{condiciones[1]}</p></div> 
        </div>
        <p className="parrafo">Nivel de Riesgo en esta Categoria:</p>
        <div className={"box5 "+ambiente[0]}>{ambiente[1]}</div>
        <p className="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
        <ul className="acciones">{ambiente[2]}</ul>         
       </div>    
    )
}
