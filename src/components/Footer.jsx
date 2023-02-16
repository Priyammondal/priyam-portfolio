import React from "react";
import pm from "../assets/PM.png";
import {
  AiFillCode,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <section>
        <h3>Made with 🧡 and React</h3>
        <h5>© {new Date().getFullYear()} Priyam Mondal</h5>
      </section>

      <div>
        <img src={pm} alt="Priyam" />
        <h2>Priyam Mondal</h2>
        <p>I have stood on a mountain of no’s for one yes.</p>
      </div>
      
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.instagram.com/thepriyammondal/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/priyam-mondal/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.facebook.com/priyam.mondal.9256/"
            target={"blank"}
          >
            <AiFillFacebook />
          </a>
          <a href="https://github.com/Priyammondal" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://leetcode.com/priyam_mondal/" target={"blank"}>
            <AiFillCode />
          </a>
          <a href="https://twitter.com/priyam_jsx" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
