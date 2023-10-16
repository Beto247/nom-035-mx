import { Text, Page, StyleSheet, Svg, Rect, View, Document, Link} from "@react-pdf/renderer";
import { niveles, acciones } from "../../objetos/nivelesAcciones";

const { nivelMuyAlto, nivelAlto, nivelMedio, nivelBajo, nivelNulo } = niveles
const { accionesAlto, accionesMedio, accionesBajo, accionesNulo } = acciones
const styles = StyleSheet.create({
    hoja: {
        padding: '45',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media max-width: 400': {
            padding: '15',
            },
    },
    titulo: {
        fontSize: '30',
        textAlign: 'center',
        marginTop: '12',
        marginBottom: '30',
        fontFamily: 'Helvetica-Bold',
        '@media max-width: 400': {
            fontSize: '12',
            textAlign: 'center',
            marginTop: '6',
            marginBottom: '10'
            },
    },
    b: {
        fontFamily: 'Helvetica-Bold',
        fontSize: '14',
        textAlign: 'justify',
        width: '90%',
        marginTop: '15',
        marginBottom: '15',
        '@media max-width: 400': {
            fontSize: '8',
            textAlign: 'justify',
            width: '90%',
            marginTop: '8',
            marginBottom: '8', 
            },
    },
    bO: {
        fontFamily: 'Helvetica-BoldOblique',
        fontSize: '20',
        '@media max-width: 400': {
            fontSize: '8', 
            },
    },
    bT:{
        fontFamily: 'Helvetica-Bold',
        fontSize: '30',
        '@media max-width: 400': {
            fontSize: '18', 
            },
    },
    parrafo: {        
        width: '90%',
        marginTop: '10',
        marginBottom: '15',
        fontSize: '14',
        textAlign: 'justify',
        '@media max-width: 400': {
            marginTop: '5',
            marginBottom: '8',
            fontSize: '8',
            },
    },
    acciones1: {
        width: '90%',
        marginTop: '35',
        textAlign: 'justify',
        fontFamily: 'Helvetica-Oblique',
        fontSize: '18',
        lineHeight: '1.4',
        '@media max-width: 400': {
            width: '90%',
            marginTop: '15',
            fontSize: '10',
            },
    },
    acciones2: {
        width: '90%',
        textAlign: 'justify',
        fontFamily: 'Helvetica-Oblique',
        fontSize: '16',
        '@media max-width: 400': {
            fontSize: '8', 
          },
    },
    cover: {
        margin: '20',
        marginTop: '260',
        textAlign: 'center',
        fontSize: '50',
        '@media max-width: 400': {
            margin: '10',
            marginTop: '100',
            fontSize: '25',
          },        
    },
    links:  {
        flexDirection: "row",
        justifyContent: 'center',
        margin: '10',
        '@media max-width: 400': {
            margin: '3', 
          },
    },
    icons:  {
        margin: '10',
        '@media max-width: 400': {
            margin: '5', 
          },
    }

})
    
