import { gql } from "urql";

export const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

// passing in query parameter of 'id' - ! means required
export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            image
            episode {
                name
                episode
            }
        }
    }
`;

export const GET_CHARACTER_LOCATIONS = gql`
 query SearchName($name: String!) {
  characters(filter: { name: $name }) {
    results {
      location {
        name
      }
    }
  }
 }
`;  