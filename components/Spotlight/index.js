import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <FavoriteButton />
      <Image src={image} alt={artist} width={400} height={400} />
      <p>
        <strong>{artist}</strong>
      </p>
    </>
  );
}
