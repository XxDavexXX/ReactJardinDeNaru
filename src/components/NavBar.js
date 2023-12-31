import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import TelefonoImg from './../imgs/telefono.png';
import MapaImg from './../imgs/mapa.png';
import logoHomeNaru2 from './../imgs/logoHomeNaru2.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../css/NavBar.css'

function Navbar() {
    const location = useLocation();
    const { pathname } = location;

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    
        // Obtén la referencia al elemento body
        const body = document.querySelector('body');
    
        if (!menuOpen) {
            // Si el menú se abre, agrega estilos al body
            body.style.overflow = 'hidden';
            body.style.paddingRight = '19px';
        } else {
            // Si el menú se cierra, restaura los estilos originales del body
            body.style.overflow = 'auto';
            body.style.paddingRight = '0';
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);

        // Restaura los estilos originales del body al hacer clic en un enlace
        const body = document.querySelector('body');
        body.style.overflow = 'visible';
        body.style.paddingRight = '0';
    };

    return (
        <div className="contendor_todos_navbars">
            <div className="call_to_action">

                {/* Responsive 1150 px */}

                <div className="responsive_content_nums">
                    <div className="responsive_content_nums_div">
                        <div className="responsive_content_num_dos">
                            <div>I</div>
                        </div>
                        <div className="responsive_content_num">
                            <img className="img_telefono" src={TelefonoImg} alt="Icon de Telefono" />
                            <div>(+51) 903 - 010 - 882 / (+01 - 497 - 1991)</div>
                        </div>
                    </div>
                    <div className="responsive_content_nums_div">
                        <div className="responsive_content_num_dos">
                            <div>I</div>
                        </div>
                        <div className="responsive_content_num_tres">
                            <img className="img_telefono" src={MapaImg} alt="Icon de marcador de maps" />
                            <div>El Cuadro, Chaclacayo, Lima - Perú</div>
                        </div>
                    </div>
                </div>

                {/* Responsive 1150 px */}

                <div className="content_num">
                    <img className="img_telefono" src={TelefonoImg} alt="Icon de Telefono" />
                    <div>(+51) 903 - 010 - 882 / (+01 - 497 - 1991)</div>
                </div>
                <div className="content_num_dos">
                    <div>I</div>
                </div>
                <div className="content_num_tres">
                    <img className="img_telefono" src={MapaImg} alt="Icon de marcador de maps" />
                    <div>El Cuadro, Chaclacayo, Lima - Perú</div>
                </div>
                <div className="content_num_dos">
                    <div>I</div>
                </div>

                <div className="content_num_cuatro div_cuatro_uno">
                    <button className="btn">
                        <div className="wrapper">
                            <div className="text">Registrarse </div>

                            <div className="flower flower1">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower2">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower3">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower4">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower5">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower6">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="content_num_cuatro">
                    <button className="btn">
                        <div className="wrapper">
                            <div className="text">Login </div>

                            <div className="flower flower1">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower2">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower3">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower4">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower5">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                            <div className="flower flower6">
                                <div className="petal one"></div>
                                <div className="petal two"></div>
                                <div className="petal three"></div>
                                <div className="petal four"></div>
                            </div>
                        </div>
                    </button>
                </div>


            </div>

            {/* Responsive 780 px */}

            <nav className="navbar responsive_siete_ochenta_navbar bg-body-tertiary fixed-top">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="content_num_cuatro div_cuatro_uno">
                        <button className="btn">
                            <div className="wrapper">
                                <div className="text">Registrarse </div>

                                <div className="flower flower1">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                                <div className="flower flower2">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                                <div className="flower flower3">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                                <div className="flower flower4">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                                <div className="flower flower5">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                                <div className="flower flower6">
                                    <div className="petal one"></div>
                                    <div className="petal two"></div>
                                    <div className="petal three"></div>
                                    <div className="petal four"></div>
                                </div>
                            </div>
                        </button>
                    </div>


                    <div className={`offcanvas offcanvas-end${menuOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close justify-content-end" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleToggleMenu}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 contenedor_ul_siete_ochenta">

                                <li className="navbar-item">
                                    <Link style={{ width: '60px' }} className={`nav-link a_nav_celular ${pathname === '/' ? 'active active_link_this' : ''}`} to="/" onClick={handleLinkClick}>Inicio</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link style={{ width: '170px' }} className={`nav-link a_nav_celular ${pathname === '/comprar_plantas' ? 'active active_link_this' : ''}`} to="/comprar_plantas" onClick={handleLinkClick}>Comprar plantas</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link style={{ width: '95px' }} className={`nav-link a_nav_celular ${pathname === '/nosotros' ? 'active active_link_this' : ''}`} to="/nosotros" onClick={handleLinkClick}>Nosotros</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link style={{ width: '205px' }} className={`nav-link a_nav_celular ${pathname === '/preguntas-frecuentes' ? 'active active_link_this' : ''}`} to="/preguntas-frecuentes" onClick={handleLinkClick}>Preguntas frecuentes</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link style={{ width: '85px' }} className={`nav-link a_nav_celular ${pathname === '/eventos' ? 'active active_link_this' : ''}`} to="/eventos" onClick={handleLinkClick}>Eventos</Link>
                                </li>
                            </ul>

                            <div className="content_num_cuatro_responsive_siete_ochenta justify-content-center flex-grow-1 pe-3">
                                <button className="btn btn_flores_log">
                                    <div className="wrapper">
                                        <div className="text">Login </div>

                                        <div className="flower flower1">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
                                        </div>
                                        <div className="flower flower2">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
                                        </div>
                                        <div className="flower flower3">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
                                        </div>
                                        <div className="flower flower4">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
                                        </div>
                                        <div className="flower flower5">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
                                        </div>
                                        <div className="flower flower6">
                                            <div className="petal one"></div>
                                            <div className="petal two"></div>
                                            <div className="petal three"></div>
                                            <div className="petal four"></div>
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
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/preguntas-frecuentes' ? 'active' : ''}`} to="/preguntas-frecuentes">Preguntas frecuentes</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className={`navbar-list ${pathname === '/eventos' ? 'active' : ''}`} to="/eventos">Eventos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </div>
    );
}

export default Navbar;
