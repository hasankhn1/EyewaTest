import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <Link to="/" className="navbar-brand">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/search" className="navbar-brand">Search</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
