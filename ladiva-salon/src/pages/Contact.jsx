import { Container, Row, Col, Form } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <section className="bg-theme-secondary py-5 text-center">
        <Container className="py-4">
          <div className="banner-content">
            <h1 className="fw-bold text-dark" style={{fontFamily: 'var(--title-font)', fontSize: '3rem'}}>
              Connect <span>With Us</span>
            </h1>
            <p className="text-muted m-0">Secure an appointment or connect with our service coordination desk</p>
          </div>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="p-4 rounded h-100 shadow-sm" style={{backgroundColor: 'var(--bg-secondary-color, #fdf8f5)', border: '1px solid #eee'}}>
                <h3 className="fw-bold mb-4" style={{fontFamily:'var(--title-font)', color: 'var(--turnery-color)'}}>Lounge Information</h3>
                <p className="text-muted mb-4">Feel free to step in during operating slots. For complex custom designs, we highly suggest calling our booking desk ahead of time.</p>
                
                <div className="mb-4">
                  <h6 className="fw-bold m-0 text-dark mb-1">Lounge Location:</h6>
                  <span className="text-muted small">104 Luxury Ridge Suite B, New York, NY</span>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold m-0 text-dark mb-1">Direct Voice Desk:</h6>
                  <span className="text-muted small">+1 (555) 392-0192</span>
                </div>
                <div>
                  <h6 className="fw-bold m-0 text-dark mb-1">Lounge Operations:</h6>
                  <span className="text-muted small">Mon - Sat: 9:00 AM - 7:30 PM <br/>Sunday: Closed</span>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="p-4 border rounded shadow-sm bg-white">
                <h3 className="fw-bold mb-4" style={{fontFamily:'var(--title-font)'}}>Send a Message</h3>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" className="rounded-0" required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@domain.com" className="rounded-0" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted">Message Detail</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Describe your appointment request..." className="rounded-0" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <button type="submit" className="btn btn-turnery w-100 py-2 text-uppercase tracking-wider fw-bold">Transmit Message</button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}