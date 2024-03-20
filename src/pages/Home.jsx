import React, { useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import wrk from '../img/workers.avif'
import wrk2 from '../img/workers4.avif'
import wrk3 from '../img/orkers5.avif'
import wrk4 from '../img/wrkers3.avif'
import Aos from 'aos'
import 'aos/dist/aos.css'




function Home() {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div class="container-xxl-py-5">
    <div>
      <section>
        <img
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "fit",
            objectPosition: "0% 79%",
          }}
          src={wrk}
          alt=""
        />
      </section>
      <section className="my-5">
        <h1 className="text-center my-5 text-dark " data-aos="fade-up-right">Welcome to <span className='text-primary'>A One Air Conditioner</span></h1>
        <Row className="container-fluid" data-aos="fade-up-left">
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src={wrk2}
              />
              <Card.Body>
                <Card.Title>AC services </Card.Title>
                <p>Great explore of truth</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src={wrk3}
              />
              <Card.Body>
                <Card.Title>Installation and complete servicing and Maintenance</Card.Title>
                <p> All types of Air-conditioners, and fabrication and Installation of Ventilation systems, etc</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src={wrk4}
              />
              <Card.Body>
                <Card.Title> Heating and Cooling</Card.Title>
                <p>Up to 500 TR Ductable and Package Air-conditioners and VRF Air-conditioning Technology with Heating and Cooling range Up to 500 HP.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
     
    </div></div>
  )
}

export default Home