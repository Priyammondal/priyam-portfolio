import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.png";
import resume from "../assets/Resume.pdf";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Priyam Mondal
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A FullStack Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "",
            }}
          />

          <div>
            <a href="mailto:priyammondal096@gmail.com">Hire Me</a>
            <a href={resume} download>Download CV</a>
          </div>

          {/* <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>
                +<span>Contact</span>
              </p>
              <span>priyammondal096@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Priyam" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
