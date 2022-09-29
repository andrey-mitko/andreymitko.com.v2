import React from "react";
import { Experience } from "../../../types";
type Props = {
  experience: Experience;
};

const ExperienceCell = (props: Props) => {
  return (
    <div>
      <h3>{props.experience.title}</h3>
      <h4>{props.experience.company}</h4>
      <p>{props.experience.period}</p>
    </div>
  );
};

export default ExperienceCell;
