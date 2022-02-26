import gql from "graphql-tag";
import { FC } from "react";
import { CharacterCardFragment } from "../../graphql/types";
import { CharacterCard } from "../CharacterCard";
export const QUERY_CHARACTERS = gql`
  query characters {
    characters {
      results {
        ...CharacterCard
      }
    }
  }
  ${CharacterCard.fragments.character}
`;

interface CharactersProps {
  characters: CharacterCardFragment[];
}

export const Characters: FC<CharactersProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {characters.map((item) => (
        <CharacterCard key={item.id} {...item} />
      ))}
    </div>
  );
};
