import { useNavigate } from "react-router";

//Interfaces
import { NavLink } from "../../../../interfaces";

//Styles
import { StyledLink, Wrapper } from "./NavBar.styles";

const NavBar = ({
  links,
  gap,
  fontSize,
  mTop,
}: {
  links: NavLink[];
  gap: string;
  fontSize: string;
  mTop: string;
}) => {
  return (
    <Wrapper gap={gap} fontSize={fontSize} mTop={mTop}>
      {links.map((link: NavLink, i: number) => (
        <StyledLink to={link.path} key={i}>
          {link.content}
        </StyledLink>
      ))}
    </Wrapper>
  );
};

export default NavBar;
