import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const CharactersComponent = ({ characters }) => {
  const pageCount = characters?.info?.pages;
  console.log("pageCount:", pageCount);
  const router = useRouter();
  // console.log("router", router.query);
  const page = router.query.page ? parseInt(router.query.page) : 1;
  // const page = parseInt(router.query.page) || 1;
  console.log("page", page);

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
            {page > 1 && (
              <Link href={`${page - 1}`} passHref>
                <button> Previous</button>
              </Link>
            )}{" "}
            {page === 1 && (
              <Link href={`characters/2`} passHref>
                <button> Next</button>{" "}
              </Link>
            )}
            {page < pageCount && page !== 1 && (
              <Link href={`${page + 1}`} passHref>
                <button> Next</button>{" "}
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharactersComponent;
