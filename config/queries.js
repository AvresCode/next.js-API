import { gql } from "@apollo/client";

const getAllCharacters = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        species
      }
    }
  }
`;

export { getAllCharacters };

// const getAllCharacters = gql`
//   query getCharacters($slug: String) {
//     characters(slug: $slug) {
//       slug
//       info {
//         pages
//         next
//         prev
//       }
//       results {
//         id
//         name
//         species
//       }
//     }
//   }
// `;
