import React from 'react';
import './../css/PreguntasFrecuentes.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import macetas_preguntas_imagen from './../imgs/macetas_preguntas_imagen.jpg'

import Navbar from './NavBar';

import Fotter from './Fotter';


function PreguntasFrecuentes() {
    return (
        <div className="content_nosotros">

            <Navbar />

            <div className="contenedor_foto_preguntas">
                {/* <img className="contenedor_foto_preguntas_img" src={macetas_preguntas_imagen}></img> */}
                <div className="contentPreguntasRespuestas">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    ¿Cuál es el proceso de compra en El Jardín de Naru?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> El proceso es sencillo. Explora nuestro catálogo, selecciona tus plantas y accesorios favoritos, agrégales al carrito y sigue los pasos para completar la compra de forma segura.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cuáles son las opciones de pago disponibles?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Aceptamos diversas opciones de pago, incluyendo tarjetas de crédito, débito y otros métodos seguros en línea.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Cómo se realizan los envíos y cuánto tiempo tardan?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Nuestros envíos son rápidos y seguros. El tiempo de entrega depende de tu ubicación, pero trabajamos para que recibas tu pedido en el menor tiempo posible.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    ¿Ofrecen garantía en las plantas?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong>  Sí, garantizamos la calidad de nuestras plantas. Si experimentas algún problema, contáctanos y estaremos encantados de ayudarte.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    ¿Puedo devolver o cambiar una planta?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Sí, ofrecemos opciones de devolución y cambio. Consulta nuestra política de devoluciones para obtener más detalles.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    ¿Cómo cuidar adecuadamente mis nuevas plantas?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Proporcionamos información detallada sobre el cuidado de cada planta en nuestro sitio web. Además, incluimos guías de cuidado con cada pedido.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    ¿Son seguras las transacciones en línea en El Jardín de Naru?
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Absolutamente. Utilizamos métodos de pago seguros y encriptación para garantizar la seguridad de tus transacciones.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    ¿Tienen asesoramiento para la elección de plantas según mi espacio y condiciones de luz?
                                </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Sí, nuestro equipo está disponible para asesorarte en la elección de plantas que se adapten a tus condiciones específicas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    ¿Realizan envíos internacionales?
                                </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Actualmente, nuestro servicio de envío se limita a determinadas ubicaciones. Consulta nuestra página de envíos para obtener más información.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    ¿Cuál es la política de privacidad de El Jardín de Naru?
                                </button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Respetamos tu privacidad. Consulta nuestra política de privacidad para conocer cómo manejamos la información del cliente.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    ¿Hay descuentos disponibles para compras al por mayor?
                                </button>
                            </h2>
                            <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Sí, ofrecemos descuentos para compras al por mayor. Ponte en contacto con nuestro equipo de ventas para obtener más detalles.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    ¿Qué tipo de accesorios ofrecen además de plantas?
                                </button>
                            </h2>
                            <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Además de una variedad de plantas, ofrecemos macetas decorativas, soportes y otros accesorios para complementar tu experiencia botánica.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThrerten" aria-expanded="false" aria-controls="collapseThrerten">
                                    ¿Cómo puedo rastrear mi pedido?
                                </button>
                            </h2>
                            <div id="collapseThrerten" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Proporcionamos información de seguimiento para que puedas estar al tanto del estado de tu pedido en todo momento.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourTeen" aria-expanded="false" aria-controls="collapseFourTeen">
                                    ¿Puedo programar la entrega de mi pedido en una fecha específica?
                                </button>
                            </h2>
                            <div id="collapseFourTeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong>Actualmente, la programación de entregas específicas no está disponible, pero trabajamos para ofrecer más opciones en el futuro.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveTeen" aria-expanded="false" aria-controls="collapseFiveTeen">
                                    ¿Cómo puedo ponerme en contacto con el servicio de atención al cliente?
                                </button>
                            </h2>
                            <div id="collapseFiveTeen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Respuesta: </strong> Estamos aquí para ayudarte. Puedes ponerte en contacto con nuestro servicio de atención al cliente a través de nuestro formulario en línea o por correo electrónico. ¡Estamos listos para responder tus preguntas!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Fotter />

        </div>
    );
}

export default PreguntasFrecuentes;
