import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer'; // 👈 Footer import kiya

// Images Import (src/assets/images/ ke mutabik)
import srv1 from '../assets/images/main-service/service-1.webp';
import srv2 from '../assets/images/main-service/service-2.webp';
import srv3 from '../assets/images/main-service/service-3.webp';

export default function Services() {
  return (
    <>
      <section className="bg-theme-secondary py-5 text-center">
        <Container className="py-4">
          <div className="banner-content">
            <h1 className="fw-bold text-dark" style={{fontFamily: 'var(--title-font)', fontSize: '3rem'}}>
              Our Luxury <span>Services</span>
            </h1>
            <p className="text-muted m-0">Explore our full line of professional nail styling therapies</p>
          </div>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container>
          {/* Service 1 */}
          <Row className="g-5 align-items-center mb-5">
            <Col md={6}>
              <img src={srv1} alt="Manicure" className="img-fluid rounded shadow-sm w-100" />
            </Col>
            <Col md={6}>
              <div className="title">
                <h2 className="fw-bold mb-3">Classic &amp; Gel Manicures</h2>
                <p className="text-muted">Our custom manicure services reshape, buffer, and nurture your natural nails using premium base coats. From basic clean-ups to advanced long-lasting extensions, our technicians ensure absolute accuracy.</p>
                <ul className="list-unstyled text-muted mt-3">
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Precision cuticle push &amp; oil protection</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Premium non-toxic gel system deployment</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Extended 3+ week durability performance</li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Service 2 */}
          <Row className="g-5 align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              <img src={srv2} alt="Pedicure" className="img-fluid rounded shadow-sm w-100" />
            </Col>
            <Col md={6}>
              <div className="title">
                <h2 className="fw-bold mb-3">Rejuvenating Pedicures</h2>
                <p className="text-muted">Relax in our high-end massage chairs while your feet receive a relaxing soak, scrub, organic hydration masking, and complete massage therapies paired with vibrant colors.</p>
                <ul className="list-unstyled text-muted mt-3">
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Organic sugar scrub exfoliation</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Deep hydration clay mask treatment</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Extended micro-circulation massage</li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Service 3 */}
          <Row className="g-5 align-items-center">
            <Col md={6}>
              <img src={srv3} alt="Nail Art" className="img-fluid rounded shadow-sm w-100" />
            </Col>
            <Col md={6}>
              <div className="title">
                <h2 className="fw-bold mb-3">Custom Nail Art &amp; Extensions</h2>
                <p className="text-muted">Express your unique style with our custom nail artwork. From elegant French tips and chrome effects to complex hand-painted designs and rhinestone embellishments.</p>
                <ul className="list-unstyled text-muted mt-3">
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Hand-painted intricate detailing</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Trending chrome and metallic finishes</li>
                  <li className="mb-2"><i className="fa-solid fa-check me-2" style={{color:'var(--turnery-color)'}}></i> Premium 3D charms and crystal application</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer /> {/* 👈 Footer Section */}
    </>
  );
}