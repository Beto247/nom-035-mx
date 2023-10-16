import { useContext, useState } from "react"
import PdfContext from "../../contextos/pdfcontext"


const nivelMuyAlto =    ['muy-alto', 'Muy Alto']

const nivelAlto =    ['alto', 'Alto']

const nivelMedio =   ['medio', 'Medio']

const nivelBajo =    ['bajo', 'Bajo']

const nivelNulo =    ['nulo', 'Nulo o Despreciable']

const accionesAlto =    <>
                        <li>Análisis de cada Categoría y Dominio</li>
                        <li>Programa de Intervención</li>
                        <li>Campañas de Sensibilización</li>
                        <li>Revisar Política de Riesgos Psicosociales</li>
                        <li>Revisar Programas de Prevención</li>
                        <li>Promoción de un Entorno Organizacional Saludable</li>
                        <li>Prevención de Violencia Laboral</li>
                        <li>Reforzar Aplicación y Difusión</li>
                        </>
const accionesMedio =   <>
                        <li>Programa de Intervención</li>            
                        <li>Revisar Política de Riesgos Psicosociales</li>
                        <li>Revisar Programas de Prevención</li>
                        <li>Promoción de un Entorno Organizacional Saludable</li>
                        <li>Prevención de Violencia Laboral</li>
                        <li>Reforzar Aplicación y Difusión</li>
                        </>
const accionesBajo =    <>
                        <li>Mayor difusión de la Política de Riesgos Psicosociales</li>
                        <li>Mayor difusión de los Programas de Prevención</li>
                        <li>Mayor difusión de Promoción de un Entorno Organizacional Saludable</li>
                        <li>Mayor difusión de la Prevención de Violencia Laboral</li>
                        </>
const accionesNulo =    <>El riesgo resulta despreciable por lo que <b>no se requieren medidas adicionales</b>.</>

