import React from "react";
import jeff from "../assets/jeff.jpg";
import mark from "../assets/mark.webp";
import sundar from "../assets/sundar.webp";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Jeff Bezos"}
          feedback={"Amazon is incomplete without you."}
          img={jeff}
        />
        <TestimonialCard
          name={"Mark zuckerberg"}
          feedback={"Why haven't you joined facebook yet?"}
          img={mark}
        />
        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"You belong to google!"}
          img={sundar}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, img }) => (
  <article>
    <img src={img} alt="user" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
