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
import { SW_Q } from "./graphQLQuery";

const link = createHttpLink({
  uri: 'http://localhost:51635',
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
  const [eyeColor, setEyeColor] = useState("");

  function searchCache(formData:{eyeColor:string}) {
    const res = client.readQuery({query: SW_Q});

    setCacheData(res.allPeople.people);
    setEyeColor(formData.eyeColor);

  }

  return (
    <ApolloProvider client={client}>   
    <FilterForm search={searchCache}/>  
    <StarWarsList data={cacheData} filter={eyeColor}/> 
    </ApolloProvider>
  );
}

export default App;
