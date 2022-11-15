import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";

import Img from "../../images/logo.png";
import "./style.css";
function GroupCart() {
  return (
    <div className="group-padd" id="group">
      <h1> Манай баг</h1>
      <Row xs={1} md={2} className="g-4">
        {["Erdene-Vvl", "Baurjan", "Gal-Erdene", "Chimed-Ochir"].map(
          (name, idx) => (
            <Col className="col-padd">
              <Card className="hoverCard">
                {/* <Card.Img variant="top" src={Img} /> */}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-padd"
                  >
                    Git
                  </Button>

                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-padd"
                  >
                    facebook
                  </Button>
                  <Button variant="outline-dark" size="sm">
                    CV
                  </Button>
                  <hr></hr>

                  <a>Language: </a>
                  <a>
                    <strong>JavaScript: 50.6% SCSS: 46.2% HTML: 50% </strong>{" "}
                  </a>
                  <br />
                  <p class="card-text">
                    <AiFillGithub />

                    <a
                      href="https://github.com"
                      target=" _blank"
                      class="text-dark text-decoration-none"
                    >
                      <span class="text-dark card-link mr-4">
                        <i class="fab fa-github"></i> Stars{" "}
                        <span class="badge badge-dark">802</span>
                      </span>
                    </a>
                    <small class="text-muted">
                      Updated on November 11, 2022
                    </small>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
}

export default GroupCart;
