import client from "../../config/appolloClient";
import { getAllCharacters } from "../../config/queries";
import styles from "../../styles/Home.module.css";
import CharactersComponent from "../../components/CharactersComponent";

const Characters = ({ characters }) => {
  //   const pageCount = characters?.info?.pages;
  //   console.log("pageCount:", pageCount);
  return (
    <div>
      <CharactersComponent characters={characters} />{" "}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: getAllCharacters,
    //variables: { page: 1 },
  });

  //  console.log("data", data);
  return {
    props: {
      characters: data?.characters,
    },
  };
};

export default Characters;
