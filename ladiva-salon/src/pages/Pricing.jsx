import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

// Images Import
import price1 from '../assets/images/price-guide/price-img1.webp';
import price2 from '../assets/images/price-guide/price-img2.webp';

export default function Pricing() {
  return (
    <>
      <section className="bg-theme-secondary py-5 text-center">
        <Container className="py-4">
          <div className="banner-content">
            <h1 className="fw-bold text-dark" style={{fontFamily: 'var(--title-font)', fontSize: '3rem'}}>
              Transparent <span>Pricing</span>
            </h1>
            <p className="text-muted m-0">No hidden fees, flat rate structures for upscale beauty management</p>
          </div>
        </Container>
      </section>

      <section className="pricing-plans py-5 my-5">
        <Container>
          <Row className="g-4">
            {/* Manicure Card */}
            <Col lg={6} xs={12}>
              <div className="price-card">
                <Row className="align-items-center">
                  <Col sm={4} xs={12} className="mb-3 mb-sm-0">
                    <img src={price1} alt="Manicure Guide" className="img-fluid w-100" />
                  </Col>
                  <Col sm={8} xs={12}>
                    <h2 className="fs-3 mb-3">Manicure</h2>
                    <ul className="price-list list-unstyled m-0">
                      <li><span>La Diva Signature Manicure</span> <span>$30</span></li>
                      <li><span>Organic Care Manicure</span> <span>$40</span></li>
                      <li><span>Gel Polish Manicure</span> <span>$50</span></li>
                      <li><span>Sculpted Extensions</span> <span>$85</span></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Pedicure Card */}
            <Col lg={6} xs={12}>
              <div className="price-card">
                <Row className="align-items-center">
                  <Col sm={4} xs={12} className="mb-3 mb-sm-0">
                    <img src={price2} alt="Pedicure Guide" className="img-fluid w-100" />
                  </Col>
                  <Col sm={8} xs={12}>
                    <h2 className="fs-3 mb-3">Pedicure</h2>
                    <ul className="price-list list-unstyled m-0">
                      <li><span>La Diva Signature Pedicure</span> <span>$45</span></li>
                      <li><span>Organic Botanical Pedicure</span> <span>$58</span></li>
                      <li><span>Gel System Pedicure</span> <span>$65</span></li>
                      <li><span>Paraffin Thermal Treatment</span> <span>$80</span></li>
                    </ul>
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