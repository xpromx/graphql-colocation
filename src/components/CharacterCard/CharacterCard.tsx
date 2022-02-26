/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";
import { CharacterCardFragment } from "../../graphql/types";

export const CharacterCard = ({ image, name }: CharacterCardFragment) => {
  return (
    <div className="border p-2 rounded shadow w-full">
      {image && <img src={image} className="w-full" alt={name || ""} />}
      <h3 className="text-lg font-semibold text-center mt-2">{name}</h3>
    </div>
  );
};

CharacterCard.fragments = {
  character: gql`
    fragment CharacterCard on Character {
      id
      name
      image
    }
  `,
};
