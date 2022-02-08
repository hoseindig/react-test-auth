import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navebar = ({ user }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{user ? user.name : "Navbar"}</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navebar;