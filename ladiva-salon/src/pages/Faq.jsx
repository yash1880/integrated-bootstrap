import { Container, Accordion } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Faq() {
  return (
    <>
      <section className="bg-theme-secondary py-5 text-center">
        <Container className="py-4">
          <div className="banner-content">
            <h1 className="fw-bold text-dark" style={{fontFamily: 'var(--title-font)', fontSize: '3rem'}}>
              Frequently Asked <span>Questions</span>
            </h1>
            <p className="text-muted m-0">Clear answers regarding structural safety, booking timelines, and custom designs</p>
          </div>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container style={{maxWidth: '800px'}} className="py-4">
          <Accordion defaultActiveKey="0" className="shadow-sm rounded">
            <Accordion.Item eventKey="0" className="mb-2 border-0 shadow-sm">
              <Accordion.Header><span className="fw-bold text-dark">What sanitation methods do you enforce?</span></Accordion.Header>
              <Accordion.Body className="text-muted">
                We implement strict medical-grade sterilization. All metal implements undergo diagnostic scrubbing before being sealed into individual surgical pouches and processed inside an on-site high-pressure steam autoclave machine.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-2 border-0 shadow-sm">
              <Accordion.Header><span className="fw-bold text-dark">How long do Gel-X extensions typically last?</span></Accordion.Header>
              <Accordion.Body className="text-muted">
                With ideal maintenance and consistent application of cuticle hydration oils, our premium soft gel full-coverage extensions maintain structural integrity flawlessly for a period spanning 3 to 4 weeks.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="border-0 shadow-sm">
              <Accordion.Header><span className="fw-bold text-dark">Can I bring custom reference nail art profiles?</span></Accordion.Header>
              <Accordion.Body className="text-muted">
                Absolutely! Our artistic crew specializes in adapting intricate digital mockups, pattern styles, fine chrome work, and hand-painted miniature design elements perfectly.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <Footer />
    </>
  );
}