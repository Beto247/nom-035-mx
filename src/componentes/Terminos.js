

export default function Terminos(props){

    const aceptar = ()=>{
        props.visible('Datos')
    }
    return(
        <div className="centrar">
        <div className="aviso">
            <h2>Política de Privacidad y Protección de Datos Personales para Cuestionarios NOM-035</h2>
            <h3>Información del Responsable de Datos:</h3>
            <p>La presente Política de Privacidad y Protección de Datos Personales establece los términos y condiciones bajo los cuales <b>Cuestionarios NOM-035</b> ("nosotros", "nuestro", "la entidad") recopila, utiliza, almacena y protege los datos personales recopilados a través de los cuestionarios relacionados con la Norma Oficial Mexicana NOM-035-STPS-2018 en México.</p>
            <p>Para cualquier consulta relacionada con esta Política de Privacidad, puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
            <p>Nombre de la entidad: Cuestionarios NOM-035</p>
            <p>Correo electrónico de contacto: norma.035.mx@gmail.com</p>
            <h3>Descripción de la Recopilación de Datos:</h3>
            <p>La entidad recopila datos personales a través de formularios en línea con el propósito de llevar a cabo evaluaciones basadas en la Norma Oficial Mexicana NOM-035-STPS-2018. Los datos recopilados pueden incluir, entre otros:</p>
            <ul>
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Tamaño de la empresa donde trabaja</li>
                <li>Rol en la empresa (empleado o patrón)</li>
                <li>Nombre de la empresa</li>
                <li>Datos de posibles acontecimientos traumáticos severos, entorno organizacional y posibles riesgos psicosociales en el centro de trabajo.</li>
            </ul>
            <h3>Uso de Datos Personales:</h3>
            <p>Los datos personales recopilados a través de los cuestionarios de la NOM-035 serán utilizados exclusivamente con fines estadísticos para medir la situación laboral en México, basados en las herramientas proporcionadas por la Norma Oficial Mexicana NOM-035-STPS-2018. No pretendemos vender ni compartir los datos a terceros ni internacionalmente.</p>
            <h3>Cookies y Tecnologías Similares:</h3>
            <p>El cuestionario no utiliza cookies propias. Solamente las del navegador de cada usuario. En este momento, los usuarios podrán modificar sus cookies desde la configuración del navegador que estén utilizando.</p>
            <h3>Derechos de los Usuarios:</h3>
            <p>Los usuarios tienen derechos sobre sus datos personales, incluyendo el acceso, rectificación, cancelación y oposición. Para ejercer estos derechos, los usuarios pueden [proporcionar instrucciones para ejercer estos derechos, por ejemplo, enviar un correo electrónico a norma.035.mx@gmail.com].</p>
            <h3>Seguridad de los Datos:</h3>
            <p>La entidad implementa medidas de seguridad adecuadas para proteger los datos personales recopilados y prevenir su alteración, pérdida, tratamiento no autorizado o acceso no autorizado.</p>
            <h3>Enlaces a Sitios de Terceros:</h3>
            <p>Los cuestionarios no contarán con enlaces a sitios de terceros.</p>
            <h3>Consentimiento:</h3>
            <p>El consentimiento se obtiene mediante una casilla verificadora, indicando que el usuario acepta los términos y condiciones de esta Política de Privacidad.</p>
            <h3>Cambios en la Política:</h3>
            <p>La entidad se reserva el derecho de modificar esta Política en cualquier momento, y los cambios serán comunicados a los usuarios a través de correo electrónico.</p>
            <h3>Información Adicional:</h3>
            <p>Este programa tiene como objetivo aumentar la conciencia de los trabajadores mexicanos sobre factores que puedan causar estrés, ansiedad, problemas de sueño y adaptación en sus centros de trabajo, de acuerdo con la Norma Oficial Mexicana NOM-035-STPS-2018.</p>
            <div className="box-boton">
            <button onClick={aceptar}>Aceptar</button>
            </div>
        </div>
        </div>
    )
}

















