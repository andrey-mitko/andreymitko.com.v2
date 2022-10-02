import React from "react";
import { Link, StyledArrowRight } from "./styles";

type Props = {
  href: string;
  title: string;
};

const StyledLink = (props: Props) => {
  return (
    <Link href={props.href} target="_blank">
      {props.title}{" "}
      <StyledArrowRight className="ri-arrow-right-line"></StyledArrowRight>
    </Link>
  );
};

export default StyledLink;
