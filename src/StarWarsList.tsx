
import { useQuery } from '@apollo/client';
import './App.css';
import { SW_Q } from './graphQLQuery';
import PeopleList from './PeopleList';

type Data = {
  data:Record<string,any>,
  filter: string
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

function StarWarsList({data, filter}: Data) {

  useQuery(SW_Q);

  let newData = data.filter((person: Record<string,any>) => person.eyeColor === filter);

  return (
    <div>
      <PeopleList data={newData}/>
    </div>
  );
}

export default StarWarsList;
