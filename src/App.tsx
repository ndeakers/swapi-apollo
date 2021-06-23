import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import StarWarsList from './StarWarsList';
import FilterForm from './FilterForm';
import { SW_Q, SW_Planets } from "./graphQLQuery";
import StarWarsPlanetList from './StarWarsPlanetsList';

const link = createHttpLink({
  uri: 'http://localhost:51609',
  credentials: 'omit'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

/** App
 * 
 * Props:
 * - none
 * 
 * State:
 * - cacheData [info,...]
 * - eyeColor 
 * 
 * App -> { FilterForm, StarWarsList }
 */

function App() {
  const [cacheData, setCacheData] = useState([]);
  const [planetCacheData, setPlanetCacheData] = useState([]);
  const [eyeColor, setEyeColor] = useState("");
  const [planet, setPlanet] = useState("");

  function searchCache(formData:{eyeColor:string}) {
    const res = client.readQuery({query: SW_Q});

    setCacheData(res.allPeople.people);
    setEyeColor(formData.eyeColor);

  }

  function searchPlanetCache(formData:{planetName:string}) {
    const res = client.readQuery({query: SW_Planets});

    setPlanetCacheData(res.allPlanets.planets);
    setPlanet(formData.planetName)
  }

  return (
    <ApolloProvider client={client}>   
      <StarWarsList data={cacheData} filter={eyeColor} search={searchCache}/> 
      <StarWarsPlanetList data={planetCacheData} filter={planet} search={searchPlanetCache} />
    </ApolloProvider>
  );
}

export {client};
export default App;
