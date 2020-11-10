import React from 'react';
import './styles.css';

import Contact from '../Contact/Contact';

const Footer = () => {

return(
    <>
        <footer class="footer">
            <div class="row">
                <div class="col-12">
                    <h3 class="footer_resume">Quer ficar sabendo <br /> quando lançarmos o site?</h3>
                </div>
                <div class="col-12">
                    <Contact />
                </div>
            </div>

            <div class="container_footer">
                <div class="row">
                    <div class="col-12">
                        <div class="social_footer">
                        <a target="_blank" href="https://www.instagram.com/brasamag/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://twitter.com/brasamag/"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div class="col-12">
                        <p class="copy_footer">
                            &copy; 2020 Brasa Mag. Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
)};


export default Footer