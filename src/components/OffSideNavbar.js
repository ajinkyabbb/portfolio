import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-search-grid-1x-removebg-preview.png";
import { useThemeState } from "../context/themeContext";
import { useThemeDispatch } from "../context/themeContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
function OffSideNavbar() {
  const [expand] = useState("lg");
  const { theme } = useThemeState();
  const dispatch = useThemeDispatch();
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home",icon:'fa-solid fa-house' },
    { path: "/About", label: "About", icon:"fa-solid fa-address-card" },
    { path: "/MySkills", label: "My Skills",icon:"fa-solid fa-code" },
    { path: "/Services", label: "Services" ,icon:"fa-solid fa-bell-concierge"},
    { path: "/Portfolio", label: "Portfolio", icon:"fa-solid fa-photo-film"},
    { path: "/Contact", label: "Contact",icon:"fa-regular fa-id-badge" },
  ];
console.log(expand)
  return (
    <>
      <Navbar
        bg={theme}
        data-bs-theme={theme}
        key={expand}
        expand={expand}
        className="navbar_top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" src={logo} style={{ width: "90px" }} />
          </Navbar.Brand>
          {/* <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "TOGGLE_THEME" });
            }}
          >
            click
          </Button> */}
          <Toggle
            checked={theme === "dark"? true:false}
            onChange={() => dispatch({ type: "TOGGLE_THEME" })}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode toggle"
          />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            bg={theme}
            data-bs-theme={theme}
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body closeButton>
              <Nav className="flex-grow-1 d-flex m-2 pe-3 justify-content-start">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-decoration-none  ${
                      location.pathname === item.path ? "nav_active" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                    <i className={`${item.icon} d-lg-none`} />
                    <p className="px-2 mt-3">{item.label}</p>
                    </div>
                   
                  </Link>
                ))}
              </Nav>
              <Link to="/Contact" className="text-decoration-none pe-2">
                {" "}
                <Button className="hire_me_btn px-4 py-2">
                  <span>Hire me</span>
                </Button>
              </Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffSideNavbar;
