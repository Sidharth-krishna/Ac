import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Reviews() {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div class="container-xxl-py-5">
<section id="review">
                <h1 class="text-center  text-dark mt-3" data-aos="fade-up"
     data-aos-duration="2000"  > What Our Cli<span className='text-primary'>ents Says...</span> </h1>
                <p class="text-success text-center">
                    
                </p>
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card">
                                <div class="card-body py-4 mt-2" data-aos="flip-down">
                                    <div class="d-flex justify-content-center mb-4">

                                        <img className='imgs'data-aos="flip-right"
                                            src="https://images.unsplash.com/photo-1574149895874-6bda366dd1c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGxlc3xlbnwwfHwwfHx8MA%3D%3D"
                                            class="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                            alt='no'
                                        />
                                    </div>
                                    <h5 class="font-weight-bold">Tom</h5>
                                    <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star-half-alt fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i>Great service as this was2nd repair with A One Air Conditioner,lent communication & excellent, He was very thorough and explained everything in detail. He did an excellent job. Thank Air Care.


                                        <i class="fas fa-quote-right pe-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0" >
                            <div class="card">
                                <div class="card-body py-4 mt-2" data-aos="flip-down">
                                    <div class="d-flex justify-content-center mb-4">
                                        <img className='imgs' data-aos="flip-right"
                                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww"
                                            class="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                            alt='no'
                                        />
                                    </div>
                                    <h5 class="font-weight-bold">Alexa</h5>
                                    <h6 class="font-weight-bold my-3">Photographer</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i> amazingly useful and made an extraordinary showing with regards to on our support work. The specialist exceptionally educated about our a/c framework.
                                        <i class="fas fa-quote-right pe-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-0" >
                            <div class="card">
                                <div class="card-body py-4 mt-2" data-aos="flip-down">
                                    <div class="d-flex justify-content-center mb-4">
                                        <img className='imgs' data-aos="flip-right"
                                            src="https://images.unsplash.com/photo-1629125972679-3ce2e5567116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D "
                                            class="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                            alt='no'
                                        />
                                    </div>
                                    <h5 class="font-weight-bold">John</h5>
                                    <h6 class="font-weight-bold my-3">Front-end Developer</h6>
                                    <ul class="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star fa-sm text-info"></i>
                                        </li>
                                        <li>
                                            <i class="far fa-star fa-sm text-info"></i>
                                        </li>
                                    </ul>
                                    <p class="mb-2">
                                        <i class="fas fa-quote-left pe-2"></i>  I feel Really great.    Repaired my iPhone 6s Plus through thorough examination, kept me updated at all times. did an excellent job. Thankyou A One Air Conditioner.
                                        <i class="fas fa-quote-right pe-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Reviews