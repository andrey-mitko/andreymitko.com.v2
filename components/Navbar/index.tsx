import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Slant as Hamburger } from "hamburger-react";
import NavItem from "@/types/NavItem";
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

type Props = {
  bgColor: string;
};

const Navbar = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // This is the animation that runs when the navbar loads
  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();
      tl.set(".nav-content", { y: "44vh" });
      tl.set(".nav-title", { display: "none" });
      tl.set(".nav-links", { opacity: 0 });
      tl.set(".nav-title", {
        display: "block",
        delay: 0,
        color: "var(--colors-purple)",
      });

      tl.to([".nav-content", ".nav-title"], {
        delay: 0.75,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        color: "var(--colors-black100)",
      });
      tl.add(() => {
        (document.querySelector(
          "#mobile-menu"
        ) as HTMLDivElement)!.style.visibility = "visible";
      });
      tl.to([".nav-title"], {
        clearProps: "all",
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
        ref={comp}
        css={{
          backgroundColor: mobileMenuOpen
            ? "$lightpurple"
            : props.bgColor
            ? `$${props.bgColor}`
            : "white",
        }}
      >
        <NavContent className="nav-content">
          <Title
            href="/#"
            mobileMenuOpen={mobileMenuOpen}
            className="noselect nav-title"
            onClick={() => setMobileMenuOpen(false)}
          >
            Andrey Mitko
          </Title>
          <NavigationWrapper className="nofocus nav-links">
            <HamburgerWrapper>
              <Hamburger
                distance="sm"
                duration={0.3}
                size={24}
                toggled={mobileMenuOpen}
                toggle={setMobileMenuOpen}
                color={
                  mobileMenuOpen
                    ? "var(--colors-purple)"
                    : "var(--colors-black100)"
                }
              />
            </HamburgerWrapper>
            {navigationItems.map((item, index) => (
              <StandardMenuLink
                onClick={() => setMobileMenuOpen(false)}
                key={index}
                href={item.url}
              >
                {item.title}
              </StandardMenuLink>
            ))}
          </NavigationWrapper>
        </NavContent>
      </NavWrapper>
      <MobileMenu
        id="mobile-menu"
        style={{ visibility: "hidden" }}
        mobileMenuOpen={mobileMenuOpen}
      >
        <MobileMenuLinksWrapper>
          {navigationItems.map((item, index) => (
            <MobileMenuLink
              onClick={() => setMobileMenuOpen(false)}
              key={index}
              css={{ animationDelay: `${index * 100}ms` }}
              mobileMenuOpen={mobileMenuOpen}
              href={item.url}
            >
              {" "}
              {item.title}{" "}
            </MobileMenuLink>
          ))}
        </MobileMenuLinksWrapper>

        <div style={{ opacity: 0.7 }}>
          <ThankYouText mobileMenuOpen={mobileMenuOpen}>
            Thank you for visiting my website!
          </ThankYouText>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
