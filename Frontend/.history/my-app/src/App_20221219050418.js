import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/img/logo_ngang.png"></img>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ĐĨA THAN" href="#home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                ĐĨA VINTAGE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">ĐĨA MỚI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">ĐĨA GIÁ RẺ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">XEM TẤT CẢ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                TÌM THEO NGHỆ SĨ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                TÌM THEO THỜI KÌ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                TÌM THEO THỂ LOẠI
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                TÌM THEO TÂM TRẠNG
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">MÂM ĐĨA</Nav.Link>
            <Nav.Link href="#link">CHO NGƯỜI MỚI</Nav.Link>
            <Nav.Link href="#link">MIXTAPE</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
      tét
    </Navbar>
  );
}

export default App;
