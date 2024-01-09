import React from 'react';
import './../css/Fotter.css'


function Fotter() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=51903010882&text=Hola%20vengo%20de%20la%20web%20Jard%C3%ADn%20de%20Naru%F0%9F%8C%B5%F0%9F%8C%B9%F0%9F%8C%BB%2C%20quisiera%20mayor%20informaci%C3%B3n%20!";

    return (
      <div>
        {/* Fotter */}
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>First links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Second links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href={whatsappUrl} ><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href={whatsappUrl} title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href={whatsappUrl} ><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href={whatsappUrl} ><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a  href={whatsappUrl}><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a  href={whatsappUrl}><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a  href={whatsappUrl} target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href={whatsappUrl}>The Garden of Naru Corporation</a></u>, In Lima - Perú [a nursery wholly owned by Tito Bresiliano Quispe Gandulias.]</p>
                <p className="h6">
                  &copy; All rights reserved by Dave Ryan Santivañez Munguia.
                  <a
                    className="text-green ml-2"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DRCODE
                  </a>
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
  