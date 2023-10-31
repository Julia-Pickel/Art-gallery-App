import Link from "next/link";
import styled from "styled-components";

export default function Navigaton() {
  return (
    <>
      <ul>
        <StyledList>
          <StyledLink href="/">Spotlight </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/art-pieces">Art Pieces </StyledLink>
        </StyledList>
      </ul>
    </>
  );
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const StyledList = styled.a`
  list-style: none;
`;
