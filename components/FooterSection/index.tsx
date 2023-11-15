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
} from "./styles";

const FooterSection = () => {
  const [linkHovered, setLinkHovered] = useState(false);
  const today = new Date();
  return (
    <FooterWrapper>
      <div className="container">
        <FooterTitle>Let’s work together.</FooterTitle>
        <ContactFromWrapper>
          <ContactForm />
        </ContactFromWrapper>
        <SocialMediaWrapper linkHovered={linkHovered}>
          {socialMediaLinks.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              onMouseOver={() => setLinkHovered(true)}
              onMouseOut={() => setLinkHovered(false)}
            >
              <SocialMediaIcon
                className={item.iconClass}
                css={{ color: `$${item.color}` }}
              />
            </a>
          ))}
        </SocialMediaWrapper>
        <StyledFooter>
          <span>© {today.getFullYear()} Andrey Mitko.</span>
          <span>All Rights Reserved.</span>
        </StyledFooter>
      </div>
    </FooterWrapper>
  );
};

export default FooterSection;
