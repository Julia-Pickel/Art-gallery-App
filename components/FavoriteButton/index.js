import styled from "styled-components";
import FavIconSvg from "./../../assets/heart.svg";
import { useState } from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  //const [isToggled, setToggle] = useState(false);
  function handleButton() {
    //onToggleFavorite
    onToggleFavorite(!isFavorite);
  }

  return (
    <button type="button" onClick={() => handleButton()}>
      {isFavorite ? <FavIcon $isFav /> : <FavIcon />}
    </button>
  );
}
const FavIcon = styled(FavIconSvg)`
  height: 24px;
  width: 24px;
  fill: ${(props) => (props.$isFav ? "red" : "white")};
`;
const StyledButton = styled.button``;
