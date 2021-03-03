import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Select from 'react-select-country-list'

// const CountrySelect = () => (
//   <div>
//     <label >Country</label>
//     <Select isSearchable options={countries} {name: "country",
//     label: "Country",
//     placeholder: "Insert Country",
//     rules: "required|string",
//     value: findCountryByShortCode("IT"),
//     output: country => country && country.value} />
//     <small className={$small}>{form.$("country").error}</small>
//   </div>
// ));

// export default observer(({ form }) => (
//   <form onSubmit={form.onSubmit}>
//      <CountrySelect form={form} />
//     <br />
//     <button type="submit" className={$btn} onClick={form.onSubmit}>
//       Submit
//     </button>
//     <p>{form.error}</p>
//   </form>
// ));


export default class SignUpForm extends Component {
     
    render() {
        //   const src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTDl8frak17IlMbIr_As8NejzSG_qbK5I&libraries=places&callback=initMap"
        //   const [value, setValue] = useState('')
        //   const options = useMemo(() => countryList().getLabels(), [])
        
        //   const changeHandler = value => {
        //     setValue(value)
        //   }
        return (
                <Form>
                    <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" placeholder="Choose your country" />
                    {/* <Select options={options} value={value} onChange={changeHandler} /> */}
                    </Form.Group>
                <Button variant="primary" size="lg" block type="submit">
                    Submit
                </Button>
                </Form> 
           
        )
    }
}
