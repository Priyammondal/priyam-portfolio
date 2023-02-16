import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

const Work = () => {
  return (
    <div id="work">
      <section>
        <div>
          <h2>WORK</h2>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={false}
            autoPlay={false}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a href={i.url} target={"blank"}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Work;
