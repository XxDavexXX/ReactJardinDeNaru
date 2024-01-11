import React, { useState, useEffect, useRef } from 'react';
import './../css/ComprarPlantas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ic_cuadricula from './../imgs/ic_cuadricula.png'
import ic_menu_lateral from './../imgs/ic_menu_lateral.png'
import ic_ojo from './../imgs/ic_ojo.png'
import ic_carrito_compras from './../imgs/ic_carrito_compras.png'
import Navbar from './NavBar';
import Fotter from './Fotter';


function MyVerticallyCenteredModal(props) {

    if (!props.planta) {
        return null; // O puedes manejar este caso de otra manera según tus necesidades
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="darle_radio_modal"
        >
            <Modal.Header className="header_modal_ojo_planta" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="titulo_modal_ojo_planta">{props.planta.nombre}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-content contenedor_img_desc_modal">
                    <div className="modal-img-container">
                        <img
                            src={`${process.env.PUBLIC_URL}/${props.planta.imgplanta}`}
                            alt={props.planta.nombre}
                            className="modal-img"
                        />
                    </div>
                    <div className="modal-description">
                        <h4>Descripción</h4>
                        <p>
                            {props.planta.descripcion}
                        </p>
                        <h4>Precio</h4>
                        <p>
                            S/. {props.planta.precio}
                        </p>
                        <h4>Stock</h4>
                        <p>
                            {props.planta.stock}
                        </p>
                        <h4>Categoria</h4>
                        <p className="categoria_p">
                            {props.planta.categoria}
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="fotter_ojo_planta">
                <Button className="btn_close_modal_ojo" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

function ComprarPlantas() {

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(500);
    const priceGap = 1;

    const rangeInputMin = useRef();
    const rangeInputMax = useRef();
    const range = useRef();

    const [minVal2, setMinVal2] = useState(0);
    const [maxVal2, setMaxVal2] = useState(500);
    const priceGap2 = 1;

    const rangeInputMin2 = useRef();
    const rangeInputMax2 = useRef();
    const range2 = useRef();

    const [modalShow, setModalShow] = React.useState(false);

    const [plantas, setPlantas] = useState([]);
    const [selectedPlanta, setSelectedPlanta] = useState(null);

    useEffect(() => {
        // Aquí deberías tener una función que obtiene los datos de la API
        // Puedes ajustar la URL según la estructura de tu API
        const fetchPlantasData = async () => {
            try {
                const response = await fetch('https://eljardindenaru.onrender.com/');
                const data = await response.json();
                setPlantas(data);
            } catch (error) {
                console.error('Error fetching plantas:', error);
            }
        };

        fetchPlantasData();
    }, []);



    useEffect(() => {
        range.current.style.left = ((minVal / rangeInputMin.current.max) * 100) + "%";
        range.current.style.right = 100 - ((maxVal / rangeInputMax.current.max) * 100) + "%";


    }, [minVal, maxVal]);

    useEffect(() => {
        range2.current.style.left = ((minVal2 / rangeInputMin2.current.max) * 100) + "%";
        range2.current.style.right = 100 - ((maxVal2 / rangeInputMax2.current.max) * 100) + "%";


    }, [minVal2, maxVal2]);

    const handleMinChange2 = (e) => {
        let val2 = parseInt(e.target.value);
        if ((maxVal2 - val2) < priceGap2) {
            val2 = maxVal2 - priceGap2;
        }
        setMinVal2(val2);
    };

    const handleMaxChange2 = (e) => {
        let val2 = parseInt(e.target.value);
        if ((val2 - minVal2) < priceGap2) {
            val2 = minVal2 + priceGap2;
        }
        setMaxVal2(val2);
    };
    const handleMinChange = (e) => {
        let val = parseInt(e.target.value);
        if ((maxVal - val) < priceGap) {
            val = maxVal - priceGap;
        }
        setMinVal(val);
    };

    const handleMaxChange = (e) => {
        let val = parseInt(e.target.value);
        if ((val - minVal) < priceGap) {
            val = minVal + priceGap;
        }
        setMaxVal(val);
    };


    const handlePlantaClick = (planta) => {
        setSelectedPlanta(planta);
        setModalShow(true);
    };

    return (
        <div className="contenedor_compra_plantas">
            <div className="contenedor_tag_navbar">
                <Navbar></Navbar>
            </div>
            <div className="contenedor_filtros_secciones">
                <div className="contenedor_titulo_filtros">
                    <div className="contenedor_titulo_filtros_content">
                        <div className="titulo_filtros">Filtrar</div>
                        <div className="contenedor_filtros">

                            {/* ///// */}

                            <div className="responsive_movile">

                                <Accordion className="acordion_filtros_movile" defaultActiveKey="">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Precio</Accordion.Header>
                                        <Accordion.Body>
                                            <p className="contenedor_filtros_precio_subtitulo">Usa el range o digite el min y max precio</p>
                                            <div className="price-input">
                                                <div className="field">
                                                    <span>Min S/.</span>
                                                    <input type="number" className="input-min" value={minVal2} onChange={handleMinChange} />
                                                </div>
                                                <div className="separator">-</div>
                                                <div className="field">
                                                    <span>Max S/.</span>
                                                    <input type="number" className="input-max" value={maxVal2} onChange={handleMaxChange} />
                                                </div>
                                            </div>
                                            <div className="slider">
                                                <div className="progress" ref={range2}></div>
                                            </div>
                                            <div className="range-input">
                                                <input type="range" className="range-min" min="0" max="500" value={minVal2} step="1" onChange={handleMinChange2} ref={rangeInputMin2} />
                                                <input type="range" className="range-max" min="0" max="500" value={maxVal2} step="1" onChange={handleMaxChange2} ref={rangeInputMax2} />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Tipos Plantas</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Echeveria</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Cactus de San Pedro</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Serpiente de la Madre</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Cactus Bola de Nieve</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Aloe Vera</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Crasas Haworthia</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Cactus Orejas de Conejo</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Rosa del Desierto</div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Cactus Barril </div>
                                            </div>
                                            <div className="contenedor_filtros_tipos_plantas_tipos">
                                                <input className="checkbox_tipo_planta" type="checkbox"></input>
                                                <div className="nombre_tipo_planta">Cactus de Navidad</div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Borrar Filtros</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="contenedor_filtros_borrar">
                                                <button className="btn_borrar_filtros">
                                                    <span className="shadow"></span>
                                                    <span className="edge"></span>
                                                    <span className="front text"> X
                                                    </span>
                                                </button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="responsive_pc">
                                <div className="contenedor_filtros_precio">
                                    <div className="contenedor_filtros_precio_titulo">Precio</div>
                                    <p className="contenedor_filtros_precio_subtitulo">Usa el range o digite el min y max precio</p>
                                    <div className="price-input">
                                        <div className="field">
                                            <span>Min S/.</span>
                                            <input type="number" className="input-min" value={minVal} onChange={handleMinChange} />
                                        </div>
                                        <div className="separator">-</div>
                                        <div className="field">
                                            <span>Max S/.</span>
                                            <input type="number" className="input-max" value={maxVal} onChange={handleMaxChange} />
                                        </div>
                                    </div>
                                    <div className="slider">
                                        <div className="progress" ref={range}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="500" value={minVal} step="1" onChange={handleMinChange} ref={rangeInputMin} />
                                        <input type="range" className="range-max" min="0" max="500" value={maxVal} step="1" onChange={handleMaxChange} ref={rangeInputMax} />
                                    </div>
                                </div>

                                <div className="hr_personal"></div>

                                <div className="contenedor_filtros_tipos_plantas">
                                    <div className="contenedor_filtros_tipos_plantas_titulo">Tipos plantas</div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Echeveria</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Cactus de San Pedro</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Serpiente de la Madre</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Cactus Bola de Nieve</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Aloe Vera</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Crasas Haworthia</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Cactus Orejas de Conejo</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Rosa del Desierto</div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Cactus Barril </div>
                                    </div>
                                    <div className="contenedor_filtros_tipos_plantas_tipos">
                                        <input className="checkbox_tipo_planta" type="checkbox"></input>
                                        <div className="nombre_tipo_planta">Cactus de Navidad</div>
                                    </div>
                                </div>

                                <div className="hr_personal"></div>

                                <div className="contenedor_filtros_borrar">
                                    <div className="contenedor_filtros_borrar_seccion">Borrar Filtros</div>
                                    <button className="btn_borrar_filtros">
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front text"> X
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor_secciones">
                    <div className="contenedor_head_plantas_secciones">
                        <div className="content_icons_shop_plant_views">
                            <img className="views_plants_icons" alt="views_plants_icons" src={ic_cuadricula}></img>
                            <img className="views_plants_icons  icon2_detail_view" alt="icon2_detail_view" src={ic_menu_lateral}></img>
                        </div>
                        <div className="content_icons_shop_plant_filter">
                            <DropdownButton style={{ background: 'transparent !important' }} id="dropdown-item-button" className="" title="Ordernar por">
                                <Dropdown.ItemText>Ordernar por</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>

                    <div className="contenedor_body_plantas_secciones">

                        {plantas.map((planta) => (
                            <div className="producto_planta" key={planta.id} onClick={() => handlePlantaClick(planta)}>
                                <img className="imagen_producto" src={`${process.env.PUBLIC_URL}/${planta.imgplanta}`} alt={planta.nombre} />


                                <div className="comprar_planta_cuadricula">
                                    <h2>{planta.nombre}</h2>
                                    <button className="btn_comprar_planta">Comprar</button>
                                </div>
                                <p>S/. {planta.precio}</p>
                                <div className="botones_superior">
                                    <Button className="botones_superior_btn btn_ojo_ic" variant="primary" onClick={() => handlePlantaClick(planta)}>
                                        <img className="ic_ojo" src={ic_ojo} alt="Ver Detalles" />
                                    </Button>
                                    <Button className="botones_superior_btn btn_ojo_ic" variant="primary" onClick={() => handlePlantaClick(planta)}>
                                        <img className="ic_ojo" src={ic_carrito_compras} alt="Agregar al Carrito" />
                                    </Button>
                                </div>
                            </div>
                        ))}


                    </div>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        planta={selectedPlanta}
                    />

                </div>
            </div>
            <Fotter />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </div>
    );
}

export default ComprarPlantas;