function AcontecimientosTraumaticos(props){

    const texto1 = [['NO', 'NECESITAS ATENCIÓN CLÍNICA'], <Text style={styles.acciones1}>"Por el <Text style={styles.bO}>Resultado</Text> de tu Evaluación tu centro de trabajo no tendrá que realizar acciones posteriores especificas. Recuerda que es tu deber informar si vives algún evento que ponga en peligro tu integridad fisica o la de tus compañeros"</Text>]
    const texto2 = [[null,'NECESITAS ATENCIÓN CLÍNICA'], <Text style={styles.acciones1}>"Por el <Text style={styles.bO}>Resultado</Text> de tu Evaluación tu centro de trabajo tendrá que canalizarte <Text style={styles.bO}> para tu atención clinica</Text> a la <Text style={styles.bO}>Institución de Seguridad Social o Privada</Text>, o al medico del centro de trabajo o de la empresa. Tu obligación como trabajador es someterte a los exámenes médicos y evaluaciones psicológicas que indica la NOM-035-STPS-2018"</Text>]

    let rango2= 0
    let rango3 = 0
    let rango4 = 0
    let texto = []

    Object.entries(props.form1).forEach(el =>{if(el[0] >= 7 && el[0] <= 8){rango2 = rango2 + parseInt(el[1])}
                                        else if(el[0] >= 9 && el[0] <= 15){rango3 = rango3 + parseInt(el[1])}
                                        else if(el[0] >= 16){rango4 = rango4 + parseInt(el[1])}})
       
    if(rango2 > 0){
        texto = texto2}
    else if(rango3 >= 3){
        texto = texto2}
    else if(rango4 >= 2){
        texto = texto2}
    else{texto = texto1}       

    return(
            <Page style={styles.hoja} size="A4">
            <Text style={styles.titulo}>Acontecimientos Traumáticos Severos</Text>
            <Text style={styles.parrafo}>Aquellos experimentados durante o con motivo del trabajo. Se caracterizan por la ocurrencia de la muerte o pone en peligro la integridad fisica de una o varias personas.</Text>
            <Text style={styles.parrafo}>Puede generar trastorno de estrés postraumático para quien lo sufre o lo presencia.</Text>
            <Text style={styles.parrafo}>De acuerdo a tus respuestas:</Text>
                <Svg width="100%" height="180">
                <Rect x="20" y="10" width="475" height="150" stroke="red" strokeWidth={3}/>
                {texto[0][0] ?  <><Text x="230" y="75" style={{fontSize: '32', fontFamily: 'Helvetica-Bold'}}>{texto[0][0]}</Text>
                                <Text x="46" y="105" style={{fontSize: '28'}}>{texto[0][1]}</Text></>
                             :  <Text x="45" y="92" style={{fontSize: '28', fontFamily: 'Helvetica-Bold'}}>{texto[0][1]}</Text>  }
                </Svg>  
                <Text style={styles.parrafo}>Acciones a realizar por parte de tu Centro de Trabajo:</Text> 
                {texto[1]}           
            </Page>
    )
}

function Criterios(){
    return(
        <Page style={styles.hoja} size="A4">
        <Text style={styles.titulo}>Criterios de Evaluación</Text>
        <Text style={styles.parrafo}>Los resultados de tus cuestionarios se evaluan de acuerdo a la siguiente Escala de Riesgos:</Text>
        <Svg width="100%" height="380">
            <Rect x="180" y="30" width="150" height="60" stroke="black" strokeWidth="2" fill="red"></Rect>
            <Text x="200" y="67" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>MUY ALTO</Text>
            <Rect x="180" y="90" width="150" height="60" stroke="black" strokeWidth="2" fill="orange"></Rect>
            <Text x="225" y="127" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>ALTO</Text>
            <Rect x="180" y="150" width="150" height="60" stroke="black" strokeWidth="2" fill="yellow"></Rect>
            <Text x="220" y="187" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>MEDIO</Text>
            <Rect x="180" y="210" width="150" height="60" stroke="black" strokeWidth="2" fill="lime"></Rect>
            <Text x="223" y="247"style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>BAJO</Text>
            <Rect x="180" y="270" width="150" height="60" stroke="black" strokeWidth="2" fill="deepskyblue"></Rect>
            <Text x="223" y="307" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>NULO</Text>
        </Svg>
        <Text style={styles.parrafo}>De acuerdo a la <Text style={styles.b}>NOM-035-STPS-2018</Text> tu Centro de Trabajo tendrá que realizar acciones de mejora a partir del <Text style={styles.b}>NIVEL DE RIESGO BAJO.</Text></Text>
        <Text style={styles.parrafo}>Las Evaluaciones  fueron calculadas de  acuerdo a las tablas 5, 6 y 7 mencionadas en la Guía de Referencia III de la presente Norma Oficial Mexicana.</Text>
       </Page>
    )
}

