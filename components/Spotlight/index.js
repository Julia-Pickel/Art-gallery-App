import Image from "next/image";

export default function Spotlight({ image, artist }) {
  console.log(image, artist);
  return (
    <>
      <Image src={image} alt={artist} width={400} height={400} />
      <p>
        <strong>{artist}: </strong>
      </p>
    </>
  );
}
