
import { useQuery } from '@apollo/client';
import './App.css';
import { SW_Planets } from './graphQLQuery';
import FilterPlanetForm from './FilterPlanetForm'
import PlanetList from './PlanetList';

type Data = {
  data:Record<string,any>,
  filter: string,
  search:(formData:{planetName:string}) => void
}

/** StarWarsList
 * 
 * Props:
 * - data [{person}, {person}, ...]
 * - filter
 * 
 * State:
 * - none
 * 
 * App -> { FilterForm, PeopleList }
 */

function StarWarsPlanetList({data, filter, search}: Data) {

  useQuery(SW_Planets);

  let newData = data.filter((planet: Record<string,any>) => planet.name === filter);

  return (
    <div>
      <FilterPlanetForm search={search}/>
      <PlanetList data={newData}/>
    </div>
  );
}

export type { Data }
export default StarWarsPlanetList;
