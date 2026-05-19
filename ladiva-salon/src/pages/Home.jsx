import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

// Assets Mapping
import about1 from '../assets/images/about-image/about-1.webp';
import about2 from '../assets/images/about-image/about-2.webp';
import chairIcon from '../assets/images/service-description/salon-chair.png';
import maniIcon from '../assets/images/service-description/manicure.png';
import polishIcon from '../assets/images/service-description/nail-polish.png';
import srv1 from '../assets/images/main-service/service-1.webp';
import srv2 from '../assets/images/main-service/service-2.webp';
import srv3 from '../assets/images/main-service/service-3.webp';
import price1 from '../assets/images/price-guide/price-img1.webp';
import price2 from '../assets/images/price-guide/price-img2.webp';
import counterImg from '../assets/images/counter/counter-1.webp';
import galleryNormalImg from '../assets/images/gallery/gallery.webp';

// Dynamic image path loader function for loops
const getImgUrl = (folder, name) => {
  return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Area */}
      <section className="banner d-flex align-items-center">
        <Container>
          <Row>
            <Col lg={8} xs={12}>
              <div className="banner-content text-start">
                <h1 className="mb-3">Your destination for <span>picture-perfect</span> nails</h1>
                <p className="fs-4 mb-4">Welcome to La Diva, a full service nail salon and boutique.</p>
                <a href="#" className="service-button">our service menu</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. About Section Block */}
      <section className="about py-5 my-5">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6} xs={12} className="position-relative mb-5 mb-md-0">
              <div className="about-image-item w-75">
                <img src={about1} alt="about-1" className="img-fluid" />
              </div>
              <div className="about-image-item image-2">
                <img src={about2} alt="about-2" className="img-fluid" />
              </div>
            </Col>
            <Col md={5} xs={12}>
              <div className="title">
                <span>Extensive Nail Care</span>
                <h2 className="my-3">Get your look polished, <span>from</span> <br /> fingers to toes</h2>
                <p className="my-4">Nail art, manicures, and nail shaping are just some of the specialties of our experienced nail technicians. You can count on us whether you want a classic manicure, trendy shellac paint, or custom nail art.</p>
                <a href="#" className="btn btn-turnery">more about us</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Service Cards Section */}
      <section className="service bg-theme-secondary py-5">
        <Container className="py-5">
          <Row className="g-4">
            <Col md={4} sm={6} xs={12}>
              <div className="service-item text-center p-4">
                <img src={chairIcon} alt="Upscale Location" className="mb-3" style={{ height: '60px', objectFit: 'contain' }} />
                <h4 className="fw-bold my-2" style={{ fontSize: '1.25rem', color: '#333' }}>Upscale Location</h4>
                <p className="text-muted small m-0">Our salon is located in the upscale suburban neighborhood.</p>
              </div>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <div className="service-item text-center p-4">
                <img src={maniIcon} alt="Artistic Integrity" className="mb-3" style={{ height: '60px', objectFit: 'contain' }} />
                <h4 className="fw-bold my-2" style={{ fontSize: '1.25rem', color: '#333' }}>Artistic Integrity</h4>
                <p className="text-muted small m-0">We use the highest quality organic & vegan nail materials to provide superior nails.</p>
              </div>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <div className="service-item text-center p-4">
                <img src={polishIcon} alt="Leading Designs" className="mb-3" style={{ height: '60px', objectFit: 'contain' }} />
                <h4 className="fw-bold my-2" style={{ fontSize: '1.25rem', color: '#333' }}>Leading Designs</h4>
                <p className="text-muted small m-0">We provide a range of nail treatments that will leave your nails looking their best.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. Advance Services Row */}
      <section className="service-advance container-fluid px-0">
        <Row className="g-0">
          {[
            { img: srv1, title: 'Manicure' },
            { img: srv2, title: 'Pedicure' },
            { img: srv3, title: 'Nail Art' }
          ].map((srv, i) => (
            <Col md={4} xs={12} key={i} className="service-advance position-relative">
              <div className="image-box">
                <img src={srv.img} alt={srv.title} className="w-100" />
              </div>
              <div className="service-content">
                <h4>{srv.title}</h4>
                <a href="#" className="btn btn-turnery py-2 px-3 mt-2">View Services</a>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 5. "There's nothing a fresh manicure can't fix" Section */}
      <section className="manicure-stats container-fluid px-0 my-5" style={{ backgroundColor: '#fcf9f6' }}>
        <Row className="g-0 align-items-center">
          <Col md={6} xs={12}>
            <div className="stats-img-wrapper" style={{ maxHeight: '550px', overflow: 'hidden' }}>
              <img src={counterImg} alt="Fresh Manicure Session" className="w-100 h-100" style={{ objectFit: 'cover' }} />
            </div>
          </Col>
          <Col md={6} xs={12} className="p-5">
            <div className="stats-content-box px-xl-5 text-start">
              <span className="text-uppercase small text-muted d-block mb-2" style={{ letterSpacing: '2px', fontSize: '11px' }}>More Than Just Nails</span>
              <h2 className="mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#2d2d2d', fontWeight: '400', lineHeight: '1.2' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#c29393' }}>There's</span> nothing a fresh <br /> manicure can't fix
              </h2>
              <div className="d-flex align-items-start mb-4">
                <div className="stat-number me-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#556254', minWidth: '130px', fontWeight: '400' }}>5,000+</div>
                <div className="stat-info">
                  <h5 className="fw-bold mb-1" style={{ fontSize: '15px', color: '#333' }}>Cuticles removed every year</h5>
                  <p className="text-muted small m-0">Our skilled technicians provide a range of nail treatments that will leave your nails looking and feeling their best.</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="stat-number me-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#556254', minWidth: '130px', fontWeight: '400' }}>1325</div>
                <div className="stat-info">
                  <h5 className="fw-bold mb-1" style={{ fontSize: '15px', color: '#333' }}>Unique nail designs created</h5>
                  <p className="text-muted small m-0">Our nail specialists can replicate any design and nail art from customers' ideas.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* 6. Price Guide Section */}
      <section className="pricing-plans py-5 my-5">
        <Container>
          <div className="title text-center mb-5">
            <h1 className="fw-bold">Price Guide</h1>
            <p className="text-muted">Simple, flat rate pricing for all our beauty services</p>
          </div>
          <Row className="g-4">
            <Col lg={6} xs={12}>
              <div className="price-card p-3 border rounded bg-white shadow-sm">
                <Row className="align-items-center">
                  <Col sm={4} xs={12} className="mb-3 mb-sm-0">
                    <img src={price1} alt="Manicure Guide" className="img-fluid w-100 rounded" />
                  </Col>
                  <Col sm={8} xs={12}>
                    <h2 className="fs-3 mb-3">Manicure</h2>
                    <ul className="price-list list-unstyled m-0">
                      <li className="d-flex justify-content-between border-bottom py-2"><span>La Diva Signature Manicure</span> <span>$30</span></li>
                      <li className="d-flex justify-content-between border-bottom py-2"><span>Organic Manicure</span> <span>$40</span></li>
                      <li className="d-flex justify-content-between py-2"><span>Gel Manicure</span> <span>$50</span></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="price-card p-3 border rounded bg-white shadow-sm">
                <Row className="align-items-center">
                  <Col sm={4} xs={12} className="mb-3 mb-sm-0">
                    <img src={price2} alt="Pedicure Guide" className="img-fluid w-100 rounded" />
                  </Col>
                  <Col sm={8} xs={12}>
                    <h2 className="fs-3 mb-3">Pedicure</h2>
                    <ul className="price-list list-unstyled m-0">
                      <li className="d-flex justify-content-between border-bottom py-2"><span>La Diva Signature Pedicure</span> <span>$45</span></li>
                      <li className="d-flex justify-content-between border-bottom py-2"><span>Organic Pedicure</span> <span>$58</span></li>
                      <li className="d-flex justify-content-between py-2"><span>Gel Pedicure</span> <span>$65</span></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. Gallery Section (Normal Static Layout - Fixed) */}
      <section 
        className="premium-normal-gallery d-flex align-items-center py-5" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${galleryNormalImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '480px',
          width: '100%'
        }}
      >
        <Container>
          <Row>
            <Col lg={6} md={8} xs={12} className="ms-auto text-start px-4">
              <div className="text-white">
                <span className="text-uppercase d-block mb-2" style={{ letterSpacing: '3px', fontSize: '11px', fontWeight: '600' }}>
                  Nail Gallery
                </span>
                <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: '400' }}>
                  Explore our <br /> nail art gallery
                </h2>
                <p className="mb-4" style={{ fontSize: '14px', opacity: '0.9', maxWidth: '450px' }}>
                  A gallery of nail designs our artists have created.
                </p>
                <a href="#" className="btn bg-white text-dark rounded-0 px-4 py-2 text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  Explore Gallery
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 8. Top Quality Trust Products Info Section */}
      <section className="quality-trust py-5" style={{ backgroundColor: '#f5ebe6' }}>
        <Container className="py-4">
          <Row className="align-items-center g-5">
            <Col md={6} xs={12} className="text-start">
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#333' }}>
                We use only top <br /> quality products <br /> you can <span style={{ fontStyle: 'italic', color: '#c29393' }}>trust</span>
              </h2>
              <p className="text-muted small mb-3">At our salon, we provide both shellac and gel nail services, so you may choose which one best suits your needs. Choose from a wide variety of colors for your shellac or gel nails from our skilled professionals. So, your freshly painted nails will never break or chip.</p>
              <p className="text-muted small mb-5">You may normally work without worrying about chipping or scratching the shellac on your nails for up to two weeks.</p>
              <Row className="text-center g-2">
                <Col xs={4}>
                  <div className="p-2 border border-secondary-subtle rounded-1 small text-uppercase fw-semibold" style={{ fontSize: '10px', letterSpacing: '1px' }}>🌱 Organic</div>
                </Col>
                <Col xs={4}>
                  <div className="p-2 border border-secondary-subtle rounded-1 small text-uppercase fw-semibold" style={{ fontSize: '10px', letterSpacing: '1px' }}>🧪 Non-Toxic</div>
                </Col>
                <Col xs={4}>
                  <div className="p-2 border border-secondary-subtle rounded-1 small text-uppercase fw-semibold" style={{ fontSize: '10px', letterSpacing: '1px' }}>🌍 Eco-Friendly</div>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              <img src={counterImg} alt="Quality trust session" className="w-100 rounded shadow-sm" style={{ objectFit: 'cover', height: '420px' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 9. Client Feedbacks Carousels Section */}
      <section className="feedbacks py-5 text-white" style={{ backgroundColor: '#b5838d' }}>
        <Container className="py-4">
          <div className="text-center mb-5">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem' }}>Client feedbacks</h2>
            <p className="small opacity-75">Discover what our satisfied clients have to say</p>
          </div>
          <Row className="g-4 justify-content-center">
            {[
              { name: 'MASON K.', text: 'I wish I could give them 100 Stars! La Diva is my favorite nail place! They are Covid friendly and follow all of the CDC Guidelines. My gel nails last 3-4 weeks and look sooo good!!' },
              { name: 'CYNTHIA S.', text: 'They got me and my friend an appointment last minute and did an exceptional job on both of us. I was nervous about trying a new place but I’m so glad I did!.' },
              { name: 'MARY N.', text: 'First time at La Diva and the experience was great. Eric did my pedicure, Heather did my partner’s, and our feet have never been prettier. I have NO complaints!' }
            ].map((feed, idx) => (
              <Col md={4} sm={6} xs={12} key={idx}>
                <div className="p-4 border border-light border-opacity-25 rounded h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div>
                    <div className="text-warning mb-3">★★★★★</div>
                    <p className="small lh-base opacity-90">"{feed.text}"</p>
                  </div>
                  <h6 className="fw-bold m-0 mt-3 small text-uppercase" style={{ letterSpacing: '1px' }}>— {feed.name}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 10. FAQ Accordions Section */}
      <section className="faq-block py-5 bg-white">
        <Container className="py-4" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-5">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#333' }}>
              Your questions, <br/> <span style={{ fontStyle: 'italic', color: '#c29393' }}>answered</span>
            </h2>
          </div>
          <div className="faq-list">
            {[
              'How long do your gel nails last?',
              'What kind of payments do you accept?',
              'What if I broke my nail?',
              'Can I purchase my gift card?',
              'How do I book an appointment?'
            ].map((question, i) => (
              <div key={i} className="py-3 border-bottom d-flex justify-content-between align-items-center text-start">
                <span className="fw-semibold text-secondary" style={{ fontSize: '15px' }}>{question}</span>
                <span className="text-muted fs-5">▾</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Professional E-Store Products Section */}
      <section className="store-products py-5" style={{ backgroundColor: '#fafafa' }}>
        <Container className="py-4">
          <div className="text-start mb-5 d-flex justify-content-between align-items-end">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem' }}>Professional products</h2>
              <p className="text-muted small m-0">Shop your favorite beauty products through our online store</p>
            </div>
            <a href="#" className="btn btn-outline-secondary rounded-circle px-3 py-3 text-uppercase fw-bold" style={{ fontSize: '10px', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>View All</a>
          </div>
          <Row className="g-4">
            {[
              { id: 768, color: 'Secret Legacy', tag: null },
              { id: 680, color: 'Opulence', tag: 'OUT OF STOCK' },
              { id: 165, color: 'Champingnic', tag: 'SALE' },
              { id: 883, color: 'Seaweed', tag: null }
            ].map((prod, num) => (
              <Col lg={3} sm={6} xs={12} key={num}>
                <div className="p-3 bg-white border rounded text-center position-relative h-100 shadow-sm">
                  {prod.tag && (
                    <span className="position-absolute top-0 start-0 m-3 badge bg-secondary small" style={{ fontSize: '9px' }}>{prod.tag}</span>
                  )}
                  <div className="py-4">
                    <img src={getImgUrl('nail-polish', `nail-polish-${(num % 4) + 1}.webp`)} alt="Polish Product" className="img-fluid" style={{ maxHeight: '180px' }} />
                  </div>
                  <div className="text-warning small mb-2">★★★★★</div>
                  <h6 className="small fw-bold mb-1 text-dark">Gel Effect Nail Polish {prod.id}</h6>
                  <p className="text-muted small m-0">$14.99</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="home-appointment-review-section pt-4 pb-5" style={{ backgroundColor: '#ffffff' }}>
  <Container className="text-center">
    
    {/* Olive Green Stars */}
    <div className="d-flex justify-content-center gap-1 mb-4" style={{ color: '#5c674e', fontSize: '18px' }}>
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>

    {/* Central Serif Headline Title */}
    <h2 
      style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '3rem', 
        color: '#2d2d2d', 
        fontWeight: '400',
        lineHeight: '1.3',
        maxWidth: '850px',
        margin: '0 auto 20px auto',
        letterSpacing: '-0.3px'
      }}
    >
      “You won’t find a better<br />nails salon in Los Angeles.”
    </h2>

    {/* Rating metrics details */}
    <p 
      style={{ 
        color: '#b5838d', 
        fontSize: '13.5px', 
        letterSpacing: '0.3px',
        marginBottom: '35px'
      }}
    >
      4.8 rating based on 1000+ reviews
    </p>

    {/* Core Appointment Navigation CTA Button */}
    <button 
      className="btn btn-outline-dark rounded-0 text-uppercase" 
      style={{ 
        fontSize: '11px', 
        fontWeight: '500', 
        letterSpacing: '2px', 
        padding: '11px 32px',
        border: '1px solid #333',
        color: '#333',
        backgroundColor: 'transparent'
      }}
    >
      Make An Appointment
    </button>

  </Container>
</section>

      {/* 12. FIXED: Bottom Matrix Gallery Shelf (Ekdum Normal static image flow, no overlapping scrolling) */}
      <section className="gallary-foot container-fluid px-0" style={{ position: 'relative', clear: 'both', display: 'block' }}>
        <Row className="g-0">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Col md={2} sm={4} xs={6} key={num}>
              <img 
                src={getImgUrl('gallery-img', `gallery-${num}.webp`)} 
                alt="gallery matrix block" 
                className="w-100" 
                style={{ 
                  objectFit: 'cover', 
                  height: '200px', 
                  display: 'block',
                  position: 'static'
                }} 
              />
            </Col>
          ))}
        </Row>
      </section>

      <Footer />
    </>
  );
}