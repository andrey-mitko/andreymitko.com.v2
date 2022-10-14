import React, { useState } from "react";
import {
  NavWrapper,
  Title,
  MobileMenu,
  MobileMenuLinksWrapper,
  MobileMenuLink,
  ThankYouText,
  HamburgerWrapper,
  StandardMenuLink,
  NavigationWrapper,
  NavContent,
} from "./styles";
import { Slant as Hamburger } from "hamburger-react";
import { NavItem } from "../../utils/types";
import ScreenSizes from "../../utils/mediaVariables";

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
        <NavContent>
          <Title
            onClick={() => setIsMobileMenuOpen(false)}
            href="/#"
            $isMobileMenuOpen={isMobileMenuOpen}
            className="noselect"
          >
            Andrey Mitko
          </Title>
          <NavigationWrapper className="nofocus">
            <HamburgerWrapper>
              <Hamburger
                distance="sm"
                duration={0.3}
                size={24}
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
                color={
                  isMobileMenuOpen
                    ? "var(--color-purple)"
                    : "var(--color-black100)"
                }
              />
            </HamburgerWrapper>
            {navigationItems.map((item, index) => (
              <StandardMenuLink
                onClick={() => setIsMobileMenuOpen(false)}
                key={index}
                href={item.url}
              >
                {item.title}
              </StandardMenuLink>
            ))}
          </NavigationWrapper>
        </NavContent>
      </NavWrapper>
      <MobileMenu $isMobileMenuOpen={isMobileMenuOpen}>
        <MobileMenuLinksWrapper>
          {navigationItems.map((item, index) => (
            <MobileMenuLink
              onClick={() => setIsMobileMenuOpen(false)}
              key={index}
              $order={index + 1}
              $isMobileMenuOpen={isMobileMenuOpen}
              href={item.url}
            >
              {" "}
              {item.title}{" "}
            </MobileMenuLink>
          ))}
        </MobileMenuLinksWrapper>

        <div style={{ opacity: 0.7 }}>
          <ThankYouText $isMobileMenuOpen={isMobileMenuOpen}>
            Thank you for visiting my website!
          </ThankYouText>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
