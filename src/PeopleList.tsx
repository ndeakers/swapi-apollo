/** PeopleList
 * 
 * Props:
 * - data [{person}, {person}, ...]
 * 
 * State:
 * - none
 * 
 * StarWarsList -> PeopleList
 */

type Data = {
    data: { id: string, name: string, eyeColor: string }[]
}

function PeopleList({ data }: Data) {

    type Person = {
        name: string,
        id: string,
        eyeColor: string
    }

    let list = data.length !== 0 ? data.map((person: Person) => (
        <div key={person.id}>
            <p>
                {person.name}: {person.eyeColor}
            </p>
        </div>))
        : "Loading";

    return <>{list}</>
}

export default PeopleList;