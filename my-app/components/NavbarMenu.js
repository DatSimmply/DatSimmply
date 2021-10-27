import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Link from "next/link";
const NavbarMenu = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>My Next App</Navbar.Brand>
    <Nav>
      <Link href="/" passHref>
        <Nav.Link>Home</Nav.Link>
      </Link>
      <Link href="/post" passHref>
        <Nav.Link>Posts</Nav.Link>
      </Link>

      <Link href="/jokes/random" passHref>
        <Nav.Link>Joke</Nav.Link>
      </Link>
      <Link href="/about" passHref>
        <Nav.Link>About</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);
export default NavbarMenu;
