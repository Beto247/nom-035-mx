import PdfContext from "../../contextos/pdfcontext";
import { useContext } from "react";

const texto1 = [<p>NO NECESITAS ATENCIÓN CLÍNICA</p>, <p>Por el <b>Resultado</b> de tu Evaluación tu centro de trabajo no tendrá que realizar acciones posteriores especificas.<br/><br/>Recuerda que es tu deber informar si vives vives algún evento que ponga en peligro tu integridad fisica o la de tus compañeros</p>]
const texto2 = [<p>NECESITAS ATENCIÓN CLÍNICA</p>, <p>Por el Resultado de tu Evaluación tu centro de trabajo tendrá que canalizarte <b>para tu atención clinica</b> a la <b>Insititución de Seguridad Social o Privada</b>, o al medico del centro de trabajo o de la empresa.<br/><br/>Tu obligación como trabajador es someterte a los exámenes médicos y evaluaciones psicológicas que indica la NOM-035-STPS-2018</p>]

export default function AcontecimientosTraumaticos(){

    const {form1P, form1} = useContext(PdfContext)
    console.log('form1')
    console.log(form1)
    console.log('form1P')
    console.log(form1P)
    
    let rango2= 0
    let rango3 = 0
    let rango4 = 0
    let texto = []

    Object.entries(form1P).forEach(el =>{if(el[0] >= 7 && el[0] <= 8){rango2 = rango2 + parseInt(el[1])}
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
        
        <div className="hoja">
            <h1 className="titulo">Acontecimientos Traumáticos Severos</h1>
            <p className="parrafo">Aquellos experimentados durante o con motivo del trabajo. Se caracterizan por la <b>ocurrencia de la muerte o pone en peligro la integridad fisica</b> de una o varias personas.</p>
            <p className="parrafo">Puede generar trastorno de estrés postraumático para quien lo sufre o lo presencia.</p>
            <p className="parrafo">De acuerdo a tus respuestas:</p>
            <div className="box1">{texto[0]}</div>
            <p className="parrafo">Acciones a realizar por parte de tu Centro de Trabajo:</p>
            <div className="box2">{texto[1]}</div>
       </div>
    )
}


