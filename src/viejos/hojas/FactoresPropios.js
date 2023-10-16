import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles, acciones } from "../../objetos/nivelesAcciones";


export default function FactoresPropios(){

    const { form2P } = useContext(PdfContext)
    const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
    const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones
    
    //console.log(form2P)
    
    //****FactoresPropios****//
    let factoresPropios = []
    let resultadoFT = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 23 && el[0] <= 30){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 65 && el[0] <= 68){resultadoFT = resultadoFT + parseInt(el[1])}})    
                                                         
        if(resultadoFT < 15){            
                    factoresPropios = [...nivelNulo, accionesNulo]
        }
        else if(resultadoFT < 30){
                    factoresPropios = [...nivelBajo, accionesBajo]            
        }
        else if(resultadoFT < 45){
                    factoresPropios = [...nivelMedio, accionesMedio]            
        }
        else if(resultadoFT < 60){
                    factoresPropios = [...nivelAlto, accionesAlto]            
        }
        else if(resultadoFT >= 60){
                    factoresPropios = [...nivelMuyAlto, accionesAlto]            
        }
    //console.log(factoresPropios)

    //***Carga****//
    let carga = []
    let resultadoC = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoC = resultadoC + parseInt(el[1])}
                                            else if(el[0] >= 65 && el[0] <= 68){resultadoC = resultadoC + parseInt(el[1])}})
                                                                       
        if(resultadoC < 15){            
                    carga = nivelNulo
        }
        else if(resultadoC < 21){
                    carga = nivelBajo          
        }
        else if(resultadoC < 27){
                    carga = nivelMedio           
        }
        else if(resultadoC < 37){
                    carga = nivelAlto           
        }
        else if(resultadoC >= 37){
                    carga = nivelMuyAlto            
        } 
    //console.log(carga)
     
    //****FaltaControl****//
    let faltaControl = []
    let resultadoFC = 0 
        Object.entries(form2P).forEach(el => {if(el[0] >= 23 && el[0] <= 30){resultadoFC = resultadoFC + parseInt(el[1])}
                                            else if(el[0] >= 35 && el[0] <= 36){resultadoFC = resultadoFC + parseInt(el[1])}}) 

        if(resultadoFC < 11){            
                    faltaControl = nivelNulo
        }
        else if(resultadoFC < 16){
                    faltaControl = nivelBajo            
        }
        else if(resultadoFC < 21){
                    faltaControl = nivelMedio            
        }
        else if(resultadoFC < 25){
                    faltaControl = nivelAlto            
        }
        else if(resultadoFC >= 25){
                    faltaControl = nivelMuyAlto            
        }
    //console.log(faltaControl) 
     
    return(

        <div className="hoja">
        <h1 className="titulo">Factores Propios de la Actividad</h1>
        <p className="parrafo">Para calificar esta categoria se toma en cuenta la <b>Carga de Trabajo</b> y la <b>Falta de Control Sobre el Trabajo</b> presente en tu Centro de Trabajo</p>
        <p className="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
        <div className="box4">
            <div className="dimension"><p>Carga de Trabajo</p></div>
            <div className={"nivel "+carga[0]}><p>{carga[1]}</p></div> 
        </div>
        <div className="box4">
            <div className="dimension"><p>Falta de Control Sobre el Trabajo</p></div>
            <div className={"nivel "+faltaControl[0]}><p>{faltaControl[1]}</p></div> 
        </div>
        <p className="parrafo">Nivel de Riesgo en esta Categoria:</p>
        <div className={"box5 "+factoresPropios[0]}>{factoresPropios[1]}</div>
        <p className="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
        <ul className="acciones">{factoresPropios[2]}</ul>         
       </div>    
    )
}

