import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import TelefonoImg from './../imgs/telefono.png';
import MapaImg from './../imgs/mapa.png';
import logoHomeNaru2 from './../imgs/logoHomeNaru2.png';
import BuscarImg from './../imgs/buscar.png';
import './../css/NavBar.css'

function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div>
            <div class="call_to_action">
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
            <nav className="navbar">
                <div className="content_logo_navbar">
                    <img className="img_logo" src={logoHomeNaru2} alt="Logo de El Jardín de Naru" />
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/' ? 'active' : ''}`} to="/">Inicio</Link>
                        </li>
                        <li class="navbar-item"><a class="navbar-list" href="#">Comprar</a></li>
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/nosotros' ? 'active' : ''}`} to="/nosotros">Nosotros</Link>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-list" href="#">Tipo de Macetas</a>
                        </li>
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
        </div>
    );
}

export default Navbar;