function LiderazgoRelaciones(props){

    //****LiderazgoRelaciones****//
    let liderazgoRelaciones = []
    let resultadoLR = 0    
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 37 && el[0] <= 41){resultadoLR = resultadoLR + parseInt(el[1])}
                                            else if(el[0] >= 42 && el[0] <= 46){resultadoLR = resultadoLR + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoL = resultadoL + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 42 && el[0] <= 46){resultadoR = resultadoR + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el => {if(el[0] >= 57 && el[0] <= 64){resultadoV = resultadoV + parseInt(el[1])}}) 
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
            <Page style={styles.hoja} size="A4">
                <Text style={styles.titulo}>        Liderazgo y Relaciones en el Trabajo</Text>
                <Text style={styles.parrafo}>Para calificar esta categoria se toma en cuenta el <Text style={styles.b}>Liderazgo</Text>, las <Text style={styles.b}>Relaciones en el Trabajo</Text> y la <Text style={styles.b}>Violencia</Text> presente en tu Centro de Trabajo</Text>
                <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                <Svg width="100%" height="242">
                    <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="135" y="47" style={{fontSize: '22'}}>Liderazgo</Text>
                        <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={liderazgo[0]}></Rect>
                        <Text x="295" y="47" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{liderazgo[1]}</Text>
                    <Rect x="80" y="80" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="86" y="115" style={{fontSize: '17'}}>Relaciones en el Trabajo</Text>
                        <Rect x="280" y="80" width="120" height="60" stroke="black" strokeWidth="2" fill={relaciones[0]}></Rect>
                        <Text x="295" y="115" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{relaciones[1]}</Text>
                    <Rect x="80" y="150" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="95" y="187" style={{fontSize: '22'}}>Violencia Laboral</Text>
                        <Rect x="280" y="150" width="120" height="60" stroke="black" strokeWidth="2" fill={violencia[0]}></Rect>
                        <Text x="295" y="187" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{violencia[1]}</Text>
                </Svg>
                <Text style={styles.parrafo}>Nivel de Riesgo en esta Categoria:</Text>
                <Svg width="100%" height="60">                  
                    <Rect x="30" y="0" width="420" height="50" fill={liderazgoRelaciones[0]}></Rect>
                    <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{liderazgoRelaciones[1]}</Text>
                </Svg>
                <Text style={styles.b}>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</Text>
                <View style={styles.acciones2}>{liderazgoRelaciones[2]}</View>
           </Page>    
        )        
}

function EntornoOrganizacional(props){

    //****EntornoOrganizacional****//
    let entornoOrganizacional = []
    let resultadoEO = 0    
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 47 && el[0] <= 56){resultadoEO = resultadoEO + parseInt(el[1])}})    
        //console.log(resultadoEO)                                                     
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 47 && el[0] <= 52){resultadoR = resultadoR + parseInt(el[1])}})
                                                                       
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
        Object.entries(props.form2).forEach(el => {if(el[0] >= 53 && el[0] <= 56){resultadoP = resultadoP + parseInt(el[1])}})

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
    
    return(
        <Page style={styles.hoja} size="A4">
                <Text style={styles.titulo}>Entorno Organizacional</Text>
                <Text style={styles.parrafo}>Para calificar esta categoria se toma en cuenta el <Text style={styles.b}>Reconocimiento al Desempeño</Text> y el <Text style={styles.b}>Insuficiente sentido de pertenencia e, inestabilidad</Text> presente en tu Centro de Trabajo</Text>
                <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                <Svg width="100%" height="220">
                    <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="100" y="38" style={{fontSize: '18'}}>Reconocimiento del </Text>
                        <Text x="126" y="56" style={{fontSize: '18'}}>Desempeño</Text>
                        <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={reconocimiento[0]}></Rect>
                        <Text x="295" y="47" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{reconocimiento[1]}</Text>
                    <Rect x="80" y="80" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="96" y="107" style={{fontSize: '16'}}>Insuficiente Sentido de</Text>
                        <Text x="82" y="125" style={{fontSize: '16'}}>Pertenencia e, Inestabilidad</Text>
                        <Rect x="280" y="80" width="120" height="60" stroke="black" strokeWidth="2" fill={pertenencia[0]}></Rect>
                        <Text x="295" y="115" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{pertenencia[1]}</Text>
                </Svg>
                <Text style={styles.parrafo}>Nivel de Riesgo en esta Categoria:</Text>
                <Svg width="100%" height="60">                  
                    <Rect x="30" y="0" width="420" height="50" fill={entornoOrganizacional[0]}></Rect>
                    <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{entornoOrganizacional[1]}</Text>
                </Svg>
                <Text style={styles.b}>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</Text>
                <View style={styles.acciones2}>{entornoOrganizacional[2]}</View>
           </Page>
    )

}

