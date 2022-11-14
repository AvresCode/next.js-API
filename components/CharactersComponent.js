import styles from "../styles/Home.module.css";

const CharactersComponent = ({ characters }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>“Rick and Morty” adventure</h1>

        <div className={styles.grid}>
          {characters &&
            characters.results?.map((char) => (
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

export default CharactersComponent;
