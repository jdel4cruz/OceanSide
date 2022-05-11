import React from "react";
import { Link } from "@mui/material";

//Interfaces
import { NavLink } from "../../interfaces";

//Styles
import { Wrapper } from "./NavBar.styles";

const NavBar = ({ links }: { links: NavLink[] }) => {
  return (
    <Wrapper>
      {links.map((link: NavLink) => (
        <Link href={link.path} color={link.color} underline={link.underline}>
          {link.content}
        </Link>
      ))}
    </Wrapper>
  );
};

export default NavBar;