function OrganizacionTiempo(props){

    //****OrganizacionTiempo****//
    let organizacioTiempo = []
    let resultadoOT = 0    
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 17 && el[0] <= 22){resultadoOT = resultadoOT + parseInt(el[1])}})    
                                                         
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 19 && el[0] <= 22){resultadoI = resultadoI + parseInt(el[1])}})
                                                                       
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 17 && el[0] <= 18){resultadoJ = resultadoJ + parseInt(el[1])}}) 

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
    
        return(
            <Page style={styles.hoja} size="A4">
                    <Text style={styles.titulo}>        Organización del Tiempo de Trabajo</Text>
                    <Text style={styles.parrafo}>Para calificar esta categoria se toma en cuenta el <Text style={styles.b}>Jornada de Trabajo</Text> y la <Text style={styles.b}>Interferencia en la Relación Trabajo-Familia</Text> presente en tu Centro de Trabajo</Text>
                    <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                    <Svg width="100%" height="220">
                        <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                            <Text x="100" y="47" style={{fontSize: '18'}}>Jornada de Trabajo</Text>
                            <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={jornada[0]}></Rect>
                            <Text x="295" y="47" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{jornada[1]}</Text>
                        <Rect x="80" y="80" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                            <Text x="116" y="107" style={{fontSize: '16'}}>Interferencia en la</Text>
                            <Text x="94" y="125" style={{fontSize: '16'}}>Relación Trabajo-Familia</Text>
                            <Rect x="280" y="80" width="120" height="60" stroke="black" strokeWidth="2" fill={interferencia[0]}></Rect>
                            <Text x="295" y="115" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{interferencia[1]}</Text>
                    </Svg>
                    <Text style={styles.parrafo}>Nivel de Riesgo en esta Categoria:</Text>
                    <Svg width="100%" height="60">                  
                        <Rect x="30" y="0" width="420" height="50" fill={organizacioTiempo[0]}></Rect>
                        <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{organizacioTiempo[1]}</Text>
                    </Svg>
                    <Text style={styles.b}>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</Text>
                    <View style={styles.acciones2}>{organizacioTiempo[2]}</View>
               </Page>
        )   
}

function AmbienteTrabajo(props){

      //****Ambiente****//
      let ambiente = []
      let resultadoA = 0    
          Object.entries(props.form2).forEach(el =>{if(el[0] <= 5){resultadoA = resultadoA + parseInt(el[1])}})    
                                                           
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
          Object.entries(props.form2).forEach(el =>{if(el[0] <= 5){resultadoC = resultadoC + parseInt(el[1])}})
                                                                         
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
    
    return(
        <Page style={styles.hoja} size="A4">
                <Text style={styles.titulo}>Ambiente de Trabajo</Text>
                <Text style={styles.parrafo}>Para calificar esta categoria se toma en cuenta las <Text style={styles.b}>Condiciones en el Ambiente de Trabajo</Text>, es decir, las <Text style={styles.b}>Condiciones Peligros e Inseguras</Text>,  las <Text style={styles.b}>Condiciones Deficientes e Insalubres</Text> y los <Text style={styles.b}>Trabajos Peligrosos</Text> presente en tu Centro de Trabajo</Text>
                <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                <Svg width="100%" height="180">
                    <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="120" y="36" style={{fontSize: '18'}}>Condiciones en</Text>
                        <Text x="88" y="56" style={{fontSize: '18'}}>el Ambiente de Trabajo</Text>
                        <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={condiciones[0]}></Rect>
                        <Text x="295" y="47" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{condiciones[1]}</Text>
                </Svg>
                <Text style={styles.parrafo}>Nivel de Riesgo en esta Categoria:</Text>
                <Svg width="100%" height="80">                  
                    <Rect x="30" y="0" width="420" height="50" fill={ambiente[0]}></Rect>
                    <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{ambiente[1]}</Text>
                </Svg>
                <Text style={styles.b}>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</Text>
                <View style={styles.acciones2}>{ambiente[2]}</View>
           </Page>
    )
}

