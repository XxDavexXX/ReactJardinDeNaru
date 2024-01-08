import React from 'react';
import './../css/Fotter.css'


function Fotter() {
    return (
      <div>
        {/* Fotter */}
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>First links</h5>
                <ul className="list-unstyled quick-links">
                  <li><button ><i className="fa fa-angle-double-right"></i>Home</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>About</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>FAQ</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>Get Started</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>Videos</button></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Second links</h5>
                <ul className="list-unstyled quick-links">
                  <li><button ><i className="fa fa-angle-double-right"></i>Home</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>About</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>FAQ</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>Get Started</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>Videos</button></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><button ><i className="fa fa-angle-double-right"></i>Home</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>About</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>FAQ</button></li>
                  <li><button ><i className="fa fa-angle-double-right"></i>Get Started</button></li>
                  <li><button title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</button></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><button ><i className="fa fa-facebook"></i></button></li>
                  <li className="list-inline-item"><button ><i className="fa fa-twitter"></i></button></li>
                  <li className="list-inline-item"><button ><i className="fa fa-instagram"></i></button></li>
                  <li className="list-inline-item"><button ><i className="fa fa-google-plus"></i></button></li>
                  <li className="list-inline-item"><button  target="_blank"><i className="fa fa-envelope"></i></button></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><button>The Garden of Naru Corporation</button></u>, In Lima - Perú [a nursery wholly owned by Tito Bresiliano Quispe Gandulias.]</p>
                <p className="h6">
                  &copy; All rights reserved by Dave Ryan Santivañez Munguia.
                  <button
                    className="text-green ml-2"
                    href="https://www.sunlimetech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SunlimeTech
                  </button>
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Fotter */}
      </div>
    );
  }
  
  export default Fotter;
  