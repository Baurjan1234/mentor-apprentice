import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./style.css";
function FormSection() {
  return (
    <div className="Form" id="feedback">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <h1 className="h1-style">Санал хүсэлт</h1>
          <Form.Label column sm={2} className="email">
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="textarea">Санал хүсэлт</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button type="submit">Илгээх</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormSection;
