import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";
import { niveles, acciones } from "../../objetos/nivelesAcciones";


export default function EntornoOrganizacional(){

    const { form2P } = useContext(PdfContext)
    const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
    const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones
    
    //console.log(form2P)
    
    //****EntornoOrganizacional****//
    let entornoOrganizacional = []
    let resultadoEO = 0    
        Object.entries(form2P).forEach(el =>{if(el[0] >= 47 && el[0] <= 56){resultadoEO = resultadoEO + parseInt(el[1])}})    
        console.log(resultadoEO)                                                     
        if(resultadoEO < 10){            
                    entornoOrganizacional = [...nivelNulo, accionesNulo]
        }
        else if(resultadoEO < 14){
                    entornoOrganizacional = [...nivelBajo, accionesBajo]            
        }
        else if(resultadoEO < 18){
                    entornoOrganizacional = [...nivelMedio, accionesMedio]            
        }
        else if(resultadoEO < 23){
                    entornoOrganizacional = [...nivelAlto, accionesAlto]            
        }
        else if(resultadoEO >= 23){
                    entornoOrganizacional = [...nivelMuyAlto, accionesAlto]            
        }
    //console.log(entornoOrganizacional)

    //***Reconocimiento****//
    let reconocimiento = []
    let resultadoR = 0 
        Object.entries(form2P).forEach(el =>{if(el[0] >= 47 && el[0] <= 52){resultadoR = resultadoR + parseInt(el[1])}})
                                                                       
        if(resultadoR < 6){            
                    reconocimiento = nivelNulo
        }
        else if(resultadoR < 10){
                    reconocimiento = nivelBajo          
        }
        else if(resultadoR < 14){
                    reconocimiento = nivelMedio           
        }
        else if(resultadoR < 18){
                    reconocimiento = nivelAlto           
        }
        else if(resultadoR >= 18){
                    reconocimiento = nivelMuyAlto            
        } 
    //console.log(reconocimiento)
     
    //****Pertenencia****//
    let pertenencia = []
    let resultadoP = 0 
        Object.entries(form2P).forEach(el => {if(el[0] >= 53 && el[0] <= 56){resultadoP = resultadoP + parseInt(el[1])}})

        if(resultadoP < 4){            
                    pertenencia = nivelNulo
        }
        else if(resultadoP < 6){
                    pertenencia = nivelBajo            
        }
        else if(resultadoP < 8){
                    pertenencia = nivelMedio            
        }
        else if(resultadoP < 10){
                    pertenencia = nivelAlto            
        }
        else if(resultadoP >= 10){
                    pertenencia = nivelMuyAlto            
        }
    //console.log(pertenencia) 
       
    return(

        <div className="hoja">
        <h1 className="titulo">Entorno Organizacional</h1>
        <p className="parrafo">Para calificar esta categoria se toma en cuenta el <b>Reconocimiento al Desempeño</b>, y el <b>Insuficiente sentido de pertenencia e, inestabilidad</b> presente en tu Centro de Trabajo</p>
        <p className="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
        <div className="box4">
            <div className="dimension"><p>Reconocimiento del Desempeño</p></div>
            <div className={"nivel "+reconocimiento[0]}><p>{reconocimiento[1]}</p></div> 
        </div>
        <div className="box4">
            <div className="dimension"><p>Insuficiente Sentido de Pertenencia e, Intestabilidad</p></div>
            <div className={"nivel "+pertenencia[0]}><p>{pertenencia[1]}</p></div> 
        </div>
        <p className="parrafo">Nivel de Riesgo en esta Categoria:</p>
        <div className={"box5 "+entornoOrganizacional[0]}>{entornoOrganizacional[1]}</div>
        <p className="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
        <ul className="acciones">{entornoOrganizacional[2]}</ul>         
       </div>    
    )
}

