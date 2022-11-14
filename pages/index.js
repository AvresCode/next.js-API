import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../config/appolloClient";
import { getAllCharacters } from "../config/queries";

export default function Home({ characters }) {
  console.log("charachters", characters.characters.results);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>“Rick and Morty” adventure</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          {characters &&
            characters.characters?.results?.map((char) => (
              <div className={styles.card} key={char.id}>
                {" "}
                {char.name}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await res.json();
//   return {
//     props: { characters: data },
//   };
// }

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: getAllCharacters,
    variables: { page: 1 },
  });

  //  console.log("data", data);
  return {
    props: {
      characters: data,
    },
  };
};
