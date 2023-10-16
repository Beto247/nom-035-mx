import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles } from "../../objetos/nivelesAcciones";




export default function ResultadoTotal(){
    //const form = document.getElementById('Form2')
    //let data = new FormData(form)
        //console.log(data)
        

    const { form2P, form2 } = useContext(PdfContext)    
    const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
    console.log('form2')
    console.log(form2)
    console.log('form2P')
    console.log(form2P)
    
    //****ResultadoTotal****//
    let resultadoTotal = []
    let resultadoT = 0    
        Object.entries(form2P).forEach(el =>{resultadoT = resultadoT + parseInt(el[1])})    
                                                         
        if(resultadoT < 50){            
                    resultadoTotal = nivelNulo
        }
        else if(resultadoT < 75){
                    resultadoTotal = nivelBajo           
        }
        else if(resultadoT < 99){
                    resultadoTotal = nivelMedio          
        }
        else if(resultadoT < 140){
                    resultadoTotal = nivelAlto          
        }
        else if(resultadoT >= 140){
                    resultadoTotal = nivelMuyAlto            
        }
    //****LiderazgoRelaciones****//
    let liderazgoRelaciones = []
    let resultadoLR = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 37 && el[0] <= 41){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 57 && el[0] <= 64){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 69 && el[0] <= 72){resultadoLR = resultadoLR + parseInt(el[1])}})    
                                                         
        if(resultadoLR < 14){            
                    liderazgoRelaciones = nivelNulo
        }
        else if(resultadoLR < 29){
                    liderazgoRelaciones = nivelBajo            
        }
        else if(resultadoLR < 42){
                    liderazgoRelaciones = nivelMedio            
        }
        else if(resultadoLR < 58){
                    liderazgoRelaciones = nivelAlto            
        }
        else if(resultadoLR >= 58){
                    liderazgoRelaciones = nivelMuyAlto            
        }
    //****EntornoOrganizacional****//
    let entornoOrganizacional = []
    let resultadoEO = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 47 && el[0] <= 56){resultadoEO = resultadoEO + parseInt(el[1])}})    
                                                            
        if(resultadoEO < 10){            
                    entornoOrganizacional = nivelNulo
        }
        else if(resultadoEO < 14){
                    entornoOrganizacional = nivelBajo            
        }
        else if(resultadoEO < 18){
                    entornoOrganizacional = nivelMedio       
        }
        else if(resultadoEO < 23){
                    entornoOrganizacional = nivelAlto            
        }
        else if(resultadoEO >= 23){
                    entornoOrganizacional = nivelMuyAlto            
        }
    //****OrganizacionTiempo****//
    let organizacioTiempo = []
    let resultadoOT = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 17 && el[0] <= 22){resultadoOT = resultadoOT + parseInt(el[1])}})    
                                                         
        if(resultadoOT < 5){            
                    organizacioTiempo = nivelNulo
        }
        else if(resultadoOT < 7){
                    organizacioTiempo = nivelBajo           
        }
        else if(resultadoOT < 10){
                    organizacioTiempo = nivelMedio            
        }
        else if(resultadoOT < 13){
                    organizacioTiempo = nivelAlto           
        }
        else if(resultadoOT >= 13){
                    organizacioTiempo = nivelMuyAlto           
        }
    //****Ambiente****//
    let ambiente = []
    let resultadoA = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] <= 5){resultadoA = resultadoA + parseInt(el[1])}})    
                                                         
        if(resultadoA < 5){            
                    ambiente = nivelNulo 
       }
        else if(resultadoA < 9){
                    ambiente = nivelBajo           
        }
        else if(resultadoA < 11){
                    ambiente = nivelMedio            
        }
        else if(resultadoA < 14){
                    ambiente = nivelAlto           
        }
        else if(resultadoA >= 14){
                    ambiente = nivelMuyAlto           
        }
    //****FactoresPropios****//
    let factoresPropios = []
    let resultadoFT = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 23 && el[0] <= 30){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 65 && el[0] <= 68){resultadoFT = resultadoFT + parseInt(el[1])}})    
                                                         
        if(resultadoFT < 15){            
                    factoresPropios = nivelNulo
       }
        else if(resultadoFT < 30){
                    factoresPropios = nivelBajo           
        }
        else if(resultadoFT < 45){
                    factoresPropios = nivelMedio            
        }
        else if(resultadoFT < 60){
                    factoresPropios = nivelAlto           
        }
        else if(resultadoFT >= 60){
                    factoresPropios = nivelMuyAlto           
        }

    return(
       
       <div className="hoja">
        <h1 className="titulo">A continuación, se presenta un resumen de <b>TODA TU EVALUACIÓN.</b></h1>
        <p className="parrafo">Estos Resultados te podrán servir para <b>comparar tus Niveles de Riesgo</b> con tus compañeros.</p>
        <div className="box4 ">
            <div className="dimension" ><p>Liderazgo y Relaciones de Trabajo</p></div>
            <div className={"nivel "+liderazgoRelaciones[0]}><p>{liderazgoRelaciones[1]}</p></div> 
        </div>
        <div className="box4 ">
            <div className="dimension"><p>Entorno Organizacional</p></div>
            <div className={"nivel "+entornoOrganizacional[0]}><p>{entornoOrganizacional[1]}</p></div> 
        </div>
        <div className="box4 ">
            <div className="dimension"><p>Organización del Tiempo de Trabajo</p></div>
            <div className={"nivel "+organizacioTiempo[0]}><p>{organizacioTiempo[1]}</p></div> 
        </div>
        <div className="box4 ">
            <div className="dimension"><p>Ambiente de Trabajo</p></div>
            <div className={"nivel "+ambiente[0]}><p>{ambiente[1]}</p></div> 
        </div>
        <div className="box4 ">
            <div className="dimension"><p>Factores Propios de la Actividad</p></div>
            <div className={"nivel "+factoresPropios[0]}><p>{factoresPropios[1]}</p></div> 
        </div>
        <p className="parrafo">Tomando en cuenta las respuestas de <b>TODO el Cuestionario</b>, tu nivel de Riesgo en General es:</p>
        <div className={"box5 "+resultadoTotal[0]}>{resultadoTotal[1]}</div>
        <p className="parrafo"><b>Compara estos resultados con tus compañeros y propon acciones de mejora con tus lideres.</b></p>
        <p className="parrafo"><b>¡El cambio esta en tus manos!</b></p>
       </div>

    )
}









