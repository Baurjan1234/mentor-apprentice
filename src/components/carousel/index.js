import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../images/code1.jpg";
import Img2 from "../../images/code2.jpg";
import Img3 from "../../images/code3.jpg";

import "./style.css";
function IndividualIntervalsExample() {
  return (
    <div className="Carousel" id="news">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={Img1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
