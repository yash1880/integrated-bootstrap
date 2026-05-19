import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

// Images Import
import about1 from '../assets/images/about-image/about-1.webp';
import about2 from '../assets/images/about-image/about-2.webp';

export default function About() {
  return (
    <>
      <section className="bg-theme-secondary py-5 text-center">
        <Container className="py-4">
          <div className="banner-content">
            <h1 className="fw-bold text-dark" style={{fontFamily: 'var(--title-font)', fontSize: '3rem'}}>
              The La Diva <span>Story</span>
            </h1>
            <p className="text-muted m-0">Dedicated to setting exceptional sanitation and premium styling standards</p>
          </div>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container>
          <Row className="align-items-center justify-content-between g-5">
            <Col md={6} xs={12} className="position-relative mb-5 mb-md-0">
              <div className="about-image-item w-75">
                <img src={about1} alt="Our Culture" className="img-fluid" />
              </div>
              <div className="about-image-item image-2">
                <img src={about2} alt="Our Salon" className="img-fluid" />
              </div>
            </Col>
            <Col md={5} xs={12}>
              <div className="title">
                <span>About Our Lounge</span>
                <h2 className="my-3">Crafting Masterpieces, <span>One Nail</span> at a Time</h2>
                <p className="my-4">Founded with a singular mission to pivot nail architecture into a luxurious artistic expression, La Diva merges premium, eco-conscious chemical supplies with masterful mechanical dexterity.</p>
                <p className="text-muted mb-4">Every workstation complies with standard hospital-grade autoclaving protocols, ensuring your absolute health is prioritized as fluidly as your personal aesthetic ambitions.</p>
                
                <Row className="mt-4 text-center g-3 border-top pt-4">
                  <Col xs={4}>
                    <h3 className="fw-bold m-0" style={{color:'var(--turnery-color)'}}>100%</h3>
                    <span className="small text-muted">Vegan Polishes</span>
                  </Col>
                  <Col xs={4}>
                    <h3 className="fw-bold m-0" style={{color:'var(--turnery-color)'}}>25k+</h3>
                    <span className="small text-muted">Sets Done</span>
                  </Col>
                  <Col xs={4}>
                    <h3 className="fw-bold m-0" style={{color:'var(--turnery-color)'}}>5-Star</h3>
                    <span className="small text-muted">Rating</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}