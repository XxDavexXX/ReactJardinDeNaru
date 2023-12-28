import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'; 

const CuartoSemestreList = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/cursos/')
            .then(response => {
                const cursosSemestre4 = response.data.filter(curso => curso.semestre === 4);
                setCursos(cursosSemestre4);
            })
            .catch(error => console.error('Error fetching cursos', error));
    };

    return (
        <div className="container mt-4">
            <div class="row gx-4 gx-lg-5">

                {/* // Carte de Curso */}
                {cursos.map(curso => (
                <div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">{curso.titulo}</h2>
                            <p class="card-text">{curso.descripcion}</p>
                            <i>Semestre Num. {curso.semestre}</i>
                        </div>
                        
                    </div>
                </div>
                ))}

                {/* // */}
            </div>
            <footer class="py-5 bg-dark">
                <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
            </footer>
        </div>
    );
};

export default CuartoSemestreList;
