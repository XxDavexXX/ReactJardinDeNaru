import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import TelefonoImg from './../imgs/telefono.png';
import MapaImg from './../imgs/mapa.png';
import logoHomeNaru2 from './../imgs/logoHomeNaru2.png';
import BuscarImg from './../imgs/buscar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../css/NavBar.css'

function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="contendor_todos_navbars">
            <div class="call_to_action">

                {/* Responsive 1150 px */}

                <div className="responsive_content_nums">
                    <div className="responsive_content_nums_div">
                        <div class="responsive_content_num_dos">
                            <div>I</div>
                        </div>
                        <div class="responsive_content_num">
                            <img class="img_telefono" src={TelefonoImg} alt="Icon de Telefono" />
                            <div>(+51) 903 - 010 - 882 / (+01 - 497 - 1991)</div>
                        </div>
                    </div>
                    <div className="responsive_content_nums_div">
                        <div class="responsive_content_num_dos">
                            <div>I</div>
                        </div>
                        <div class="responsive_content_num_tres">
                            <img class="img_telefono" src={MapaImg} alt="Icon de marcador de maps" />
                            <div>El Cuadro, Chaclacayo, Lima - Perú</div>
                        </div>
                    </div>
                </div>

                {/* Responsive 1150 px */}

                <div class="content_num">
                    <img class="img_telefono" src={TelefonoImg} alt="Icon de Telefono" />
                    <div>(+51) 903 - 010 - 882 / (+01 - 497 - 1991)</div>
                </div>
                <div class="content_num_dos">
                    <div>I</div>
                </div>
                <div class="content_num_tres">
                    <img class="img_telefono" src={MapaImg} alt="Icon de marcador de maps" />
                    <div>El Cuadro, Chaclacayo, Lima - Perú</div>
                </div>
                <div class="content_num_dos">
                    <div>I</div>
                </div>

                <div class="content_num_cuatro div_cuatro_uno">
                    <button class="btn">
                        <div class="wrapper">
                            <div class="text">Registrarse </div>

                            <div class="flower flower1">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower2">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower3">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower4">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower5">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower6">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="content_num_cuatro">
                    <button class="btn">
                        <div class="wrapper">
                            <div class="text">Login </div>

                            <div class="flower flower1">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower2">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower3">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower4">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower5">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                            <div class="flower flower6">
                                <div class="petal one"></div>
                                <div class="petal two"></div>
                                <div class="petal three"></div>
                                <div class="petal four"></div>
                            </div>
                        </div>
                    </button>
                </div>


            </div>

            {/* Responsive 780 px */}

            <nav class="navbar responsive_siete_ochenta_navbar bg-body-tertiary fixed-top">

                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="content_num_cuatro div_cuatro_uno">
                        <button class="btn">
                            <div class="wrapper">
                                <div class="text">Registrarse </div>

                                <div class="flower flower1">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                                <div class="flower flower2">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                                <div class="flower flower3">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                                <div class="flower flower4">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                                <div class="flower flower5">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                                <div class="flower flower6">
                                    <div class="petal one"></div>
                                    <div class="petal two"></div>
                                    <div class="petal three"></div>
                                    <div class="petal four"></div>
                                </div>
                            </div>
                        </button>
                    </div>


                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close justify-content-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 contenedor_ul_siete_ochenta">
                                <li class="nav-item">
                                    <a class="nav-link active active_link_this" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Comprar plantas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Nosotros</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="#">Comprar macetas</a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Preguntas frecuentes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Eventos</a>
                                </li>
                            </ul>

                            <div class="content_num_cuatro_responsive_siete_ochenta justify-content-center flex-grow-1 pe-3">
                                <button class="btn btn_flores_log">
                                    <div class="wrapper">
                                        <div class="text">Login </div>

                                        <div class="flower flower1">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                        <div class="flower flower2">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                        <div class="flower flower3">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                        <div class="flower flower4">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                        <div class="flower flower5">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                        <div class="flower flower6">
                                            <div class="petal one"></div>
                                            <div class="petal two"></div>
                                            <div class="petal three"></div>
                                            <div class="petal four"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </nav>


            {/* Responsive 780 px */}

            <nav className="navbar_div_blanco">
                <div className="content_logo_navbar">
                    <img className="img_logo" src={logoHomeNaru2} alt="Logo de El Jardín de Naru" />
                    <ul className="navbar-items ul_normal_inicio_completo">
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/' ? 'active' : ''}`} to="/">Inicio</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/comprar_plantas' ? 'active' : ''}`} to="/comprar_plantas">Comprar plantas</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/nosotros' ? 'active' : ''}`} to="/nosotros">Nosotros</Link>
                        </li>
                        {/* <li class="navbar-item">
                            <a class="navbar-list" href="#">Comprar macetas</a>
                        </li> */}
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/preguntas-frecuentes' ? 'active' : ''}`} to="/preguntas-frecuentes">Preguntas frecuentes</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/eventos' ? 'active' : ''}`} to="/eventos">Eventos</Link>
                        </li>
                        {/* <img src={BuscarImg} alt="Buscar" /> */}
                    </ul>
                </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </div>
    );
}

export default Navbar;
