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

  const SW_Planets = gql`
  query {
    allPlanets{
      planets {
        name
        terrains
      }
    }
  }`;

  export { SW_Q, SW_Planets };