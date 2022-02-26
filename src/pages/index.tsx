import type { NextPage } from "next";
import { Characters } from "../components/Characters";
import { CharacterCardFragment, CharactersQuery } from "../graphql/types";
import { graphql } from "../utils/graphql";

export async function getStaticProps() {
  const characters = await graphql.characters();

  return {
    props: {
      characters,
    },
    revalidate: 1, // In seconds
  };
}

interface PageProps {
  characters: CharactersQuery;
}

const Page: NextPage<PageProps> = ({ characters }) => {
  const data = characters.characters?.results as CharacterCardFragment[];
  return <div className="p-10">{data && <Characters characters={data} />}</div>;
};

export default Page;
