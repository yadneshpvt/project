import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
function Header()
{
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto nav_bar_wrapper">
                           
                            <Link to="/register">Register</Link>

                            
                        </Nav>
                    </Container>
               
                </Navbar>
            </>
        </div>
    )
}

export default Header