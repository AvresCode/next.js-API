import client from "../../config/appolloClient";
import { getAllCharacters } from "../../config/queries";
import styles from "../../styles/Home.module.css";
//import { PageNavigate } from "../../components/PageNavigate";
import { useState } from "react";

const Characters = () => {
  //   const pageCount = characters?.info?.pages;
  //   console.log("pageCount:", pageCount);
  const [newPageData, setNewPageData] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(1);

  const newPage = async (pageNum) => {
    const { data } = await client.query({
      query: getAllCharacters,
      variables: { page: pageNum },
    });
    console.log("data", data.characters);
    setNewPageData(data.characters);

    setPrevPage(data.characters.info.prev);
    setNextPage(data.characters.info.next);
    // console.log("prev next:", prevPage, nextPage);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>“Rick and Morty” adventure</h1>

        <div className={styles.grid}>
          {newPageData &&
            newPageData?.results.map((char) => (
              <div className={styles.card} key={char.id}>
                {" "}
                {char.name}
              </div>
            ))}

          <div>
            {" "}
            <button onClick={() => newPage(prevPage)}>previous</button>
            {prevPage ? prevPage + 1 : 1}
            <button onClick={() => newPage(nextPage)}>next</button>{" "}
          </div>

          {/* <div>{currentPage === 1 && newPage(currentPage)}</div> */}

          {/* <div>
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
        </div> */}
        </div>
      </main>
    </div>
  );
};

// export const getStaticProps = async ({ pageNum }) => {
//   const { data } = await client.query({
//     query: getAllCharacters,
//     variables: { page: pageNum },
//   });

//   // console.log("variables", pageNum);
//   return {
//     props: {
//       characters: data?.characters,
//     },
//   };
// };

export default Characters;
