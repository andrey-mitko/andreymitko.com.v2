import React, { useState } from "react";
import ContactForm from "./ContactForm";
import socialMediaLinks from "@/data/socialMediaLinks";
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

const FooterSection = () => {
  const [isLinkHover, setIsLinkHover] = useState(false);

  return (
    <FooterWrapper>
      <div className="container">
        <FooterTitle>Let’s work together.</FooterTitle>
        <ContactFromWrapper>
          <ContactForm />
        </ContactFromWrapper>
        <SocialMediaWrapper $isLinkHover={isLinkHover}>
          {socialMediaLinks.map((item, index) => (
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
            <FooterBr /> Andrey Mitko © 2023.
          </FooterText>
        </StyledFooter>
      </div>
    </FooterWrapper>
  );
};

export default FooterSection;
