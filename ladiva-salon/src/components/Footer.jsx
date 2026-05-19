import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', clear: 'both', display: 'block' }}>
      <Container fluid className="px-0">
        <Row className="g-0">
          
          {/* LEFT SIDE: Cream Background Content Block */}
          <Col lg={8} xs={12} className="p-5 text-start" style={{ backgroundColor: '#fbf7f4', color: '#2d2d2d' }}>
            <div className="p-xl-4">
              <Row className="g-4 mb-5">
                {/* Brand and Logo */}
                <Col md={4} xs={12}>
                  <div className="mb-3">
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', color: '#1a1a1a', margin: 0, fontSize: '2.2rem' }}>la Diva</h2>
                    <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', color: '#555', marginTop: '2px' }}>Beauty Salon</span>
                  </div>
                </Col>

                {/* Pages Navigation Links */}
                <Col md={4} xs={6}>
                  <h6 className="text-uppercase mb-3 text-muted" style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: '600' }}>Pages</h6>
                  <ul className="list-unstyled lh-lg" style={{ fontSize: '14px', color: '#444' }}>
                    <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">Our Team</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">Our Services</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">Blog</a></li>
                    <li><a href="#" className="text-dark text-decoration-none">Contacts</a></li>
                    <li><a href="#" className="text-dark text-decoration-none text-muted">Image Credits</a></li>
                  </ul>
                </Col>

                {/* Contacts & Timings */}
                <Col md={4} xs={6}>
                  <h6 className="text-uppercase mb-3 text-muted" style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: '600' }}>Contacts</h6>
                  <p className="mb-3" style={{ fontSize: '14px', color: '#444', lineHeight: '1.5' }}>
                    511 SW 10th Ave 1206, Portland,<br />OR, United States
                  </p>
                  <p className="mb-3 text-muted" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Mon – Fri: 8:30 am – 5:00 pm,<br />
                    Sat – Sun: Closed
                  </p>
                  <div className="fw-bold mb-1" style={{ fontSize: '18px', color: '#333' }}>
                    📞 1-800-123-1234
                  </div>
                  <a href="mailto:example@la-diva.com" className="text-dark text-decoration-none small">example@la-diva.com</a>
                </Col>
              </Row>

              {/* Stay Updated Newsletter Section */}
              <div className="pt-4 border-top border-secondary border-opacity-10">
                <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '400' }}>Stay Updated</h4>
                <Row className="align-items-end g-3" style={{ maxWidth: '600px' }}>
                  <Col sm={8} xs={12}>
                    <input 
                      type="email" 
                      placeholder="Your email address...*" 
                      className="form-control bg-transparent rounded-0 border-0 border-bottom px-0 pb-2 shadow-none" 
                      style={{ borderColor: '#ccc', fontSize: '14px' }} 
                    />
                  </Col>
                  <Col sm={4} xs={12}>
                    <button className="btn w-100 rounded-0 text-uppercase fw-semibold" style={{ border: '1px solid #2d2d2d', fontSize: '11px', letterSpacing: '2px', padding: '10px' }}>
                      Subscribe
                    </button>
                  </Col>
                </Row>
              </div>

              {/* Bottom bar with Copyright & Social icons */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4 small text-muted border-top border-secondary border-opacity-10">
                <p className="m-0 mb-3 mb-md-0">This is a sample website. cmsmasters ©2026 - All Rights Reserved.</p>
                <div className="d-flex gap-4 fs-6">
                  <a href="#" className="text-dark opacity-75"><i className="bi bi-instagram"></i> inst</a>
                  <a href="#" className="text-dark opacity-75"><i className="bi bi-twitter-x"></i> tw</a>
                  <a href="#" className="text-dark opacity-75"><i className="bi bi-facebook"></i> fb</a>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Beautiful Rose-Pink Appointment Form */}
          <Col lg={4} xs={12} className="p-5 text-white text-start d-flex align-items-center" style={{ backgroundColor: '#b5838d' }}>
            <div className="w-100 p-xl-4">
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: '400', lineHeight: '1.1' }}>
                Book an <br /> appointment
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                <Row className="g-4">
                  <Col md={6} xs={12}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="form-control bg-transparent rounded-0 border-0 border-bottom text-white px-0 pb-2 shadow-none placeholder-light" 
                      style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: '14px' }}
                    />
                  </Col>
                  <Col md={6} xs={12}>
                    <input 
                      type="text" 
                      placeholder="Your Phone" 
                      className="form-control bg-transparent rounded-0 border-0 border-bottom text-white px-0 pb-2 shadow-none placeholder-light" 
                      style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: '14px' }}
                    />
                  </Col>
                  <Col xs={12}>
                    <select 
                      className="form-select bg-transparent rounded-0 border-0 border-bottom text-white px-0 pb-2 shadow-none" 
                      style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: '14px', backgroundImage: 'none', color: '#fff' }}
                    >
                      <option className="text-dark" value="">Choose a Service</option>
                      <option className="text-dark" value="manicure">Manicure</option>
                      <option className="text-dark" value="pedicure">Pedicure</option>
                      <option className="text-dark" value="nailart">Nail Art</option>
                    </select>
                  </Col>
                  <Col xs={12}>
                    <textarea 
                      rows="2" 
                      placeholder="Your Comment" 
                      className="form-control bg-transparent rounded-0 border-0 border-bottom text-white px-0 pb-2 shadow-none placeholder-light" 
                      style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: '14px', resize: 'none' }}
                    ></textarea>
                  </Col>
                  <Col xs={12} className="pt-3">
                    <button type="submit" className="btn bg-white text-dark w-100 rounded-0 text-uppercase fw-bold py-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
                      Make an Appointment
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>

        </Row>
      </Container>
      
      {/* Custom inline helper styles for placeholder white tone opacity */}
      <style>{`
        .placeholder-light::placeholder {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .form-control:focus, .form-select:focus {
          border-bottom-color: #fff !important;
        }
      `}</style>
    </footer>
  );
}