export default function Calculos(){
    const {form2} = useContext(PdfContext)
    
    const [Total, setTotal] = useState([])
    const [Ambiente, setAmbiente] = useState([])
    const [FactoresPropios, setFactoresPropios] = useState([])
    const [Organizacion, /*setOrganizacion*/] = useState([])
    const [LiderazgoRelaciones, /*setLiderazgoRelaciones*/] = useState([])
    const [Entorno, /*setEntorno*/] = useState([])
    const [Condiciones, /*setCondiciones*/] = useState([])
    const [Carga, /*setCarga*/] = useState([])
    const [FaltaControl, /*setFaltaControl*/] = useState([])
    const [Jornada, /*setJornada*/] = useState([])
    const [Interferencia, /*setInterferencia*/] = useState([])
    const [Liderazgo, /*setLiderazgo*/] = useState([])
    const [Relaciones, /*setRelaciones*/] = useState([])
    const [Violencia, /*setViolencia*/] = useState([])
    const [Reconocimiento, /*setReconocimiento*/] = useState([])
    const [Pertenencia, /*setPertenencia*/] = useState([])
    
    let resultado = 0
    let rango = 0
     
    //Total//
    Object.values(form2).map(valor => resultado = resultado + parseInt(valor))   

        if(resultado < 50){            
            setTotal(nivelNulo)
        }
        else if(resultado < 75){
                setTotal(nivelBajo)
        }
        else if(resultado < 99){
                setTotal(nivelMedio)
        }
        else if(resultado < 140){
                setTotal(nivelAlto)
        }
        else if(resultado >= 140){
                setTotal(nivelMuyAlto)
        }
    //Ambiente//
    Object.values(form2).map((valor, i) => i <= 4 && (resultado = resultado + parseInt(valor))) 

        if(resultado < 5){            
                    setAmbiente([...nivelNulo, accionesNulo])
        }
        else if(resultado < 9){
                    setAmbiente([...nivelBajo, accionesBajo])            
        }
        else if(resultado < 11){
                    setAmbiente([...nivelMedio, accionesMedio])            
        }
        else if(resultado < 14){
                    setAmbiente([...nivelAlto, accionesAlto])            
        }
        else if(resultado >= 14){
                    setAmbiente([...nivelMuyAlto, accionesAlto])            
        }
    //FactoresPropios//
    resultado = (
        Object.values(form2).map((valor, i) => (i >= 5 && i <= 15) && (rango = rango + parseInt(valor))) + 
        Object.values(form2).map((valor, i) => (i >= 22 && i <= 29) && (rango = rango + parseInt(valor))) + 
        Object.values(form2).map((valor, i) => (i >= 64 && i <= 67) && (rango = rango + parseInt(valor))))    
                                                     
        if(resultado < 15){            
                    setFactoresPropios([...nivelNulo, accionesNulo])
        }
        else if(resultado < 30){
                    setFactoresPropios([...nivelBajo, accionesBajo])            
        }
        else if(resultado < 45){
                    setFactoresPropios([...nivelMedio, accionesMedio])            
        }
        else if(resultado < 60){
                    setFactoresPropios([...nivelAlto, accionesAlto])            
        }
        else if(resultado >= 60){
                    setFactoresPropios([...nivelMuyAlto, accionesAlto])            
        }
    // //Organizacion//
    // Object.values(form2).map((valor, i) => (i >= 16 && i <= 21) && (resultado = resultado + parseInt(valor))) 

    //     if(resultado < 5){            
    //                 setOrganizacion([...nivelNulo, accionesNulo])
    //     }
    //     else if(resultado < 7){
    //                 setOrganizacion([...nivelBajo, accionesBajo])            
    //     }
    //     else if(resultado < 10){
    //                 setOrganizacion([...nivelMedio, accionesMedio])            
    //     }
    //     else if(resultado < 13){
    //                 setOrganizacion([...nivelAlto, accionesAlto])            
    //     }
    //     else if(resultado >= 13){
    //                 setOrganizacion([...nivelMuyAlto, accionesAlto])            
    //     }
    // //LiderazgoRelaciones//
    // resultado = (
    //     Object.values(form2).map((valor, i) => (i >= 30 && i <= 34) && (rango = rango + parseInt(valor))) + 
    //     Object.values(form2).map((valor, i) => (i >= 36 && i <= 40) && (rango = rango + parseInt(valor))) +
    //     Object.values(form2).map((valor, i) => (i >= 56 && i <= 63) && (rango = rango + parseInt(valor))) + 
    //     Object.values(form2).map((valor, i) => (i >= 68 && i <= 71) && (rango = rango + parseInt(valor))))    
                                                     
    //     if(resultado < 14){            
    //                 setLiderazgoRelaciones([...nivelNulo, accionesNulo])
    //     }
    //     else if(resultado < 29){
    //                 setLiderazgoRelaciones([...nivelBajo, accionesBajo])            
    //     }
    //     else if(resultado < 42){
    //                 setLiderazgoRelaciones([...nivelMedio, accionesMedio])            
    //     }
    //     else if(resultado < 58){
    //                 setLiderazgoRelaciones([...nivelAlto, accionesAlto])            
    //     }
    //     else if(resultado >= 58){
    //                 setLiderazgoRelaciones([...nivelMuyAlto, accionesAlto])            
    //     }
    // //Entorno//
    // Object.values(form2).map((valor, i) => (i >= 46 && i <= 55) && (resultado = resultado + parseInt(valor))) 

    //     if(resultado < 10){            
    //                 setEntorno([...nivelNulo, accionesNulo])
    //     }
    //     else if(resultado < 14){
    //                 setEntorno([...nivelBajo, accionesBajo])            
    //     }
    //     else if(resultado < 18){
    //                 setEntorno([...nivelMedio, accionesMedio])            
    //     }
    //     else if(resultado < 23){
    //                 setEntorno([...nivelAlto, accionesAlto])            
    //     }
    //     else if(resultado >= 23){
    //                 setEntorno([...nivelMuyAlto, accionesAlto])            
    //     }
    // //Condiciones//
    // Object.values(form2).map((valor, i) => i <= 4 && (resultado = resultado + parseInt(valor))) 

    //     if(resultado < 5){            
    //                 setCondiciones(nivelNulo)
    //     }
    //     else if(resultado < 9){
    //                 setCondiciones(nivelBajo)            
    //     }
    //     else if(resultado < 11){
    //                 setCondiciones(nivelMedio)            
    //     }
    //     else if(resultado < 14){
    //                 setCondiciones(nivelAlto)            
    //     }
    //     else if(resultado >= 14){
    //                 setCondiciones(nivelMuyAlto)            
    //     }
    // //Carga//    
    // resultado = (
    //     Object.values(form2).map((valor, i) => (i >= 5 && i <= 15) && (rango = rango + parseInt(valor))) +  
    //     Object.values(form2).map((valor, i) => (i >= 64 && i <= 67) && (rango = rango + parseInt(valor))))    
                                                         
    //     if(resultado < 15){            
    //                 setCarga(nivelNulo)
    //     }
    //     else if(resultado < 21){
    //                 setCarga(nivelBajo)            
    //     }
    //     else if(resultado < 27){
    //                 setCarga(nivelMedio)            
    //     }
    //     else if(resultado < 37){
    //                 setCarga(nivelAlto)            
    //     }
    //     else if(resultado >= 37){
    //                 setCarga(nivelMuyAlto)            
    //     }
    // //FaltaControl//
    // resultado = (
    //     Object.values(form2).map((valor, i) => (i >= 22 && i <= 29) && (rango = rango + parseInt(valor))) +  
    //     Object.values(form2).map((valor, i) => (i >= 34 && i <= 35) && (rango = rango + parseInt(valor))))    
                                                         
    //     if(resultado < 11){            
    //                 setFaltaControl(nivelNulo)
    //     }
    //     else if(resultado < 16){
    //                 setFaltaControl(nivelBajo)            
    //     }
    //     else if(resultado < 21){
    //                 setFaltaControl(nivelMedio)            
    //     }
    //     else if(resultado < 25){
    //                 setFaltaControl(nivelAlto)            
    //     }
    //     else if(resultado >= 25){
    //                 setFaltaControl(nivelMuyAlto)            
    //     }
    // //Jornada//
    // Object.values(form2).map((valor, i) => (i >= 16 && i <= 17) && (resultado = resultado + parseInt(valor))) 

    //     if(resultado < 1){            
    //                 setJornada(nivelNulo)
    //     }
    //     else if(resultado < 2){
    //                 setJornada(nivelBajo)            
    //     }
    //     else if(resultado < 4){
    //                 setJornada(nivelMedio)            
    //     }
    //     else if(resultado < 6){
    //                 setJornada(nivelAlto)            
    //     }
    //     else if(resultado >= 6){
    //                 setJornada(nivelMuyAlto)            
    //     }
    // //Interferencia//
    // Object.values(form2).map((valor, i) => (i >= 18 && i <= 21) && (resultado = resultado + parseInt(valor))) 

    //     if(resultado < 4){            
    //                 setInterferencia(nivelNulo)
    //     }
    //     else if(resultado < 6){
    //                 setInterferencia(nivelBajo)            
    //     }
    //     else if(resultado < 8){
    //                 setInterferencia(nivelMedio)            
    //     }
    //     else if(resultado < 10){
    //                 setInterferencia(nivelAlto)            
    //     }
    //     else if(resultado >= 10){
    //                 setInterferencia(nivelMuyAlto)            
    //     }
    // //Liderazgo//
    // resultado = (
    //     Object.values(form2).map((valor, i) => (i >= 30 && i <= 33) && (rango = rango + parseInt(valor))) +  
    //     Object.values(form2).map((valor, i) => (i >= 36 && i <= 40) && (rango = rango + parseInt(valor))))    
                                                         
    //     if(resultado < 9){            
    //                 setLiderazgo(nivelNulo)
    //     }
    //     else if(resultado < 12){
    //                 setLiderazgo(nivelBajo)            
    //     }
    //     else if(resultado < 16){
    //                 setLiderazgo(nivelMedio)            
    //     }
    //     else if(resultado < 20){
    //                 setLiderazgo(nivelAlto)            
    //     }
    //     else if(resultado >= 20){
    //                 setLiderazgo(nivelMuyAlto)            
    //     } 
    // //Relaciones//
    // resultado = (
    //     Object.values(form2).map((valor, i) => (i >= 41 && i <= 45) && (rango = rango + parseInt(valor))) +  
    //     Object.values(form2).map((valor, i) => (i >= 68 && i <= 71) && (rango = rango + parseInt(valor))))    
                                                         
    //     if(resultado < 10){            
    //                 setRelaciones(nivelNulo)
    //     }
    //     else if(resultado < 13){
    //                 setRelaciones(nivelBajo)            
    //     }
    //     else if(resultado < 17){
    //                 setRelaciones(nivelMedio)            
    //     }
    //     else if(resultado < 21){
    //                 setRelaciones(nivelAlto)            
    //     }
    //     else if(resultado >= 21){
    //                 setRelaciones(nivelMuyAlto)            
    //     }  
    // //Violencia//
    // Object.values(form2).map((valor, i) => (i >= 56 && i <= 63) && (resultado = resultado + parseInt(valor))) 

    // if(resultado < 7){            
    //             setViolencia(nivelNulo)
    // }
    // else if(resultado < 10){
    //             setViolencia(nivelBajo)            
    // }
    // else if(resultado < 13){
    //             setViolencia(nivelMedio)            
    // }
    // else if(resultado < 16){
    //             setViolencia(nivelAlto)            
    // }
    // else if(resultado >= 16){
    //             setViolencia(nivelMuyAlto)            
    // }
    // //Reconocimiento//
    // Object.values(form2).map((valor, i) => (i >= 46 && i <= 51) && (resultado = resultado + parseInt(valor))) 

    // if(resultado < 6){            
    //             setReconocimiento(nivelNulo)
    // }
    // else if(resultado < 10){
    //             setReconocimiento(nivelBajo)            
    // }
    // else if(resultado < 14){
    //             setReconocimiento(nivelMedio)            
    // }
    // else if(resultado < 18){
    //             setReconocimiento(nivelAlto)            
    // }
    // else if(resultado >= 18){
    //             setReconocimiento(nivelMuyAlto)            
    // }
    // //Pertenencia//
    // Object.values(form2).map((valor, i) => (i >= 52 && i <= 55) && (resultado = resultado + parseInt(valor))) 

    // if(resultado < 4){            
    //             setPertenencia(nivelNulo)
    // }
    // else if(resultado < 6){
    //             setPertenencia(nivelBajo)            
    // }
    // else if(resultado < 8){
    //             setPertenencia(nivelMedio)            
    // }
    // else if(resultado < 10){
    //             setPertenencia(nivelAlto)            
    // }
    // else if(resultado >= 10){
    //             setPertenencia(nivelMuyAlto)            
    // }

    const resultados = [
        Total,
        Ambiente,
        FactoresPropios,
        Organizacion,
        LiderazgoRelaciones,
        Entorno,
        Condiciones,
        Carga,
        FaltaControl,
        Jornada,
        Interferencia,
        Liderazgo,
        Relaciones,
        Violencia,
        Reconocimiento,
        Pertenencia]
    console.log(resultados)    
    return resultados

}