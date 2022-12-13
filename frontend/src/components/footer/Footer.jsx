import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container-footer-all">

          <div class="container-body">

            <div class="colum1">
              <h1>Local Deals</h1>

              <p>Esta compañia se dedica a la venta de software integrado con un
                conjunto de cosas que no se lo que estoy escribiendo, este
                texto es solo para llenara informacion en el cuadro de informacion
                de la compañia.</p>

            </div>

            <div class="colum2">

            </div>

            <div class="colum3">

              <h1>Information Contact</h1>

              <div class="row2">
                <label>333 Moo 1,
                  Tha Sut,
                  Amphoe, Mueang,
                  Chiang Rai,
                  Mae Fah Luang University
                </label>
              </div>

              <div class="row2">
                <label>+66-27616687</label>
              </div>

              <div class="row2">

                <label>oaksk6820@gmail.com</label>
              </div>

            </div>

          </div>

        </div>

        <div class="container-footer">
          <div class="footer">
            <div class="copyright">
              © 2022 All right reserved | <Link to={"/"}>Oaksk</Link>
            </div>

            <div class="information">
              <Link to={"/"}>Company Information</Link> | <Link to={"/"}>Privacy Policy</Link> | <Link to={"/"}>Terms and Condition</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Footer
