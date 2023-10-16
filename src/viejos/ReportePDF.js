import  { Criterios, Cover } from "./hojas/OtrasHojas"
import AcontecimientosTraumaticos from "./hojas/AcontecimientosTraumaticos";
import LiderazgoRelaciones from './hojas/LiderazoRelaciones';
import EntornoOrganizacional from './hojas/EntornoOrganizacional';
import OrganizacionTiempo from './hojas/OrganizacionTiempo';
import AmbienteTrabajo from './hojas/AmbienteTrabajo';
import FactoresPropios from './hojas/FactoresPropios';
import ResultadoTotal from './hojas/ResultadoTotal';

export default function ReportePDF(){
    
    return(
        <>
        <Cover texto='Resultado de tus Cuestionarios'/>
        <AcontecimientosTraumaticos/>
        <Criterios/>
        <LiderazgoRelaciones/>
        <EntornoOrganizacional/>
        <OrganizacionTiempo/>
        <AmbienteTrabajo/>
        <FactoresPropios/>
        <Cover texto='Resultados Generales'/>
        <ResultadoTotal/>
        <Cover texto={<a href="youtube.com">Comparte el link a un Compañero</a>}/>           
        </>
     )
}


























//     <main>
//        <div class="hoja">
//         <div class="cover"><p>Resultado de tus Cuestionarios</p></div>
//        </div>               
//        <div class="hoja">
//         <h1 class="titulo">Acontecimientos Traumáticos Severos</h1>
//         <p class="parrafo">Aquellos experimentados durante o con motivo del trabajo. Se caracterizan por la <b>ocurrencia de la muerte o pone en peligro la integridad fisica</b> de una o varias personas.</p>
//         <p class="parrafo">Puede generar trastorno de estrés postraumático para quien lo sufre o lo presencia.</p>
//         <p class="parrafo">De acuerdo a tus respuestas:</p>
//         <div class="box1"><p>NO NECESITAS ATENCIÓN CLÍNICA</p></div>
//         <p class="parrafo">Acciones a realizar por parte de tu Centro de Trabajo:</p>
//         <div class="box2">
//             <p>Por el <b>Resultado</b> de tu Evaluación tu centro de trabajo no tendrá que realizar acciones posteriores especificas. Recuerda que es tu deber informar si vives vives algún evento que ponga en peligro tu integridad fisica o la de tus compañeros</p>
//         </div>
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">Criterios de Evaluación</h1>
//         <p class="parrafo">Los resultados de tus cuestionarios se evaluan de acuerdo a la siguiente Escala de Riesgos:</p>
//         <div class="outer-box">
//             <p class="box3" style="background-color: red;"><b>MUY ALTO</b></p>
//             <p class="box3" style="background-color: orange;"><b>ALTO</b></p>
//             <p class="box3" style="background-color: yellow;"><b>MEDIO</b></p>
//             <p class="box3" style="background-color: lime;"><b>BAJO</b></p>
//             <p class="box3" style="background-color: deepskyblue;"><b>NULO</b></p>
//         </div>
//         <p class="parrafo">De acuerdo a la <b>NOM-035-STPS-2018</b> tu Centro de Trabajo tendrá que realizar acciones de mejora a partir del <b>NIVEL DE RIESGO BAJO.</b></p>
//         <p class="parrafo">Las Evaluaciones fueron calculadas de acuerdo a las tablas 5, 6 y 7 mencionadas en la Guía de Referencia III de la presente Norma Oficial Mexicana.</p>
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">Liderazgo y Relaciones en el Trabajo</h1>
//         <p class="parrafo">Para calificar esta categoria se toma en cuenta el <b>Liderazgo</b>, las <b>Relaciones en el Trabajo</b> y la <b>Violencia</b> presente en tu Centro de Trabajo</p>
//         <p class="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
//         <div class="box4">
//             <div class="dimension"><p>Liderazgo</p></div>
//             <div class="nivel" style="background-color: ${obj.liderazgo[0]};"><p>${obj.liderazgo[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Relaciones en el Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.relaciones[0]};"><p>${obj.relaciones[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Violencia Laboral</p></div>
//             <div class="nivel" style="background-color: ${obj.violencia[0]};"><p>${obj.violencia[1]}</p></div> 
//         </div>
//         <p class="parrafo">Nivel de Riesgo en esta Categoria:</p>
//         <div class="box5" style="background-color: ${obj.liderazgoRelaciones[0]};">${obj.liderazgoRelaciones[1]}</div>
//         <p class="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
//         <ul class="acciones">${obj.liderazgoRelaciones[2]}</ul>        
//        </div>    
//        <div class="hoja">
//         <h1 class="titulo">Entorno Organizacional</h1>
//         <p class="parrafo">Para calificar esta categoria se toma en cuenta el <b>Reconocimiento al Desempeño</b>, y el <b>Insuficiente sentido de pertenencia e, inestabilidad</b> presente en tu Centro de Trabajo.</p>
//         <p class="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
//         <div class="box4">
//             <div class="dimension"><p>Reconocimiento del Desempeño</p></div>
//             <div class="nivel" style="background-color: ${obj.reconocimiento[0]};"><p>${obj.reconocimiento[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Insuficiente Sentido de Pertenencia e, Intestabilidad</p></div>
//             <div class="nivel" style="background-color: ${obj.pertenencia[0]};"><p>${obj.pertenencia[1]}</p></div> 
//         </div>
//         <p class="parrafo">Nivel de Riesgo en esta Categoria:</p>
//         <div class="box5" style="background-color: ${obj.entorno[0]};">${obj.entorno[1]}</div>
//         <p class="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
//         <ul class="acciones">${obj.entorno[2]}</ul>
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">Organización del Tiempo de Trabajo</h1>
//         <p class="parrafo">Para calificar esta categoria se toma en cuenta la <b>Jornada de Trabajo</b>, y la <b>Interferencia en la Relación Trabajo-Familia</b> presente en tu Centro de Trabajo.</p>
//         <p class="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
//         <div class="box4">
//             <div class="dimension"><p>Jornada de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.jornada[0]};"><p>${obj.jornada[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Interferencia en la Relación Trabajo-Familia</p></div>
//             <div class="nivel" style="background-color: ${obj.interferencia[0]};"><p>${obj.interferencia[1]}</p></div> 
//         </div>
//         <p class="parrafo">Nivel de Riesgo en esta Categoria:</p>
//         <div class="box5" style="background-color: ${obj.organizacion[0]};">${obj.organizacion[1]}</div>
//         <p class="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
//         <ul class="acciones">${obj.organizacion[2]}</ul>    
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">Ambiente de Trabajo</h1>
//         <p class="parrafo">Para calificar esta categoria se toma en cuenta las <b>Condiciones en el Ambiente de Trabajo</b>, es decir, las <b>Condiciones Peligros e Inseguras</b>, las <b>Condiciones Deficientes e Insalubres</b> y los <b>Trabajos Peligrosos</b> presentes en tu Centro de Trabajo.</p>
//         <p class="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
//         <div class="box4">
//             <div class="dimension"><p>Condiciones en el Ambiente de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.condiciones[0]};"><p>${obj.condiciones[1]}</p></div> 
//         </div>
//         <p class="parrafo">Nivel de Riesgo en esta Categoria:</p>
//         <div class="box5" style="background-color: ${obj.ambiente[0]};">${obj.ambiente[1]}</div>
//         <p class="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
//         <ul class="acciones">${obj.ambiente[2]}</b>.</ul>     
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">Factores Propios de la Actividad</h1>
//         <p class="parrafo">Para calificar esta categoria se toma en cuenta la <b>Carga de Trabajo</b> y la <b>Falta de Control Sobre el Trabajo</b> presente en tu Centro de Trabajo.</p>
//         <p class="parrafo">De acuerdo a tus respuestas, tus niveles de Riesgo son los siguientes:</p>
//         <div class="box4">
//             <div class="dimension"><p>Carga de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.carga[0]};"><p>${obj.carga[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Falta de Control Sobre el Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.faltaControl[0]};"><p>${obj.faltaControl[1]}</p></div> 
//         </div>
//         <p class="parrafo">Nivel de Riesgo en esta Categoria:</p>
//         <div class="box5" style="background-color: ${obj.factoresPropios[0]};">${obj.factoresPropios[1]}</div>
//         <p class="parrafo"><b>Necesidad de Acciones de acuerdo a la NOM-035-STPS-2018:</b></p>
//         <ul class="acciones">${obj.factoresPropios[2]}</ul> 
//        </div>
//        <div class="hoja">
//         <div class="cover"><p>Resultados Generales</p></div>
//        </div>
//        <div class="hoja">
//         <h1 class="titulo">A continuación, se presenta un resumen de <b>TODA TU EVALUACIÓN.</b></h1>
//         <p class="parrafo">Estos Resultados te podrán servir para <b>comparar tus Niveles de Riesgo</b> con tus compañeros.</p>
//         <div class="box4">
//             <div class="dimension"><p>Liderazgo y Relaciones de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.liderazgoRelaciones[0]};"><p>${obj.liderazgoRelaciones[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Entorno Organizacional</p></div>
//             <div class="nivel" style="background-color: ${obj.entorno[0]};"><p>${obj.entorno[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Organización del Tiempo de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.organizacion[0]};"><p>${obj.organizacion[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Ambiente de Trabajo</p></div>
//             <div class="nivel" style="background-color: ${obj.ambiente[0]};"><p>${obj.ambiente[1]}</p></div> 
//         </div>
//         <div class="box4">
//             <div class="dimension"><p>Factores Propios de la Actividad</p></div>
//             <div class="nivel" style="background-color: ${obj.factoresPropios[0]};"><p>${obj.factoresPropios[1]}</p></div> 
//         </div>
//         <p class="parrafo">Tomando en cuenta las respuestas de <b>TODO el Cuestionario</b>, tu nivel de Riesgo en General es:</p>
//         <div class="box5" style="background-color: ${obj.resultadoTotal[0]};">${obj.resultadoTotal[1]}</div>
//         <p class="parrafo"><b>Compara estos resultados con tus compañeros y propon acciones de mejora con tus lideres.</b></p>
//         <p class="parrafo"><b>¡El cambio esta en tus manos!</b></p>
//        </div>
//        <div class="hoja">
//         <div class="cover"><p><a href="https://www.youtube.com/" target="_blank">Compartir el link a un compañero</a></p></div>        
//        </div>
//     </main>