import { useState } from "react"
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { SW_Planets } from "./graphQLQuery";
import {client} from "./App"
import PlanetList, { Planet } from "./PlanetList";

type AppProps = {
    search: (formData:{planetName:string}) => void
  };

/** FilterForm
 * 
 * Props:
 * - search()
 * 
 * State:
 * - formData
 * 
 * App -> FilterPlanetForm
 */
function FilterPlanetForm({search}: AppProps) {
    const initialState = { planetName: "" }
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt: { target: { value: string; }; }){
        setFormData({planetName: evt.target.value});
    }

    function handleSubmit(evt: { preventDefault: () => void; }){
        evt.preventDefault();
        console.log("handleSubmit");
        search(formData);
    }

    const res = client.readQuery({query: SW_Planets});
    
    if (!res) return <p>Loading...</p>
    let planets = res.allPlanets.planets.map((planet:Planet) => 
        { return <option value={planet.name}>{planet.name}</option> })

    console.log(formData);
    return (<Form onSubmit={handleSubmit}>
        <Form.Control as="select" onChange={handleChange} name="planetName" aria-label="Default select example">
            <option>Choose a planet!</option>
            { planets }
        </Form.Control>
        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
    )
}

export default FilterPlanetForm;