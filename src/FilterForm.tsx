import { useState } from "react"
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

type AppProps = {
    search: (formData:{eyeColor:string}) => void
  };

/** FilterForm
 * 
 * Props:
 * - search()
 * 
 * State:
 * - formData
 * 
 * App -> FilterForm
 */
function FilterForm({search}: AppProps) {
    const initialState = { eyeColor: "" }
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt: { target: { value: string; }; }){
        setFormData({eyeColor: evt.target.value});
    }

    function handleSubmit(evt: { preventDefault: () => void; }){
        evt.preventDefault();
        console.log("handleSubmit");
        search(formData);
    }

    console.log(formData);
    return (<Form onSubmit={handleSubmit}>
        <Form.Control as="select" onChange={handleChange} name="eyeColor" aria-label="Default select example">
            <option>Choose an eye color!</option>
            <option value="blue">Blue</option>
            <option value="hazel">Hazel</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="gold">Gold</option>
        </Form.Control>
        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
    )
}

export default FilterForm