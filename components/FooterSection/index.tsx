import React from "react";
import {
  FooterWrapper,
  FooterTitle,
  ContactFromWrapper,
  SocialMediaWrapper,
  SocialMediaIcon,
  StyledFooter,
  FooterText,
} from "./styles";
import { SocialMediaItem } from "../../types";
import ContactForm from "../ContactForm";

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

  return (
    <FooterWrapper>
      <FooterTitle>Let’s work together.</FooterTitle>
      <ContactFromWrapper>
        <ContactForm />
      </ContactFromWrapper>
      <SocialMediaWrapper>
        {socialMediaItems.map((item, index) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={index}>
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
          <br /> Andrey Mitko © 2022.
        </FooterText>
      </StyledFooter>
    </FooterWrapper>
  );
};

export default FooterSection;

// Section
// // Section Title

// // Contact Form
// // // Name Field
// // // Email Field
// // // Message Field
// // // Submit Button

// // Social Media Links
// // // LinkedIn
// // // GitHub
// // // Product Hunt
// // // Twitter
// // // Medium

// // Footer Content (<footer>)
// // // Footer Text
// // // Copyright Text
