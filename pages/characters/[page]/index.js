import client from "../../../config/appolloClient";
import { getAllCharacters } from "../../../config/queries";
import CharactersComponent from "../../../components/CharactersComponent";

const pages = ({ characters }) => {
  return (
    <div>
      <CharactersComponent characters={characters} />{" "}
    </div>
  );
};

export const getStaticProps = async ({ params: { page } }) => {
  const { data } = await client.query({
    query: getAllCharacters,
    variables: { page: Number(page) },
  });

  //  console.log("data", data);
  return {
    props: {
      characters: data?.characters,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: getAllCharacters,
  });
  const pagesCount = data?.characters?.info?.pages;
  const pageIntoArray = Array.from(Array(pagesCount).keys());
  const pageArray = pageIntoArray.map((p) => p + 1);
  console.log(pageIntoArray);
  console.log(pageArray);

  const paths = pageArray.map((page) => ({ params: { page: `${page}` } }));
  return {
    paths,
    fallback: false,
  };
};

export default pages;
