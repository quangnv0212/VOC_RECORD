import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/img/logo_ngang.png"></img>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Đĩa than" href="#home" id="basic-nav-dropdown">
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
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
