// import logo from './logo.svg';
import "./App.css";
import {
  Card,
  Container,
  Image,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Custom.scss";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [values, setValues] = useState("Bhanu")

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  return (
    <>
      <Container className="mt-5">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <MdOutlineRestaurantMenu color="orange" size={"35px"} />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Button onClick={add} variant="info" className="me-3">
          Add
        </Button>
        <div className="count">{count}</div>
        <Button onClick={sub} variant="info" className="me-3">
          Subtract
        </Button>
        <Form>
          <Form.Control 
          value={values}
          onChange={(e) => setValues(e.target.value)}
          type="text"
          classsName="mt-3" 
          placeholder="Enter any text"
          />
        </Form>
        <Row>
          <Col lg="6" sm="6" md="6">
            <Card className="text-white">
              <Card.Body>
                <Card.Img src="https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  alias voluptas libero recusandae harum aliquam quam! Minima
                  laborum quae asperiores sunt, error aliquam suscipit nesciunt
                  cupiditate incidunt corporis harum obcaecati?
                </Card.Text>
                <Button
                  variant="outline-info"
                  onClick={() => {
                    alert("this is Lamborghini");
                  }}
                >
                  Alert
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" sm="6" md="6">
            <Card className="text-white">
              <Card.Body>
                <Card.Img src="https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  alias voluptas libero recusandae harum aliquam quam! Minima
                  laborum quae asperiores sunt, error aliquam suscipit nesciunt
                  cupiditate incidunt corporis harum obcaecati?
                </Card.Text>
                <Button
                  variant="outline-info"
                  onClick={() => {
                    alert("this is Lamborghini");
                  }}
                >
                  Alert
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card className="text-white">
              <Card.Body>
                <Card.Img src="https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  alias voluptas libero recusandae harum aliquam quam! Minima
                  laborum quae asperiores sunt, error aliquam suscipit nesciunt
                  cupiditate incidunt corporis harum obcaecati?
                </Card.Text>
                <Button
                  variant="outline-info"
                  onClick={() => {
                    alert("this is Lamborghini");
                  }}
                >
                  Alert
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
