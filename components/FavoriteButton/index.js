import styled from "styled-components";
import FavIconSvg from "./heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButton type="button" onClick={onToggleFavorite}>
        <FavIcon $isFavorite={isFavorite} />
      </StyledButton>
    </>
  );
}
const FavIcon = styled(FavIconSvg)`
  width: 24px;
  height: 24px;
  fill: ${(props) => (props.$isFavorite ? "red" : "grey")};
`;

const StyledButton = styled.button`
  all: unset;
  position: absolute;
  z-index: 1;
`;
