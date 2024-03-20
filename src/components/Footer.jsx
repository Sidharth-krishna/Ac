import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div class="container-xxl-py-5">
      <section>
        <footer class="text-center text-lg-start bg-white text-dark">
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fa-brands fa-stack-overflow fa-2x"></i> A One Air Conditioner
                  </h6>
                  <small>
                   Authorized Exclusive Sales & Service Dealer for M/S. Johnson Controls -HITACHI Air Conditioning India Ltd (Air-conditioning Divn.). We at Aoneairconditioner, Cochin (corporate office) Branch in Kazhzkuttam, Trivandrum we take utmost pleasure in introducing Our Company was Formed in The Year of 2011. 
                  </small>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Our Services</h6>
                  <p>
                  24/7 Service calls
                  </p>
                  <p>
                    Complete servicing & Maintaince
                  </p>
                  <p>
                    Design,Supply & Installation
                  </p>
                  
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                  <Link to={'/Reviews'} style={{textDecoration:'none',color:"black"}}>Reviews
                  </Link><br></br>
                  <br></br>

                  <Link to={'/Blog'} style={{textDecoration:'none',color:"black"}}>Blogs</Link><br></br><br></br>

                  <Link to={'/Services'} style={{textDecoration:'none',color:"black"}}>Services</Link>

                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i class="fas fa-home me-3 text-secondary"></i> No-24/447C, 1st Floor,
Near Municipal Town Hall, South Kalamssery, Cochin,
Kerala-682034.
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    sales@aoneairconditioner.com                  </p>
                  <p>
                    <i class="fas fa-phone me-3 text-secondary"></i>  +91 99477 99000, +91 86060 61112,
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> +91 484 2532321
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            class="text-center p-4 bg-dark text-white"
          >
            © 2024 Copyright :
            <a class="text-reset fw-bold text-decoration-none" href="/"
              >A One Air Conditioner</a
            >
            <a href="/" class="text-reset" >   
            
            <a href="/" class="text-reset">
              
            <Link to={'/Home'} style={{textDecoration:'none',color:"black"}}></Link><i class="fa-solid fa-arrow-up fa-bounce float-end fa-2x  " style={{color:"#33ccff"}}></i>
            </a>

            </a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer