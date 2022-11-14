import client from "../../config/appolloClient";
import { getAllCharacters } from "../../config/queries";
import styles from "../../styles/Home.module.css";

const Characters = ({ characters }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>“Rick and Morty” adventure</h1>

        <div className={styles.grid}>
          {characters &&
            characters.characters?.results?.map((char) => (
              <div className={styles.card} key={char.id}>
                {" "}
                {char.name}
              </div>
            ))}

          <div>
            {" "}
            <button> Previous</button> <button> Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

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

export default Characters;
