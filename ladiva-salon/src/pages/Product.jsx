import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

// Dynamic image path loader function for assets
const getImgUrl = (folder, name) => {
  return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};

export default function ProductPage() {
  return (
    <>
      {/* Main Product Section Content */}
      <div className="product-page-wrapper py-5" style={{ backgroundColor: '#fafafa', minHeight: '80vh' }}>
        <Container className="py-4">
          
          {/* Section Title */}
          <div className="text-start mb-5 d-flex justify-content-between align-items-end">
            <div>
              <span className="text-uppercase small text-muted d-block mb-2" style={{ letterSpacing: '3px', fontSize: '11px' }}>
                Online Shop
              </span>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#2d2d2d', margin: 0 }}>
                Professional products
              </h1>
              <p className="text-muted small m-0 mt-2">
                Shop your favorite beauty products through our online store
              </p>
            </div>
          </div>

          {/* Normal 4-Column Grid - No weird overlapping or parallax scrolling */}
          <Row className="g-4">
            {[
              { id: 768, color: 'Secret Legacy', tag: null },
              { id: 680, color: 'Opulence', tag: 'OUT OF STOCK' },
              { id: 165, color: 'Champingnic', tag: 'SALE' },
              { id: 883, color: 'Seaweed', tag: null },
              { id: 412, color: 'Rose Glow', tag: null },
              { id: 231, color: 'Classic Nude', tag: 'SALE' },
              { id: 504, color: 'Velvet Matte', tag: null },
              { id: 911, color: 'Midnight Gloss', tag: null }
            ].map((prod, num) => (
              <Col lg={3} sm={6} xs={12} key={num}>
                <div className="p-3 bg-white border rounded text-center position-relative h-100 shadow-sm transition-card">
                  
                  {/* Badges like SALE or OUT OF STOCK */}
                  {prod.tag && (
                    <span 
                      className={`position-absolute top-0 start-0 m-3 badge small px-2 py-1`} 
                      style={{ 
                        fontSize: '9px', 
                        backgroundColor: prod.tag === 'SALE' ? '#b5838d' : '#6c757d',
                        letterSpacing: '0.5px',
                        borderRadius: prod.tag === 'OUT OF STOCK' ? '20px' : '4px' // Matched layout roundness
                      }}
                    >
                      {prod.tag}
                    </span>
                  )}

                  {/* Product Image Section */}
                  <div className="py-4 d-flex align-items-center justify-content-center" style={{ height: '220px' }}>
                    <img 
                      src={getImgUrl('nail-polish', `nail-polish-${(num % 4) + 1}.webp`)} 
                      alt={prod.color} 
                      className="img-fluid" 
                      style={{ maxHeight: '180px', objectFit: 'contain' }} 
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="small mb-2" style={{ color: '#c2999f' }}>★★★★★</div>
                  
                  {/* Title & Price */}
                  <h6 className="small fw-normal mb-1 text-dark" style={{ letterSpacing: '0.5px', fontFamily: "'Playfair Display', serif", fontSize: '15px' }}>
                    Gel Effect Nail Polish {prod.id}
                  </h6>
                  
                  {/* Price Block with condition for Sale markdown */}
                  {prod.tag === 'SALE' ? (
                    <p className="small mb-3">
                      <span className="text-muted text-decoration-line-through me-2" style={{ fontSize: '12px' }}>$14.99</span>
                      <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>$10.99</span>
                    </p>
                  ) : (
                    <p className="text-muted small mb-3" style={{ fontSize: '13px' }}>$14.99</p>
                  )}

                  {/* Simple Add to cart button */}
                  <button className="btn btn-sm w-100 rounded-0 text-uppercase mt-auto" style={{ border: '1px solid #2d2d2d', fontSize: '10px', fontWeight: '600', letterSpacing: '1px', padding: '8px' }}>
                    Add To Cart
                  </button>
                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </div>

      {/* Footer is strictly linear and follows after the content layout */}
      <Footer />

      {/* Extra helper hover effect style */}
      <style>{`
        .transition-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .transition-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
        }
      `}</style>
    </>
  );
}