import React, { useState } from "react";
import { NavWrapper, Title } from "./styles";
import { Slant as Hamburger } from "hamburger-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <NavWrapper>
      <Title className="noselect">Andrey Mitko</Title>
      <nav>
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
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
