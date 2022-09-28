import React, { useState } from "react";
import { NavWrapper, Title } from "./styles";
import { Slant as Hamburger } from "hamburger-react";

type Props = {
  bgColor: string ;
};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <NavWrapper color={props.bgColor}>
      <Title className="noselect">Andrey Mitko</Title>
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
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
