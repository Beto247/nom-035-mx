import { Text } from "@react-pdf/renderer"

export const niveles = {
                nivelMuyAlto : ['red', 'Muy Alto'],

                nivelAlto : ['orange', 'Alto'],

                nivelMedio :['yellow', 'Medio'],

                nivelBajo : ['lime', 'Bajo'],

                nivelNulo : ['deepskyblue', 'Nulo']}

export const acciones = {
                accionesAlto :  <>
                                    <Text> • Análisis de cada Categoría y Dominio</Text>
                                    <Text> • Programa de Intervención</Text>
                                    <Text> • Campañas de Sensibilización</Text>
                                    <Text> • Revisar Política de Riesgos Psicosociales</Text>
                                    <Text> • Revisar Programas de Prevención</Text>
                                    <Text> • Promoción de un Entorno Organizacional Saludable</Text>
                                    <Text> • Prevención de Violencia Laboral</Text>
                                    <Text> • Reforzar Aplicación y Difusión</Text>
                                    </>,
                    accionesMedio : <>
                                    <Text> • Programa de Intervención</Text>            
                                    <Text> • Revisar Política de Riesgos Psicosociales</Text>
                                    <Text> • Revisar Programas de Prevención</Text>
                                    <Text> • Promoción de un Entorno Organizacional Saludable</Text>
                                    <Text> • Prevención de Violencia Laboral</Text>
                                    <Text> • Reforzar Aplicación y Difusión</Text>
                                    </>,
                    accionesBajo :  <>
                                    <Text> • Mayor difusión de la Política de Riesgos Psicosociales</Text>
                                    <Text> • Mayor difusión de los Programas de Prevención</Text>
                                    <Text> • Mayor difusión de Promoción de un Entorno Organizacional Saludable</Text>
                                    <Text> • Mayor difusión de la Prevención de Violencia Laboral</Text>
                                    </>,
                    accionesNulo :  <Text>"El riesgo resulta despreciable por lo que no se requieren medidas adicionales."</Text>} 