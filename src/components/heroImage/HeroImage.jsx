import { Container, Row, Col, Image } from 'react-bootstrap';

function HeroImage() {
  return (
    <section id="bookingSection" className="hero" style={{ marginTop: '1.6rem' }}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col 
            xs={12} 
            className="text-center position-relative d-flex justify-content-center align-items-center"
            style={{ height: '350px' }} // กำหนดความสูงของคอลัมน์
          >
            <Image
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/495267458_1845902902896226_4804704848285100621_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHX428zFt85XYu0ORyH6SCJbqYaY5i3H6NuphpjmLcfo8tEqk3iEX1D8386bN8BRwpQ4bLfUFzM1J1XV7LivcCa&_nc_ohc=YAQ4RlQnYVAQ7kNvwGua23c&_nc_oc=AdnHk55GgprpRHNYX-ywnrHyusQ2fAy4y2bvR5kLnug1iEJgtx4xukXD3tT9rgm6azo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&oh=03_Q7cD2AGIkEy6mBvpND9syNzbalqkXDrI-CEUzddjvt2BmK-HTQ&oe=683D79CF"
              alt="ภาพหลัก"
              style={{ width: '1432px', height: 'auto', objectFit: 'cover' }} // กำหนดขนาดของรูป
              className="rounded-3"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-white text-shadow">
              <h1 className="fs-1 mb-2">ยินดีต้อนรับเข้าสู่</h1>
              <h3 className="fs-3">บาราลี บีช รีสอร์ท</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroImage;
