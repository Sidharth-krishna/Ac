import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl,FormGroup } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  
function Contact() {
  const send = () => toast.info("Thankyou..... !we will respondlater",{
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
  });
 

  return (
    <div>
      <div style={{width:"100%", height:'750px',overflowX:'hidden'}} className='bg-dark'>
        <div className='d-flex justify-content-center align-items-center text-light'>
            <h3 className='mt-4'>Contact Us</h3>
        </div>
        <div className='border border-1 shadow border-light w-100 mt-3'></div>
        <div className='text-light p-3 ms-5 '>
            <h4 className='fw-bolder'>Get in Touch</h4>
        </div>

        <div className="row d-flex text-white p-3 ms-5">
            <div className="col-md-7">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder='message' rows={6} />
                </Form.Group>
            </Form>
            <Row>
                    <Col>
                       <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='text' placeholder='Enter your name'/>
                         </Form.Group>
                       </Form>
                    </Col>
                    <Col>
                    <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='text' placeholder='Email'/>
                         </Form.Group>
                       </Form>
                    </Col>

                    <Col>
                    <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='text' placeholder='Enter Your city'/>
                         </Form.Group>
                       </Form>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Form>
                         <FormGroup className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='email' placeholder='Enter your Number'/>
                         </FormGroup>
                       </Form>
                    </Col>
                </Row>


            </div>
            <div className="col-md-4 flex-column ms-5 text-light">
                <div className='ms-5'>
                    <i class="fa-solid fa-house"></i>
                    <p><span className='fw-bolder'>No-24/447C, 1st Floor, Near Municipal Town Hall, South Kalamssery, Cochin, Kerala-682034.</span> <br />
                    </p>
                </div>
                <div className=" flex-column ms-5">
                   <i class="fa-solid fa-phone"></i>
                   <p><span className='fw-bolder'> +91 99477 99000, +91 86060 61112,</span><br />
                   </p>
                </div>
                <div className="ms-5">
                   <i class="fa-solid fa-envelope"></i>
                   <p><span className='fw-bolder'>sales@aoneairconditioner.com </span><br />
                   Send us your query anytime!</p>
            </div>
            </div>
            
        </div>
        <div className="ms-5 p-3">
            <button onClick={send} className='btn btn-primary rounded ms-3 w-25 p-3'>Send</button>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            
            
        </div>
        
   </div>
    </div>
  )
}

export default Contact