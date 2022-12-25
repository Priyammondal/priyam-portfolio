import React from "react";
import data from "../assets/data.json";

const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.experiences.map((item, index) => (
          <TimeLineItems
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimeLineItems = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 == 0 ? "leftTimeLine" : "rightTimeLine"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default TimeLine;
