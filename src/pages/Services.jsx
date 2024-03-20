import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    
    <div class="container-xxl-py-5" id="services">
      <div class="container">
        <div class="text">
          <h5 class="service-title bg-white text-center text-dark px-3 fs-3 mt-5" data-aos="zoom-in-up"><u> SERV<span className='text-primary'>ICES</span> </u></h5>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 " data-aos="zoom-in-right">
          <div class="service-list pt-3">
            <div class="p-4">
              <h5 style={{borderBottom: "4px solid primary", paddingBottom: "1px"}}
                    class="m-3">A/C Installation</h5>
              <p>We offer high quality installation of residential and commercial air conditioning..</p>
            </div>
          </div>
        </div>
  
        <div class="col-lg-3 col-sm-6 ">
          <div class="service-list pt-3" data-aos="zoom-in-left">
            <div class="p-4">
              <h5 style={{borderBottom: "4px solid primary", paddingBottom: "1px"}}
                    class="m-3">Maintaince & Repair</h5>
              <p>We provide a full range of repairing and maintenance of air conditioning systems...</p>
            </div>
          </div>
        </div>
  
        <div class="col-lg-3 col-sm-6 "data-aos="zoom-in-right">
          <div class="service-list pt-3">
            <div class="p-4">
              <h5 style={{borderBottom: "4px solid primary", paddingBottom: "1px"}}
                    class="m-3">Heating & Cooling </h5>
              <p>Up to 500 TR Ductable and Package Air-conditioners and VRF Air-conditioning Technology with Heating and Cooling range Up to 500 HP.</p>
            </div>
          </div>
        </div>
  
        <div class="col-lg-3 col-sm-6 " data-aos="zoom-in-left">
          <div class="service-list pt-3">
            <div class="p-4">
              <h5 style={{borderBottom: "4px solid primary", paddingBottom: "1px"}}
                    class="m-3">Energy Efficency</h5>
              <p></p>
            </div>
          </div>Annoying consequences or one who avoid pain that produces no resultant pleasure...
        </div>
  
      </div>
     
  
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 " data-aos="zoom-in-right">
          <div class="service-list pt-3">
            <div class="p-4">
\              <h5 style={{borderBottom: "4px solid primary", paddingBottom: "1px"}}
                    class="m-3">Industries Served
</h5>

              <ul> SHOPING MALL
 SOFTWARE,
 INSTITUTE,
 HOSPITAL HOTEL,
 AUDITORIUM,
 APARTMENTS,</ul>
            </div>
          </div>
        </div>
  
        
  
        
  
        
  
      </div>
      </div>
  )
  }

export default Services