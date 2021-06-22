import { gql } from "@apollo/client";

const SW_Q = gql`
query {
    allPeople{
      people{
        name,
        eyeColor,
        id
      }
    }
  }`;

  export { SW_Q };