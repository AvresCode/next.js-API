// import Link from "next/link";
// import client from "../config/appolloClient";
// import { getAllCharacters } from "../config/queries";
// import styles from "../styles/Home.module.css";
// import { useState } from "react";

// const PageNavigate = ({ data }) => {
//   //   const pageCount = characters?.info?.pages;
//   //   console.log("pageCount:", pageCount);
//   const [newPageData, setNewPageData] = useState(null);
//   const newPage = async (pageNum) => {
//     const { data } = await client.query({
//       query: getAllCharacters,
//       variables: { page: pageNum },
//     });
//     console.log("data", data.characters);
//     setNewPageData(data.characters);
//   };

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1 className={styles.title}>“Rick and Morty” adventure</h1>

//         <div className={styles.grid}>
//           {newPageData &&
//             newPageData?.results.map((char) => (
//               <div className={styles.card} key={char.id}>
//                 {" "}
//                 {char.name}
//               </div>
//             ))}

//           <div>
//             {" "}
//             <button onClick={() => newPage(newPageData?.info?.prev)}>
//               previous
//             </button>
//             {newPageData?.info?.prev ? newPageData?.info?.prev + 1 : 1}
//             <button onClick={() => newPage(newPageData?.info?.next)}>
//               next
//             </button>{" "}
//           </div>

//           {/* <div>
//           {page > 1 && (
//             <Link href={`${page - 1}`} passHref>
//               <button> Previous</button>
//             </Link>
//           )}{" "}
//           {page === 1 && (
//             <Link href={`characters/2`} passHref>
//               <button> Next</button>{" "}
//             </Link>
//           )}
//           {page < pageCount && page !== 1 && (
//             <Link href={`${page + 1}`} passHref>
//               <button> Next</button>{" "}
//             </Link>
//           )}
//         </div> */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PageNavigate;
