import { useEffect, useState } from "react";
import './Cus1.css';
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/Login')
  }

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };
  
   
    useEffect(()=>{
      console.log(auth);
      if(auth==null){
        navigate('/Login')
      }
       
      })  
    

  return (
    <>
      <Navbar bg="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="text-white bg-dark fw-bold fs-2">
            E-News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-light">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => handleCategoryClick("world")}
                  >
                    World
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("business")}
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("technology")}
                  >
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("science")}
                  >
                    Science
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("health")}
                  >
                    Health
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
              { auth ? <Link onClick={logout} to="/Login" className="lo1 text-white bg-dark fw-bold fs-4">Logout</Link>:
                <Link to="/Login" className="lo1 text-white bg-dark fw-bold fs-4">Login/</Link>
              }
                { !auth ? <Link to="/Register" className="lo2 text-white bg-dark fw-bold fs-4">Register</Link>:'' }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column" >
            <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("world")}>
                World
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("business")}>
                Business
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("sports")}>
                Sports
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("science")}>
                Science
              </Nav.Link>
              <Nav.Link className="text-dark bg-blue-100" onClick={() => handleCategoryClick("health")}>
                Health
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
