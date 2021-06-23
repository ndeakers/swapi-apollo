
import { useQuery } from '@apollo/client';
import './App.css';
import { SW_Q } from './graphQLQuery';
import FilterForm from './FilterForm'
import PeopleList from './PeopleList';

type Data = {
  data:Record<string,any>,
  filter: string,
  search:(formData:{eyeColor:string}) => void
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

function StarWarsList({data, filter, search}: Data) {

  useQuery(SW_Q);

  let newData = data.filter((person: Record<string,any>) => person.eyeColor === filter);

  return (
    <div>
      <FilterForm search={search}/>
      <PeopleList data={newData}/>
    </div>
  );
}

export type { Data }
export default StarWarsList;
