import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles, acciones } from "../../objetos/nivelesAcciones";

const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones

export default function LiderazgoRelaciones(){

    const { form2P } = useContext(PdfContext)    
    
    //console.log(form2P)
    
    //****LiderazgoRelaciones****//
    let liderazgoRelaciones = []
    let resultadoLR = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 37 && el[0] <= 41){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 57 && el[0] <= 64){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 69 && el[0] <= 72){resultadoLR = resultadoLR + parseInt(el[1])}})    
                                                         
        if(resultadoLR < 14){            
                    liderazgoRelaciones = [...nivelNulo, accionesNulo]
        }
        else if(resultadoLR < 29){
                    liderazgoRelaciones = [...nivelBajo, accionesBajo]            
        }
        else if(resultadoLR < 42){
                    liderazgoRelaciones = [...nivelMedio, accionesMedio]            
        }
        else if(resultadoLR < 58){
                    liderazgoRelaciones = [...nivelAlto, accionesAlto]            
        }
        else if(resultadoLR >= 58){
                    liderazgoRelaciones = [...nivelMuyAlto, accionesAlto]            
        }
    //console.log(liderazgoRelaciones)

    //****Liderazgo****//
    let liderazgo = []
    let resultadoL = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoL = resultadoL + parseInt(el[1])}
                                            else if(el[0] >= 37 && el[0] <= 41){resultadoL = resultadoL + parseInt(el[1])}})
                                                            
        if(resultadoL < 9){            
                    liderazgo = nivelNulo
      }
        else if(resultadoL < 12){
                    liderazgo = nivelBajo          
        }
        else if(resultadoL < 16){
                    liderazgo = nivelMedio           
        }
        else if(resultadoL < 20){
                    liderazgo = nivelAlto           
        }
        else if(resultadoL >= 20){
                    liderazgo = nivelMuyAlto            
        } 
    //console.log(liderazgo)

    //****Relaciones****//
    let relaciones = []
    let resultadoR = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 42 && el[0] <= 46){resultadoR = resultadoR + parseInt(el[1])}
                                            else if(el[0] >= 69 && el[0] <= 72){resultadoR = resultadoR + parseInt(el[1])}})
                                                            
        if(resultadoR < 10){            
                    relaciones = nivelNulo
        }
        else if(resultadoR < 13){
                    relaciones = nivelBajo          
        }
        else if(resultadoR < 17){
                    relaciones = nivelMedio           
        }
        else if(resultadoR < 21){
                    relaciones = nivelAlto           
        }
        else if(resultadoR >= 21){
                    relaciones = nivelMuyAlto            
        } 
    //console.log(relaciones)
     
    //****Violencia****//
    let violencia = []
    let resultadoV = 0 
        Object.entries(form2P).forEach(el => {if(el[0] >= 56 && el[0] <= 63){resultadoV = resultadoV + parseInt(el[1])}}) 
        //console.log(resultadoV)
        if(resultadoV < 7){            
                    violencia = nivelNulo
        }
        else if(resultadoV < 10){
                    violencia = nivelBajo            
        }
        else if(resultadoV < 13){
                    violencia = nivelMedio            
        }
        else if(resultadoV < 16){
                    violencia = nivelAlto            
        }
        else if(resultadoV >= 16){
                    violencia = nivelMuyAlto            
        }
       
    return(

        <div className="hoja">
        <h1 className="titulo">Liderazgo y Relaciones en el Trabajo</h1>
        <p className="parrafo">Para calificar esta categoria se toma en cuenta el <b>Liderazgo</b>, las <b>Relaciones en el Trabajo</b> y la <b>Violencia</b> presente en tu Centro de Trabajo</p>
        <p className="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
        <div className="box4">
            <div className="dimension"><p>Liderazgo<br/>{}</p></div>
            <div className={"nivel "+liderazgo[0]}><p>{liderazgo[1]}</p></div> 
        </div>
        <div className="box4">
            <div className="dimension"><p>Relaciones en el Trabajo</p></div>
            <div className={"nivel "+relaciones[0]}><p>{relaciones[1]}</p></div> 
        </div>
        <div className="box4">
            <div className="dimension"><p>Violencia Laboral</p></div>
            <div className={"nivel "+violencia[0]}><p>{violencia[1]}</p></div> 
        </div>
        <p className="parrafo">Nivel de Riesgo en esta Categoria:</p>
        <div className={"box5 "+liderazgoRelaciones[0]}>{liderazgoRelaciones[1]}</div>
        <p className="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
        <ul className="acciones">{liderazgoRelaciones[2]}</ul>         
       </div>    
    )
}

