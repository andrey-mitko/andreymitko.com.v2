import React, { useState } from "react";
import {
  NavWrapper,
  Title,
  MobileMenu,
  MobileMenuLinksWrapper,
  MobileMenuLink,
  ThankYouText,
} from "./styles";
import { Slant as Hamburger } from "hamburger-react";
import { NavItem } from "../../types";

type Props = {
  bgColor: string;
};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // MARK: - Navigation Data
  const navigationItems: NavItem[] = [
    {
      title: "About",
      url: "/#about",
    },
    {
      title: "Experience",
      url: "/#experience",
    },
    {
      title: "Portfolio",
      url: "/#portfolio",
    },
    {
      title: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <>
      <NavWrapper color={isMobileMenuOpen ? "lightpurple" : props.bgColor}>
        <Title
          href="/#"
          $isMobileMenuOpen={isMobileMenuOpen}
          className="noselect"
        >
          Andrey Mitko
        </Title>
        <nav className="nofocus">
          <Hamburger
            distance="sm"
            duration={0.3}
            size={24}
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            color={
              isMobileMenuOpen ? "var(--color-purple)" : "var(--color-black100)"
            }
          />
          {/* Laptop Menu Goes Here */}
        </nav>
      </NavWrapper>
      <MobileMenu $isMobileMenuOpen={isMobileMenuOpen}>
        <MobileMenuLinksWrapper>
          {navigationItems.map((item, index) => (
            <MobileMenuLink
              onClick={() => setIsMobileMenuOpen(false)}
              key={index}
              href={item.url}
            >
              {" "}
              {item.title}{" "}
            </MobileMenuLink>
          ))}
        </MobileMenuLinksWrapper>

        <ThankYouText>Thank you for visiting my website!</ThankYouText>
      </MobileMenu>
    </>
  );
};

export default Navbar;
