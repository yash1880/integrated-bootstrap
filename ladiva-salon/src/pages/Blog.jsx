import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

// Dynamic asset path helper function
const getImgUrl = (folder, name) => {
  return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};

export default function BlogPage() {
  // Blog static list array
  const blogPosts = [
    {
      id: 1,
      title: "Perfect Winter Nail Art Trends for 2026",
      date: "May 15, 2026",
      category: "Trends",
      desc: "Discover the most popular colors, minimalist design details, and long-lasting gel trends that will dominate this season.",
      imgName: "gallery-1.webp" // <--- isko aapne asset folder ke file name se match karna hai
    },
    {
      id: 2,
      title: "How to Maintain Healthy Cuticles at Home",
      date: "May 10, 2026",
      category: "Nail Care",
      desc: "A complete step-by-step guide to keeping your nails and skin thoroughly hydrated without using toxic chemicals.",
      imgName: "gallery-2.webp"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Acrylic vs Gel Polish",
      date: "May 02, 2026",
      category: "Education",
      desc: "Confused about what to choose for your next salon visit? Here is a breakdown of the durability and removal process.",
      imgName: "gallery-3.webp"
    }
  ];

  return (
    <>
      <div className="blog-page-wrapper py-5" style={{ backgroundColor: '#fafafa', minHeight: '80vh' }}>
        <Container className="py-4">
          
          {/* Blog Title Block */}
          <div className="text-start mb-5">
            <span className="text-uppercase small text-muted d-block mb-2" style={{ letterSpacing: '3px', fontSize: '11px' }}>
              Our Journal
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#2d2d2d', margin: 0 }}>
              Latest From Blog
            </h1>
            <p className="text-muted small m-0 mt-2">
              Tips, beauty secrets, and trending insights from our professional artists.
            </p>
          </div>

          {/* Linear Blog Grid */}
          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col lg={4} md={6} xs={12} key={post.id}>
                <div className="bg-white border rounded overflow-hidden h-100 shadow-sm transition-card">
                  
                  {/* Blog Image Container */}
                  <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#eaeaea' }}>
                    <img 
                      src={getImgUrl('gallery-img', post.imgName)} // 'gallery-img' folder layout mapped
                      alt={post.title} 
                      className="w-100 h-100 image-hover-zoom"
                      style={{ objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onError={(e) => {
                        // Safe fallback image block agar file system path galat ho jaye
                        e.target.src = "https://placehold.co/600x400/b5838d/ffffff?text=La+Diva+Blog";
                      }}
                    />
                  </div>

                  {/* Blog Meta Text Info */}
                  <div className="p-4 text-start">
                    <div className="d-flex justify-content-between align-items-center mb-2 small text-muted">
                      <span className="text-uppercase fw-semibold" style={{ fontSize: '10px', letterSpacing: '1px', color: '#b5838d' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '12px' }}>{post.date}</span>
                    </div>

                    <h5 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#2d2d2d', lineHeight: '1.4' }}>
                      {post.title}
                    </h5>
                    
                    <p className="text-muted small mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      {post.desc}
                    </p>

                    <a href="#" className="text-dark text-uppercase fw-bold text-decoration-none small" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                      Read More &rarr;
                    </a>
                  </div>

                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </div>

      {/* Global Bottom Sticky Layout Appointments Component */}
      <Footer />

      {/* Embedded Style Classes for Animation Lookups */}
      <style>{`
        .transition-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .transition-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
        }
        .transition-card:hover .image-hover-zoom {
          transform: scale(1.04);
        }
      `}</style>
    </>
  );
}