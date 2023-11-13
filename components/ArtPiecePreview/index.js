import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  isFavorite,
}) {
  const router = useRouter();
  return (
    <StyledList>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        //Back link
        onClick={() => router.push(`art-pieces/${slug}`)}
      />
      <p>
        <strong>{artist}: </strong>
        {title}
      </p>
    </StyledList>
  );
}

const StyledList = styled.li`
  position: relative;
`;
