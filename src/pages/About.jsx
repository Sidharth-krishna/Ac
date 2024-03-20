import React, { useEffect } from 'react'
import img1 from '../img/photo-1581094480465-4e6c25fb4a52.avif'
import Card from 'react-bootstrap/Card';
import img2 from '../img/premium_photo-1679943423706-570c6462f9a4.avif'
import img3 from '../img/premium_photo-1678766818764-406904b56d82.avif'
import img4 from '../img/premium_photo-1664298059861-1560b39fb890.avif'
import Aos from 'aos'
import 'aos/dist/aos.css'



function About() {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    
       <div class="container py-5" id="about">
    <div class="row g-5">
      <div class="col-6">
        <img src={img1} alt="" style={{width:"40rem" , alignItems:"center"}} data-aos="fade-up-right" />
      </div>
      <div class="col-lg-6">
        <h4 class="title bg-white text-start text-primary pe-3" data-aos="fade-up"><u>ABOUT US</u></h4>
        <h3 class="title-intro bg-white text text-start text-primary-emphasis p-1 me-3  fs-2" data-aos="fade-right">Welcome to <span
            class="text-primary fs-2">A One Air Conditioner</span> </h3>
        <p class="text-dark p-3" style={{maxWidth:"550px"}} data-aos="fade-down-right">We would like to introduce ourselves as Authorized Exclusive Sales & Service Dealer for M/S. Johnson Controls -HITACHI Air Conditioning India Ltd (Air-conditioning Divn.). We at Aoneairconditioner, Cochin (corporate office) Branch in Kazhzkuttam, Trivandrum we take utmost pleasure in introducing Our Company was Formed in The Year of 2011. Company as one of the Air-conditioning Company having interest in executing job at the utmost satisfaction of our esteemed customers & clientele. Staff as one of the best technicians available in, all Kerala</p>
        <p class="text-dark p-3" style={{maxWidth:"470px"}} data-aos="fade-down-right">Service Capabilities :
As mentioned above, our team of professional technicians are also available on 24 hours service calls . To offer our clients the best in the service line. This has really made our customers feel very near to us.
</p>
<div> 
</div>   
 </div>      
  <div class="container-xxl-py-1" id="services d-flex ">
    <div class="container">
      <div class="text">
      <h5 class="service-title bg-white text-center text-dark px-3 fs-3" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="300"><u className='underline-primary'>We <span className='text-primary'>Provide...</span> </u> </h5>

      </div>
    </div>
    <div class="row g-4">
      <div class="col-lg-3 col-sm-6 ">
        <div class="service-list pt-3">
          <div class="p-4">
          <Card className='shadow' style={{ width: '300px',height:"100%" }}data-aos="zoom-in-up">
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        
        <Card.Text className=''> 
        We have the capacity to supply and Installation a range of Air-conditioners: Up to 500 TR Ductable and Package Air-conditioners and VRF Air-conditioning Technology with Heating and Cooling range Up to 500 HP.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6 ">
        <div class="service-list pt-3">
          <div class="p-4">
          <Card className='shadow' style={{ width: '300px',height:"100%" }}data-aos="zoom-in-up">
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Text>
        We undertake design, supply, Installation and complete servicing and Maintenance all types of Air-conditioners, and fabrication and Installation of Ventilation systems, etc
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6 ">
        <div class="service-list pt-3">
          <div class="p-4">
          <Card className='shadow' style={{ width: '290px',height:"100%" }} data-aos="zoom-in-up">
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Text>
        anything related to Heating, Ventilation Air Conditioning and Refrigeration. We have a full-fledged workshop with company trained personnel to undertake any kind of air-conditioning problems on a regular basis..
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div>
  </div>
    </div>
  )
}

export default About