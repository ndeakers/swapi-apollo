/** PlanetList
 * 
 * Props:
 * - data [{planet}, {planet}, ...]
 * 
 * State:
 * - none
 * 
 * StarWarsPlanetsList -> PlanetList
 */

 type Data = {
    data: { name: string, terrains: string[] }[]
}

type Planet = {
    name: string,
    terrains: string[]
}

function PlanetList({ data }: Data) {

    let list = data.length !== 0 ? data.map((planet: Planet) => (
        <div key={planet.name}>
            <p>
                {planet.name}: {planet.terrains.map((terrain: String) => {
                    return <p>{terrain}</p>
                })}
            </p>
        </div>))
        : "Choose a Planet";

    return <>{list}</>
}

export type { Planet };
export default PlanetList;