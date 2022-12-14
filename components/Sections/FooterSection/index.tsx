import React, { useState, useEffect } from "react";
import {
  FooterWrapper,
  FooterTitle,
  ContactFromWrapper,
  SocialMediaWrapper,
  SocialMediaIcon,
  StyledFooter,
  FooterText,
  FooterBr,
} from "./styles";
import { SocialMediaItem } from "../../../utils/types";
import ContactForm from "../../Elements/ContactForm";

type Props = {};

const FooterSection = (props: Props) => {
  //MARK: - Social Media Data
  const socialMediaItems: SocialMediaItem[] = [
    {
      iconClass: "ri-linkedin-box-line",
      url: "https://www.linkedin.com/in/mitk8/",
      color: "blue",
    },
    {
      iconClass: "ri-github-line",
      url: "https://github.com/andrey-mitko",
      color: "pink",
    },
    {
      iconClass: "ri-product-hunt-line",
      url: "https://www.producthunt.com/@andrey_mitko",
      color: "green",
    },
    {
      iconClass: "ri-twitter-line",
      url: "https://twitter.com/andrey_mitko",
      color: "orange",
    },
    {
      iconClass: "ri-medium-line",
      url: "https://medium.com/@mitk8",
      color: "purple",
    },
  ];

  const [isLinkHover, setIsLinkHover] = useState(false);

  return (
    <FooterWrapper>
      <div className="container">
        <FooterTitle>Let’s work together.</FooterTitle>
        <ContactFromWrapper>
          <ContactForm />
        </ContactFromWrapper>
        <SocialMediaWrapper $isLinkHover={isLinkHover}>
          {socialMediaItems.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              onMouseOver={() => setIsLinkHover(true)}
              onMouseOut={() => setIsLinkHover(false)}
            >
              <SocialMediaIcon
                className={item.iconClass}
                $fillColor={item.color}
              />
            </a>
          ))}
        </SocialMediaWrapper>
        <StyledFooter>
          <FooterText>
            Made with lots of coffee.
            <FooterBr /> Andrey Mitko © 2022.
          </FooterText>
        </StyledFooter>
      </div>
    </FooterWrapper>
  );
};

export default FooterSection;
