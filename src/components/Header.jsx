import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />

        <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
      </nav>
    </>
  );
};
export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineClose />
      </button>
    </div>
  );
};
const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Priyam.</h2>
    <div>
      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>
      <a href="#work" onClick={() => setMenuOpen(false)}>
        Work
      </a>
      <a href="#timeline" onClick={() => setMenuOpen(false)}>
        Experience
      </a>
      <a href="#services" onClick={() => setMenuOpen(false)}>
        Services
      </a>
      <a href="#testimonial" onClick={() => setMenuOpen(false)}>
        Testimonial
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </div>
    <a href="mailto:priyammondal096@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
