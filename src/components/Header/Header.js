import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="py-4">
            <Navbar bg="dark" style={{ height: '55px' }} variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <h3 className="textExtra"><span id="textMain"> HealthCare </span>Services</h3>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#about" style={{ textDecoration: 'none', color: 'white' }}>About</Nav.Link>


                        <Nav.Link as={HashLink} to="/home#DoctorServices" style={{ textDecoration: 'none', color: 'white' }}>Doctor Services</Nav.Link>


                        <Nav.Link as={HashLink} to="/home#more" style={{ textDecoration: 'none', color: 'white' }} >More</Nav.Link>


                        {user?.displayName ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <NavLink as={Link} to="/login" style={{ margin: '10px', textDecoration: 'none', fontWeight: "bold", color: 'goldenrod' }}
                            >Login</NavLink>}


                        <Navbar.Text>
                            {user.displayName &&
                                <a href="#login"> Signed in as {user?.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <>
                < Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container >
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-center">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#DoctorServices">Doctor Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#more">More</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </> */}
        </div>
    );
};

export default Header;