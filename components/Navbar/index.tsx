import React, { useState, useRef, useEffect } from "react";
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
import { gsap } from "gsap";

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

  const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();
      tl.set(".nav-content", { y: "44vh" });
      tl.set(".nav-title", { display: "none" });
      tl.set(".nav-links", { opacity: 0 });
      tl.set(".nav-title", {
        display: "block",
        delay: 0,
        color: "var(--color-purple)",
      });

      tl.to([".nav-content", ".nav-title"], {
        delay: 1,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        color: "var(--color-black100)",
      });
      tl.to([".nav-links"], {
        delay: 0,
        duration: 1,
        opacity: 1,
        ease: "power3.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <NavWrapper
        color={isMobileMenuOpen ? "lightpurple" : props.bgColor}
        ref={comp}
      >
        <NavContent className="nav-content">
          <Title
            href="/#"
            $isMobileMenuOpen={isMobileMenuOpen}
            className="noselect nav-title"
          >
            Andrey Mitko
          </Title>
          <NavigationWrapper className="nofocus nav-links">
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