function FactoresPropios(props){

    //****FactoresPropios****//
    let factoresPropios = []
    let resultadoFT = 0    
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 23 && el[0] <= 30){resultadoFT = resultadoFT + parseInt(el[1])}
                                            else if(el[0] >= 35 && el[0] <= 36){resultadoFT = resultadoFT + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoC = resultadoC + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el => {if(el[0] >= 23 && el[0] <= 30){resultadoFC = resultadoFC + parseInt(el[1])}
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

    return(
        <Page style={styles.hoja} size="A4">
                <Text style={styles.titulo}>Factores Propios de la Actividad</Text>
                <Text style={styles.parrafo}>Para calificar esta categoria se toma en cuenta la <Text style={styles.b}>Carga de Trabajo</Text> y el <Text style={styles.b}>Falta de Control Sobre el Trabajo</Text> presente en tu Centro de Trabajo</Text>
                <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                <Svg width="100%" height="220">
                    <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="120" y="47" style={{fontSize: '18'}}>Carga de Trabajo</Text>
                        <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={carga[0]}></Rect>
                        <Text x="295" y="47" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{carga[1]}</Text>
                    <Rect x="80" y="80" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="120" y="107" style={{fontSize: '17'}}>Falta de Control</Text>
                        <Text x="120" y="125" style={{fontSize: '17'}}>Sobre el Trabajo</Text>
                        <Rect x="280" y="80" width="120" height="60" stroke="black" strokeWidth="2" fill={faltaControl[0]}></Rect>
                        <Text x="295" y="115" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{faltaControl[1]}</Text>
                </Svg>
                <Text style={styles.parrafo}>Nivel de Riesgo en esta Categoria:</Text>
                <Svg width="100%" height="60">
                    <Rect x="30" y="0" width="420" height="50" fill={factoresPropios[0]}></Rect>
                    <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{factoresPropios[1]}</Text>
                </Svg>
                    <Text style={styles.b}>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</Text>
                    <View style={styles.acciones2}>{factoresPropios[2]}</View>
        </Page>
    )    
}
    
function ResultadosGenerales(props){

    //****ResultadoTotal****//
    let resultadoTotal = []
    let resultadoT = 0    
        Object.entries(props.form2).forEach(el =>{resultadoT = resultadoT + parseInt(el[1])})    
                                                         
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 31 && el[0] <= 34){resultadoLR = resultadoLR + parseInt(el[1])}
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 47 && el[0] <= 56){resultadoEO = resultadoEO + parseInt(el[1])}})    
                                                            
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 17 && el[0] <= 22){resultadoOT = resultadoOT + parseInt(el[1])}})    
                                                         
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
        Object.entries(props.form2).forEach(el =>{if(el[0] <= 5){resultadoA = resultadoA + parseInt(el[1])}})    
                                                         
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
        Object.entries(props.form2).forEach(el =>{if(el[0] >= 6 && el[0] <= 16){resultadoFT = resultadoFT + parseInt(el[1])}
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
        <Page style={styles.hoja}>
                <Text style={styles.titulo}>A continuación, se presenta un resumen de TODA TU EVALUACIÓN.</Text>
                <Text style={styles.parrafo}>Estos Resultados te podrán servir para <Text style={styles.b}>comparar tus Niveles de Riesgo</Text> con tus compañeros.</Text>
                <Text style={styles.parrafo}>De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</Text>
                <Svg width="100%" height="360">
                    <Rect x="80" y="10" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="140" y="35" style={{fontSize: '17'}}>Liderazgo y</Text>
                        <Text x="100" y="55" style={{fontSize: '17'}}>Relaciones de Trabajo</Text>
                        <Rect x="280" y="10" width="120" height="60" stroke="black" strokeWidth="2" fill={liderazgoRelaciones[0]}></Rect>
                        <Text x="295" y="45" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{liderazgoRelaciones[1]}</Text>
                    <Rect x="80" y="80" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="85" y="115" style={{fontSize: '18'}}>Entorno Organizacional</Text>
                        <Rect x="280" y="80" width="120" height="60" stroke="black" strokeWidth="2" fill={entornoOrganizacional[0]}></Rect>
                        <Text x="295" y="115" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{entornoOrganizacional[1]}</Text>
                    <Rect x="80" y="150" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="115" y="175" style={{fontSize: '17'}}>Organización del</Text>
                        <Text x="110" y="195" style={{fontSize: '17'}}>Tiempo de Trabajo</Text>
                        <Rect x="280" y="150" width="120" height="60" stroke="black" strokeWidth="2" fill={organizacioTiempo[0]}></Rect>
                        <Text x="295" y="185" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{organizacioTiempo[1]}</Text>
                    <Rect x="80" y="220" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="100" y="255" style={{fontSize: '18'}}>Ambiente de Trabajo</Text>
                        <Rect x="280" y="220" width="120" height="60" stroke="black" strokeWidth="2" fill={ambiente[0]}></Rect>
                        <Text x="295" y="255" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{ambiente[1]}</Text>
                    <Rect x="80" y="290" width="200" height="60" stroke="black" strokeWidth="2"></Rect>
                        <Text x="120" y="315" style={{fontSize: '17'}}>Factores Propios</Text>
                        <Text x="125" y="335" style={{fontSize: '17'}}>de la Actividad</Text>
                        <Rect x="280" y="290" width="120" height="60" stroke="black" strokeWidth="2" fill={factoresPropios[0]}></Rect>
                        <Text x="295" y="325" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{factoresPropios[1]}</Text>
                </Svg>
                <Text style={styles.parrafo}>Tomando en cuenta las respuestas de <Text style={styles.b}>TODO el Cuestionario</Text>, tu nivel de Riesgo en General es:</Text>
                <Svg width="100%" height="50">
                    <Rect x="30" y="0" width="420" height="50" fill={resultadoTotal[0]}></Rect>
                    <Text x="200" y="32" style={{fontSize: '22', fontFamily: 'Helvetica-Bold'}}>{resultadoTotal[1]}</Text>
                </Svg>
                    <Text style={styles.parrafo}>Compara estos resultados con tus compañeros y propon acciones de mejora con tus lideres.</Text>
                    <Text style={styles.parrafo}>¡El cambio esta en tus manos!</Text>                    
        </Page>
        )
}

function Cover(props){
    return(
        <Page style={styles.hoja} >
         <View style={styles.cover}>{props.texto}</View>
        </Page>
    )
}


export default function ReportePDF(props){
    let shareBotones =  <Link src={"https://nom-035-mx.web.app"}><Text>     Volver al</Text><Text>Cuestionario</Text></Link>
                        
    const [form1, form2] = props.valores
    
    return(
        <Document>
        <Cover texto={<Text>Resultado de tus Cuestionarios</Text>}/>
        <AcontecimientosTraumaticos form1={form1}/>
        <Criterios/>
        <LiderazgoRelaciones form2={form2}/>
        <EntornoOrganizacional form2={form2}/>
        <OrganizacionTiempo form2={form2}/>
        <AmbienteTrabajo form2={form2}/>
        <FactoresPropios form2={form2}/>
        <Cover texto={<Text>Resultados                 Generales</Text>}/>
        <ResultadosGenerales form2={form2}/>
        <Cover texto={shareBotones}/>
        </Document>
    )
}

