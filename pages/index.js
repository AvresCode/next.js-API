import styles from "../styles/Home.module.css";

export default function Home({ characters }) {
  // console.log("charachters", characters.characters.results);
  const pageCount = characters.characters.info.pages;
  console.log("pageCount:", pageCount);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>“Rick and Morty” adventure</h1>
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
