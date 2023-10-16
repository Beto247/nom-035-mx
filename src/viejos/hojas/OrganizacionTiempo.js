import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles, acciones } from "../../objetos/nivelesAcciones";


export default function OrganizacionTiempo(){

    const { form2P } = useContext(PdfContext)
    const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
    const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones
    
    //console.log(form2P)
    
    //****OrganizacionTiempo****//
    let organizacioTiempo = []
    let resultadoOT = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 17 && el[0] <= 22){resultadoOT = resultadoOT + parseInt(el[1])}})    
                                                         
        if(resultadoOT < 5){            
                    organizacioTiempo = [...nivelNulo, accionesNulo]
        }
        else if(resultadoOT < 7){
                    organizacioTiempo = [...nivelBajo, accionesBajo]            
        }
        else if(resultadoOT < 10){
                    organizacioTiempo = [...nivelMedio, accionesMedio]            
        }
        else if(resultadoOT < 13){
                    organizacioTiempo = [...nivelAlto, accionesAlto]            
        }
        else if(resultadoOT >= 13){
                    organizacioTiempo = [...nivelMuyAlto, accionesAlto]            
        }
    //console.log(organizacioTiempo)

    //***Interferencia****//
    let interferencia = []
    let resultadoI = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 19 && el[0] <= 22){resultadoI = resultadoI + parseInt(el[1])}})
                                                                       
        if(resultadoI < 4){            
                    interferencia = nivelNulo
        }
        else if(resultadoI < 6){
                    interferencia = nivelBajo          
        }
        else if(resultadoI < 8){
                    interferencia = nivelMedio           
        }
        else if(resultadoI < 10){
                    interferencia = nivelAlto           
        }
        else if(resultadoI >= 10){
                    interferencia = nivelMuyAlto            
        } 
    //console.log(interferencia)
     
    //****Jornada****//
    let jornada = []
    let resultadoJ = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 17 && el[0] <= 18){resultadoJ = resultadoJ + parseInt(el[1])}}) 

        if(resultadoJ < 1){            
                    jornada = nivelNulo
        }
        else if(resultadoJ < 2){
                    jornada = nivelBajo            
        }
        else if(resultadoJ < 4){
                    jornada = nivelMedio            
        }
        else if(resultadoJ < 6){
                    jornada = nivelAlto            
        }
        else if(resultadoJ >= 6){
                    jornada = nivelMuyAlto            
        }
    //console.log(jornada)  
    return(

        <div className="hoja">
        <h1 className="titulo">Organización del Tiempo de Trabajo</h1>
        <p className="parrafo">Para calificar esta categoria se toma en cuenta la <b>Jornada de Trabajo</b>, y la <b>Interferencia en la Relación Trabajo-Familia</b> presente en tu Centro de Trabajo</p>
        <p className="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
        <div className="box4">
            <div className="dimension"><p>Jornada de Trabajo</p></div>
            <div className={"nivel "+jornada[0]}><p>{jornada[1]}</p></div> 
        </div>
        <div className="box4">
            <div className="dimension"><p>Interferencia en la Relación Trabajo-Familia</p></div>
            <div className={"nivel "+interferencia[0]}><p>{interferencia[1]}</p></div> 
        </div>
        <p className="parrafo">Nivel de Riesgo en esta Categoria:</p>
        <div className={"box5 "+organizacioTiempo[0]}>{organizacioTiempo[1]}</div>
        <p className="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
        <ul className="acciones">{organizacioTiempo[2]}</ul>         
       </div>    
    )
}

