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

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: getAllCharacters,
  });
  const pagesCount = data?.characters?.info?.pages;
  const pageIntoArray = Array.from(Array(pagesCount).keys());
  const pageArray = pageIntoArray.map((p) => p + 1);
  console.log(pageIntoArray);
  console.log(pageArray);

  // const paths = pageArray.map((character) => ({
  //   params: { slug: [character.slug] },
  // }));

  const paths = pageArray.map((page) => ({ params: { page: `${page}` } }));

  return {
    paths,
    fallback: false,
  };
};

//replace page with slug

//export const getStaticProps = async ({ params }) => {

export const getStaticProps = async ({ params: { page } }) => {
  // const slug = params.slug[0];
  const { data } = await client.query({
    query: getAllCharacters,
    variables: { page: parseInt(page) },
    // variable: { slug },
  });

  //  console.log("data", data);
  return {
    props: {
      characters: data?.characters,
    },
  };
};

export default pages;
